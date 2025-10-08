import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiVuejsFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiFastapi,
  SiFlask,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiSqlalchemy,
  SiGithub,
  SiSelenium,
  SiScrapy,
  SiPostman,
  SiSwagger,
  SiPolars,
  SiPandas,
} from "react-icons/si";
import { FaPython, FaDocker, FaSass, FaNodeJs } from "react-icons/fa";

export const frontend = [
  {
    logo: (
      <RiNextjsFill className="text-5xl text-zinc-900 transition-transform duration-300 hover:text-zinc-800 hover:scale-110 hover:drop-shadow-[0_0_8px_#000]" />
    ),
    desc: "Next.js – React framework for server-side rendering and static sites",
  },
  {
    logo: (
      <RiReactjsFill className="text-5xl text-cyan-400 transition-transform duration-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#22d3ee]" />
    ),
    desc: "React.js – JavaScript library for building user interfaces",
  },
  {
    logo: (
      <RiTailwindCssFill className="text-5xl text-sky-500 transition-transform duration-300 hover:text-sky-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#0ea5e9]" />
    ),
    desc: "Tailwind CSS – Utility-first CSS framework for rapid UI design",
  },
  {
    logo: (
      <RiVuejsFill className="text-5xl text-[#42b883] transition-transform duration-300 hover:text-[#6be6ad] hover:scale-110 hover:drop-shadow-[0_0_8px_#42b883]" />
    ),
    desc: "Vue.js – Progressive JavaScript framework for building UIs",
  },
  {
    logo: (
      <BiLogoTypescript className="text-5xl text-blue-500 transition-transform duration-300 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6]" />
    ),
    desc: "TypeScript – Typed superset of JavaScript for safer code",
  },
  {
    logo: (
      <FaSass className="text-5xl text-[#cc6699] transition-transform duration-300 hover:text-[#d279a6] hover:scale-110 hover:drop-shadow-[0_0_8px_#cc6699]" />
    ),
    desc: "Sass – CSS preprocessor for easier and organized styling",
  },
];

export const backend = [
  {
    logo: (
      <FaPython className="text-5xl text-yellow-400 transition-transform duration-300 hover:text-yellow-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#facc15]" />
    ),
    desc: "Python – High-level programming language for backend development",
  },
  {
    logo: (
      <SiFastapi className="text-5xl text-teal-400 transition-transform duration-300 hover:text-teal-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#14b8a6]" />
    ),
    desc: "FastAPI – Modern Python framework for building APIs quickly",
  },
  {
    logo: (
      <SiFlask className="text-5xl text-gray-400 transition-transform duration-300 hover:text-gray-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#9ca3af]" />
    ),
    desc: "Flask – Lightweight Python web framework",
  },
  {
    logo: (
      <SiDjango className="text-5xl text-green-600 transition-transform duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#22c55e]" />
    ),
    desc: "Django – Full-featured Python web framework",
  },
  {
    logo: (
      <FaNodeJs className="text-5xl text-green-400 transition-transform duration-300 hover:text-green-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#4ade80]" />
    ),
    desc: "Node.js – JavaScript runtime for server-side development",
  },
  {
    logo: (
      <SiExpress className="text-5xl text-gray-700 transition-transform duration-300 hover:text-gray-600 hover:scale-110 hover:drop-shadow-[0_0_8px_#374151]" />
    ),
    desc: "Express.js – Minimal web framework for Node.js",
  },
];

export const database = [
  {
    logo: (
      <SiPostgresql className="text-5xl text-blue-700 transition-transform duration-300 hover:text-blue-600 hover:scale-110 hover:drop-shadow-[0_0_8px_#2563eb]" />
    ),
    desc: "PostgreSQL – Powerful open-source relational database",
  },
  {
    logo: (
      <SiMysql className="text-5xl text-blue-500 transition-transform duration-300 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6]" />
    ),
    desc: "MySQL – Widely used relational database system",
  },
  {
    logo: (
      <SiSqlalchemy className="text-5xl text-black transition-transform duration-300 hover:text-black hover:scale-110 hover:drop-shadow-[0_0_8px_#374151]" />
    ),
    desc: "SQLAlchemy – Python ORM for database management",
  },
  {
    logo: (
      <SiSqlite className="text-5xl text-gray-500 transition-transform duration-300 hover:text-gray-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#9ca3af]" />
    ),
    desc: "SQLite – Lightweight file-based database engine",
  },
  {
    logo: (
      <SiPostman className="text-5xl text-orange-500 transition-transform duration-300 hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#f97316]" />
    ),
    desc: "Postman – Tool for testing and managing APIs",
  },
  {
    logo: (
      <SiSwagger className="text-5xl text-green-500 transition-transform duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#22c55e]" />
    ),
    desc: "Swagger – API documentation and design tool",
  },
];

export const others = [
  {
    logo: (
      <SiGithub className="text-5xl text-gray-700 transition-transform duration-300 hover:text-gray-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#6b7280]" />
    ),
    desc: "GitHub – Version control and code hosting platform",
  },
  {
    logo: (
      <FaDocker className="text-5xl text-blue-600 transition-transform duration-300 hover:text-blue-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6]" />
    ),
    desc: "Docker – Containerization tool for deploying applications",
  },
  {
    logo: (
      <SiSelenium className="text-5xl text-green-600 transition-transform duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#22c55e]" />
    ),
    desc: "Selenium – Browser automation and testing framework",
  },
  {
    logo: (
      <SiScrapy className="text-5xl text-orange-600 transition-transform duration-300 hover:text-orange-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#f97316]" />
    ),
    desc: "Scrapy – Python framework for web scraping and crawling",
  },
  {
    logo: (
      <SiPandas className="text-5xl text-blue-400 transition-transform duration-300 hover:text-blue-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#60a5fa]" />
    ),
    desc: "Pandas – Python library for data manipulation and analysis",
  },
  {
    logo: (
      <SiPolars className="text-5xl text-purple-500 transition-transform duration-300 hover:text-purple-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#a78bfa]" />
    ),
    desc: "Polars – Fast DataFrame library for large datasets",
  },
];
