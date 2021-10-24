export const userService = {
  login,
  register,
  facebookLogin,
};

async function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      email: email,
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(
    `http://localhost:8086/api/auth/login`,
    requestOptions
  );
  const user = await handleResponse(response);
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

async function register(email, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(
    `http://localhost:8086/api/auth/signup`,
    requestOptions
  );
  localStorage.setItem("registration", JSON.stringify(response));

  return handleResponse(response);
}

function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          // logout();
          // location.reload(true);
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }

  async function facebookLogin(facebookLoginRequest) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({ facebookLoginRequest }),
    };
  
    const response = await fetch(
      "http://localhost:8086/api/auth/facebook/signin",
      requestOptions
    );
    const user = await handleResponse(response);
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  