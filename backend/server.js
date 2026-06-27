const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// API HOME ROUTE
app.get("/", (req, res) => {

res.status(200).json({

app: "TaskFlow",

message:
"TaskFlow Todo API Running",

status:
"ONLINE",

version:
"1.0.0",

developer:
"Poovarasu V",

endpoints: [

"/todos",
"/todos/:id"

]

});

});

// TODO ROUTES
app.use(
"/todos",
require("./routes/todos")
);

// FALLBACK
app.use((req, res) => {

res.status(404).json({

error:
"Route Not Found"

});

});

const PORT =
process.env.PORT
||
5000;

app.listen(
PORT,
() => {

console.log(
`Server running on ${PORT}`
);

}
);
