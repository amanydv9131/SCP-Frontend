const base_url = "http://localhost:5000/";

// Login
export const LOGIN = async (url, username, password) => {
  const user = {
    username: username,
    password: password,
  };

  const res = await fetch(base_url + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const response = await res.json();
  return response;
};
