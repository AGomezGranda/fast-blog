export const fetchPosts = async (token: string) => {
  const response = await fetch("http://127.0.0.1:8000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const createPost = async (token: string, post: any) => {
  const response = await fetch("http://127.0.0.1:8000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
}

export const fetchPostByUser = async (token: string, author_uuid: string) => {
  const response = await fetch(
    `http://127.0.0.1:8000/api/users/${author_uuid}/posts`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export const fetchPostById = async (token: string, uuid: string) => {
  const response = await fetch(`http://127.0.0.1:8000/api/posts/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
}