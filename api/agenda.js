let dadosAgenda = {
  "SETEMBRO": [
    "Sábado | 26/09 - IEAD Pinus 2 - Eliabe"
  ],
  "NOVEMBRO": [
    "Sábado e Domingo 21e22/11/26 - Panorama - CLEYTON"
]};

export default function handler(req, res) {

  // BUSCAR A AGENDA
  if (req.method === "GET") {
    return res.status(200).json(dadosAgenda);
  }

  // ALTERAR A AGENDA
  if (req.method === "POST") {
    dadosAgenda = req.body;

    return res.status(200).json({
      status: "OK",
      mensagem: "Agenda atualizada com sucesso",
      agenda: dadosAgenda
    });
  }

  return res.status(405).json({
    status: "ERRO",
    mensagem: "Método não permitido"
  });
}