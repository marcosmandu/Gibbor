function checkLogin(username, password) {
  if (username === "Guitarrista" && password === "Guitarrista1993@") {
    return "Login bem-sucedido!";
  } else {
    return "Usuário ou senha inválidos.";
  }
}
