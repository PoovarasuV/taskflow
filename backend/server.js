const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", require("./routes/todos"));

app.get("/", (req, res) => {
  res.send("Todo API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});