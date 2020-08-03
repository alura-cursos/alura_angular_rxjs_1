const { portfolioAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/portfolios")
    .post(auth, wrapAsync(portfolioAPI.add))
    .get(auth, wrapAsync(portfolioAPI.list));

  app
    .route("/portfolios/:portfolioId")
    .put(auth, wrapAsync(portfolioAPI.put))
    .delete(auth, wrapAsync(portfolioAPI.remove))
    .get(auth, wrapAsync(portfolioAPI.findById));
};
