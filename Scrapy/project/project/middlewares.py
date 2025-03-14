# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html

from scrapy import signals

# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter


class ProjectSpiderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, or item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Request or item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)


class ProjectDownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # Called for each request that goes through the downloader
        # middleware.

        # Must either:
        # - return None: continue processing this request
        # - or return a Response object
        # - or return a Request object
        # - or raise IgnoreRequest: process_exception() methods of
        #   installed downloader middleware will be called
        return None

    def process_response(self, request, response, spider):
        # Called with the response returned from the downloader.

        # Must either;
        # - return a Response object
        # - return a Request object
        # - or raise IgnoreRequest
        return response

    def process_exception(self, request, exception, spider):
        # Called when a download handler or a process_request()
        # (from other downloader middleware) raises an exception.

        # Must either:
        # - return None: continue processing this exception
        # - return a Response object: stops process_exception() chain
        # - return a Request object: stops process_exception() chain
        pass

    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)

from urllib.parse import urlencode
from random import randint
import requests

class ScrapeOpsFakeUserAgentMiddleware:
    
    @classmethod
    def from_crawler(cls, crawler):
        return cls(crawler.settings)
    
    def __init__(self, settings):
        self.scrapeops_api_key = settings.get('SCRAPEOPS_API_KEY')
        self.scrapeops_endpoint = settings.get('SCRAPEOPS_ENDPOINT', 'https://headers.scrapeops.io/v1/user-agents')
        self.scrapeops_fake_user_agent = settings.get('SCRAPEOPS_FAKE_USER_AGENT_ENABLED', False)
        self.scrapeops_num_results = settings.get('SCRAPEOPS_NUM_RESULTS')
        self.user_agents_list = []
        self._scrapeops_fake_user_agent_enabled()
        self._get_user_agents_list()
    
    def _get_user_agents_list(self):
        payload = {'api_key': self.scrapeops_api_key}
        if self.scrapeops_num_results:
            payload['num_results'] = self.scrapeops_num_results
        
        try:
            response = requests.get(self.scrapeops_endpoint, params=payload)
            json_response = response.json()
            self.user_agents_list = json_response.get('result', [])
            if len(self.user_agents_list) == 0:
                print("⚠️ No User Agents Found! Please Check Your API Key or ScrapeOps Endpoint URL")
        except Exception as e:
            print(f"❌ Failed to get User Agents: {e}")
    
    def _get_random_user_agent(self):
        if len(self.user_agents_list) == 0:
            self._get_user_agents_list()
        
        random_index = randint(0, len(self.user_agents_list) - 1)
        return self.user_agents_list[random_index]
    
    def _scrapeops_fake_user_agent_enabled(self):
        self.scrapeops_fake_user_agent = bool(self.scrapeops_fake_user_agent)
    
    def process_request(self, request, spider):
        if self.scrapeops_fake_user_agent:
            random_user_agent = self._get_random_user_agent()
            request.headers['User-Agent'] = random_user_agent
            print("***** New Header Attached *****")
            print(request.headers['User-Agent'])

import base64
from random import choice
from scrapy.exceptions import IgnoreRequest

class MyProxyMiddleware(object):
      
    @classmethod
    def from_crawler(cls, crawler):
          return cls(crawler.settings)
      
    def __init__(self, settings):
        self.proxy_list = self.load_proxies(settings.get('ROTATING_PROXY_LIST_PATH'))
        self.proxy_user = settings.get('PROXY_USER')
        self.proxy_password = settings.get('PROXY_PASSWORD')
    
    def load_proxies(self, path):
        with open(path, 'r') as file:
            return [proxy.strip() for proxy in file.readlines() if proxy.strip()]

    def process_request(self, request, spider):
        if self.proxy_list:
            proxy = self._get_random_proxy()
            request.meta['proxy'] = f"http://{proxy}"
            
            if self.proxy_user and self.proxy_password:
                proxy_credentials = f"{self.proxy_user}:{self.proxy_password}"
                encoded_credentials = base64.b64encode(proxy_credentials.encode('utf-8')).decode('utf-8')
                request.headers['Proxy-Authorization'] = f'Basic {encoded_credentials}'

            print(f"🔥 Proxy Attached: {proxy}")
    
    from scrapy.exceptions import IgnoreRequest

    def process_exception(self, request, exception, spider):
        if isinstance(exception, (IgnoreRequest, TimeoutError)):
            print(f"🚨 Proxy Failed: {request.meta['proxy']}")
            new_proxy = self._get_random_proxy()
            request.meta['proxy'] = f"http://{new_proxy}"
            print(f"🔄 Retrying with Proxy: {new_proxy}")
            return request

        
    def _get_random_proxy(self):
        return choice(self.proxy_list)    