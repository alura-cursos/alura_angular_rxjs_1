const { acoesAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/acoes")
    .get(wrapAsync(acoesAPI.list))
    .post(auth, wrapAsync(acoesAPI.add));

  app.route("/acoes/:acoesID").get(wrapAsync(acoesAPI.findById));
};
