const { PortfolioDao, UserDao } = require("../infra");

const api = {};

const userCanDelete = (user) => (portfolio) => portfolio.user_id == user.id;

api.add = async (req, res) => {
  console.log("####################################");
  console.log("Received JSON data", req.body);
  const portfolio = req.body;
  const id = await new PortfolioDao(req.db).add(portfolio, req.user.id);
  res.json(id);
};

api.list = async (req, res) => {
  console.log("####################################");
  console.log(`Listing portfolios`);
  const portfolios = await new PortfolioDao(req.db).listAllFromUser(
    req.user.id
  );
  const result = {
    items: [...portfolios],
    hasNext: false,
  };
  res.json(result);
};

api.findById = async (req, res) => {
  const { portfolioId } = req.params;
  console.log("####################################");
  console.log(`Finding PortFolio for ID ${portfolioId}`);
  const portfolio = await new PortfolioDao(req.db).findById(
    req.user.id,
    portfolioId
  );
  if (portfolio) {
    res.json(portfolio);
  } else {
    res.status(404).json({ message: "Portfolio does not exist" });
  }
};

api.put = async (req, res) => {
  console.log("####################################");
  console.log("Received JSON data", req.body);
  const { portfolioId } = req.params;
  const portfolio = req.body;
  const id = await new PortfolioDao(req.db).add(
    portfolio,
    req.user.id,
    portfolioId
  );

  const portfolioRet = await new PortfolioDao(req.db).findById(req.user.id, id);
  if (portfolioRet) {
    res.json(portfolioRet);
  } else {
    res.status(404).json({ message: "Portfolio does not exist" });
  }
};

api.remove = async (req, res) => {
  const user = req.user;
  const { portfolioId } = req.params;
  console.log("####################################");
  console.log(`Remove PortFolio for ID ${portfolioId} of user ${user.id}`);
  const dao = new PortfolioDao(req.db);
  const portfolio = await dao.findById(user.id, portfolioId);
  if (!portfolio) {
    const message = "PortfolioId does not exist";
    console.log(message);
    return res.status(404).json({ message });
  }

  if (userCanDelete(user)(portfolio)) {
    await dao.remove(portfolioId);
    console.log(`Portfolio ${portfolioId} deleted!`);
    res.status(200).end();
  } else {
    console.log(`
            Forbiden operation. User ${user.id} 
            can delete portfolio from user ${portfolio.user_id}
        `);
    res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = api;
