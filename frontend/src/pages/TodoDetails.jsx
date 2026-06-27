import {
useSearchParams,
Link
}
from "react-router-dom";

import {
useEffect,
useState
}
from "react";

import api from "../services/api";

import "../styles.css";

function TodoDetails(){

const[
params
]=
useSearchParams();

const id=
params.get(
"id"
);

const[
todo,
setTodo
]=
useState(
null
);

async function load(){

try{

const res=
await api.get(
`/todos/${id}`
);

setTodo(
res.data
);

}

catch(err){

console.log(
err
);

}

}

useEffect(()=>{

load();

},[]);

if(!todo){

return(

<div
className="container"
>

<h1
className="title"
data-text="LOADING"
>

LOADING

<span></span>

</h1>

<div
className="subtitle"
>

FETCHING TASK DATA

</div>

</div>

);

}

return(

<div
className="container"
>

<h1
className="title"
data-text="DETAILS"
>

DETAILS

<span></span>

</h1>

<div
className="subtitle"
>

TASK INFORMATION

</div>

<div
className="glass"
>

<h2>

{
todo.title
}

</h2>

<hr/>

<p>

Description:

</p>

<p>

{

todo.description

||

"No description"

}

</p>

<br/>

<div
className={
`badge ${
(
todo.priority
||
"medium"
)
.toLowerCase()
}`
}
>

{

todo.priority

||

"Medium"

}

PRIORITY

</div>

<br/>
<br/>

<p>

Status:

{

todo.completed

?

" ✅ Completed"

:

" ⏳ Pending"

}

</p>

<p>

Created:

{

new Date(
todo.createdAt
)

.toLocaleString()

}

</p>

<p>

Updated:

{

todo.updatedAt

?

new Date(
todo.updatedAt
)

.toLocaleString()

:

"-"

}

</p>

<br/>

<Link
className="btn"
to="/"
>

← Back

</Link>

</div>

<div
className="footer"
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

export default TodoDetails;