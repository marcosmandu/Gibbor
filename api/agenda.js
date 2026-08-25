let dadosAgenda = {
  "AGOSTO": [
    "Sábado / 15/08 - às 18:30h - Igreja Missão, Putin SJC - Ensaio da GIBBOR",
    "Sábado | 22/08 - Santa Cecília",
    "Sábado | 29/08 - Igreja em Taubaté - Congresso de Jovens",
    "DOMINGO / 30/08 às 11h - Igreja Missão, Putin SJC - Ensaio da GIBBOR"
  ],

  "SETEMBRO": [
    "Sábado e Domingo | 05 e 06/09 - Igreja no Putin",
    "Sábado | 26/09 - IEAD Pinus 2 - Eliabe"
  ]
};

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