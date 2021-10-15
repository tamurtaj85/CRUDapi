"use strict";

export async function routes_Auth(app) {
  const { authControl } = await import("../controllers/index.js");

  app.route("/signin").post(await authControl.signin);
  app.route("/signup").post(await authControl.signup);
}
