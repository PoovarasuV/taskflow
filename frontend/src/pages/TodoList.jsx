import { useEffect, useState } from "react";

import {
useNavigate
}
from "react-router-dom";

import api from "../services/api";

import "../styles.css";

function TodoList(){

const navigate=
useNavigate();

const[
todos,
setTodos
]=useState([]);

const[
title,
setTitle
]=useState("");

const[
description,
setDescription
]=useState("");

const[
priority,
setPriority
]=useState("Medium");

const[
search,
setSearch
]=useState("");

async function load(){

const res=
await api.get(
"/todos"
);

setTodos(
res.data
);

}

useEffect(()=>{

load();

},[]);


async function addTodo(){

if(
!title.trim()
)
return;

await api.post(
"/todos",
{

title,

description,

priority

}
);

setTitle("");

setDescription("");

setPriority(
"Medium"
);

load();

}


async function toggle(
e,
id,
completed
){

e.stopPropagation();

await api.put(

`/todos/${id}`,

{

completed:
!completed

}

);

load();

}


async function del(
e,
id
){

e.stopPropagation();

await api.delete(

`/todos/${id}`

);

load();

}


const filtered=

todos.filter(
t=>

t.title

.toLowerCase()

.includes(

search

.toLowerCase()

)

);


const done=

todos.filter(
t=>
t.completed
).length;


const progress=

todos.length

?

(done/

todos.length)

*100

:

0;


return(

<div
className="container"
>

<h1
className="title"
data-text="TASKFLOW"
>

TASKFLOW

<span></span>

</h1>


<div
className="subtitle"
>

TODO OPERATIONS TERMINAL

</div>



<div
className="glass"
>

<div
style={{
position:
"relative"
}}
>

<input

className=
"input"

placeholder=
"Search Tasks"

value=
{search}

onChange={
e=>

setSearch(
e.target.value
)

}

/>


{

search

&&

filtered.length>0

&&

<div

style={{

background:
"#050505",

border:
"1px solid cyan",

borderRadius:
14,

padding:
8,

marginTop:
-10,

marginBottom:
18,

boxShadow:
"0 0 20px cyan"

}}

>

{

filtered.map(
item=>

<div

key={
item.id
}

style={{

padding:
12,

cursor:
"pointer"

}}

onClick={
()=>

navigate(
`/todo?id=${item.id}`
)

}

>

⚡

{" "}

{
item.title
}

</div>

)

}

</div>

}

</div>



<input

className=
"input"

placeholder=
"Enter Task"

value=
{title}

onChange={
e=>

setTitle(
e.target.value
)

}

/>



<textarea

className=
"input"

rows=
"4"

placeholder=
"Task Description"

value=
{description}

onChange={
e=>

setDescription(
e.target.value
)

}

></textarea>



<select

className=
"input"

value=
{priority}

onChange={
e=>

setPriority(
e.target.value
)

}

>

<option>
Low
</option>

<option>
Medium
</option>

<option>
High
</option>

</select>



<button

className=
"btn"

onClick={
addTodo
}

>

EXECUTE

</button>

</div>



<div
className=
"stats"
>

<div
className=
"stat"
>

TOTAL

<br/>

{
todos.length
}

</div>


<div
className=
"stat"
>

DONE

<br/>

{
done
}

</div>


<div
className=
"stat"
>

{
progress.toFixed(
0
)
}

%

</div>

</div>



<div
className=
"progress"
>

<div

className=
"fill"

style={{
width:
`${progress}%`
}}

></div>

</div>



{

filtered.length===0

?

<div
className=
"empty"
>

NO TASKS FOUND

</div>

:

filtered.map(
todo=>

<div

key={
todo.id
}

className=
"card"

onClick={
()=>

navigate(
`/todo?id=${todo.id}`
)

}

style={{
cursor:
"pointer"
}}

>

<div
className=
"link"
>

{
todo.title
}

</div>

<br/>


<div

className={
`badge ${

todo.priority

.toLowerCase()

}`
}

>

{
todo.priority
}

{" "}

PRIORITY

</div>


<div
className=
"status"
>

{

todo.completed

?

"[ COMPLETED ]"

:

"[ ACTIVE ]"

}

</div>


{

todo.description

&&

<div
style={{
marginTop:
10,

opacity:
0.8
}}
>

📝

{" "}

{

todo.description

.length>

80

?

todo.description

.slice(
0,
80
)

+

"..."

:

todo.description

}

</div>

}


<br/>


<button

className=
"btn"

onClick={
e=>

toggle(

e,

todo.id,

todo.completed

)

}

>

{

todo.completed

?

"REOPEN"

:

"COMPLETE"

}

</button>



<button

className=
"btn"

style={{
marginLeft:
12
}}

onClick={
e=>

del(

e,

todo.id

)

}

>

DELETE

</button>

</div>

)

}



<div
className=
"footer"
>

Developed By

{" "}

<span>

Poovarasu V

</span>

</div>

</div>

);

}

export default TodoList;