const BASE_URL = "http://127.0.0.1:8000/api";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  token_type: string;
}

export async function register(
  credentials: RegisterCredentials,
): Promise<AuthResponse> {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  return response.json();
}

export async function login(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return response.json();
}

export async function getCurrentUser(token: string): Promise<any> {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};


