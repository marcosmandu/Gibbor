export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: "ERRO",
      mensagem: "Método não permitido"
    });
  }

  const { username, password } = req.body || {};

  const usuarioCorreto = "Guitarrista";
  const senhaCorreta = "Guitarrista1993@";

  if (
    username === usuarioCorreto &&
    password === senhaCorreta
  ) {
    return res.status(200).json({
      status: "OK",
      mensagem: "Login bem-sucedido!"
    });
  }

  return res.status(401).json({
    status: "ERRO",
    mensagem: "Usuário ou senha inválidos."
  });
}