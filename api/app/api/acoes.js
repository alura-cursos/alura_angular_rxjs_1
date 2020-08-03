const { AcoesDao } = require("../infra");

const api = {};

api.add = async (req, res) => {
  const { codigo, descricao, preco } = req.body;
  console.log(req.body);
  const AcoesDao = new AcoesDao(req.db);

  const acoesid = await AcoesDao.add(codigo, descricao, preco);
  const acoes = await AcoesDao.findById(acoesid);
  console.log(`Ação adicionada`, acoes);
  res.json(acoes);
};

api.list = async (req, res) => {
  let { valor } = req.query;
  valor = valor || "";
  console.log(`Busca ação por ${valor}`);
  const acoes = await new AcoesDao(req.db).listAll(valor);
  const result = { payload: acoes };
  res.json(result);
};

api.findById = async (req, res) => {
  const { acoesID } = req.params;
  console.log("####################################");
  console.log(`Buscando acoes pelo ID ${acoesID}`);
  const acoes = await new AcoesDao(req.db).findById(acoesID);
  if (acoes) {
    res.json(acoes);
  } else {
    res.status(404).json({ message: "acoes does not exist" });
  }
};

module.exports = api;
