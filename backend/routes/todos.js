const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(
  __dirname,
  "../data/todos.json"
);

function readTodos() {
  return JSON.parse(
    fs.readFileSync(
      filePath,
      "utf8"
    )
  );
}

function writeTodos(data) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      data,
      null,
      2
    )
  );
}



/* ==========================
   GET ALL TODOS
========================== */

router.get("/", (req, res) => {

  const todos =
    readTodos();

  res.json(
    todos
  );

});



/* ==========================
   GET SINGLE TODO
========================== */

router.get("/:id", (req, res) => {

  const todos =
    readTodos();

  const todo =
    todos.find(
      t =>
      t.id ==
      req.params.id
    );

  if (!todo) {

    return res
      .status(404)
      .json({
        message:
        "Todo not found"
      });

  }

  res.json(
    todo
  );

});



/* ==========================
   CREATE TODO
========================== */

router.post("/", (req, res) => {

  const todos =
    readTodos();

  const newTodo = {

    id:
      Date.now(),

    title:
      req.body.title,

    description:
      req.body.description
      || "",

    completed:
      false,

    priority:
      req.body.priority
      || "Medium",

    dueDate:
      req.body.dueDate
      || null,

    createdAt:
      new Date(),

    updatedAt:
      new Date()

  };

  todos.push(
    newTodo
  );

  writeTodos(
    todos
  );

  res
    .status(201)
    .json(
      newTodo
    );

});



/* ==========================
   UPDATE TODO
========================== */

router.put(
"/:id",

(req,res)=>{

let todos =
readTodos();

const index =
todos.findIndex(
t=>
t.id ==
req.params.id
);

if(
index === -1
){

return res
.status(404)
.json({
message:
"Todo not found"
});

}

todos[
index
]={

...todos[
index
],

...req.body,

updatedAt:
new Date()

};

writeTodos(
todos
);

res.json({

message:
"Todo updated",

todo:
todos[
index
]

});

}

);



/* ==========================
   DELETE TODO
========================== */

router.delete(
"/:id",

(req,res)=>{

let todos =
readTodos();

const exists =
todos.some(
t=>
t.id ==
req.params.id
);

if(
!exists
){

return res
.status(404)
.json({

message:
"Todo not found"

});

}

todos =
todos.filter(
t=>
t.id !=
req.params.id
);

writeTodos(
todos
);

res.json({

message:
"Todo deleted"

});

}

);



module.exports =
router;