const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = { origin: 4200 };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.err(`Database NOT connected!\nReason: ${err}`));

require("./routes/item.routes.js")(app);
require("./routes/user.routes.js")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
