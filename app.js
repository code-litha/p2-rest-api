const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  /*
  - WAJIB dikasih response dengan JSON minimal message
  - Secara default response code nya 200
  - HANYA boleh 1 kali kasih response. bisa kasih if / else atau return
  */
  if (true) {
    res.send("Hello World");
  } else {
    res.status(201).json({
      message: `Success create status code 201`,
    });
  }
});

app.use(router);

app.listen(port, () => {
  console.log(`Listening on PORT `, port);
});
