// app.use(function (req, res) {
//     res.status(404).send({ url: req.originalUrl + " not found" });
//   });

export function notFound(req, res){
  res.status(404).send({ url: req.originalUrl + " not found" });
};
