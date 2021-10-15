export const config = {
  port: process.env.PORT || 3000,

  secrets: {
    jwt: process.env.JWT_SECRET || "nodejsAPI",
    jwtExp: "100d",
  },

  dbUrl: "mongodb://localhost/ToDo_db",
};

export const constants = {
  PAGINATION_OFFSET: 0,
  PAGINATION_LIMIT: 1,
};
