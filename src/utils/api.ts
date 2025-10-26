const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface UserMessage {
  name: string;
  email: string;
  message: string;
}

export interface ChatRequest {
  prompt: string;
  session_id?: string;
}

export interface ChatResponse {
  reply: string;
  session_id: string;
}

export async function postUserMessage(data: UserMessage) {
  const res = await fetch(`${API_URL}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail[0]?.msg || JSON.stringify(error.detail));
  }
  return await res.json();
}

export async function postUserChatBot(
  data: ChatRequest
): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Error");
  }
  const rawResponse = await res.json();
  console.log("[API] Raw response:", rawResponse);
  return rawResponse;
}
