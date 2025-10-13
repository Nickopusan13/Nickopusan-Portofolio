const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface UserMessage {
  name: string;
  email: string;
  message: string;
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
    throw new Error(error.detail || "Error");
  }
  return await res.json();
}
