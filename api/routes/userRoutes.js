"use strict";

export async function routes_User(app) {
  const { userControl } = await import("../controllers/index.js");

  app.route("/me").get(userControl.showUserInfo);

  app.route("/update_me").post(await userControl.upadteUserInfo);
}
