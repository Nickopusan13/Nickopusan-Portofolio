const API_URL = "http://localhost:8000";

export interface UserMessage {
  name: string;
  email: string;
  message: string;
}

export async function postUserMessage(data: UserMessage) {
  console.log("API_URL =", API_URL);
  console.log("Requesting:", `${API_URL}/api/user`);
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
