import {
  useSearchParams,
  Link
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import api from "../services/api";

import "../styles.css";

function TodoDetails() {

  const [params] =
    useSearchParams();

  const id =
    params.get("id");

  const [
    todo,
    setTodo
  ] =
    useState(null);

  const [
    editMode,
    setEditMode
  ] =
    useState(false);

  const [
    title,
    setTitle
  ] =
    useState("");

  const [
    description,
    setDescription
  ] =
    useState("");

  async function load() {

    try {

      const res =
        await api.get(
          `/todos/${id}`
        );

      setTodo(
        res.data
      );

      setTitle(
        res.data.title
      );

      setDescription(
        res.data.description || ""
      );

    }

    catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    load();

  }, []);

  async function saveChanges() {

    await api.put(
      `/todos/${id}`,
      {
        title,
        description
      }
    );

    setEditMode(false);

    load();

  }

  if (!todo) {

    return (

      <div className="container">

        <h1
          className="title"
          data-text="LOADING"
        >

          LOADING

          <span></span>

        </h1>

        <div className="subtitle">

          FETCHING TASK DATA

        </div>

      </div>

    );

  }

  return (

    <div className="container">

      <h1
        className="title"
        data-text="DETAILS"
      >

        DETAILS

        <span></span>

      </h1>

      <div className="subtitle">

        TASK INFORMATION

      </div>

      <div className="glass">

        {

          editMode ?

            <input
              className="input"
              value={title}
              onChange={
                e =>
                  setTitle(
                    e.target.value
                  )
              }
            />

            :

            <h2>

              {todo.title}

            </h2>

        }

        <hr />

        <p>

          Description:

        </p>

        {

          editMode ?

            <textarea
              className="input"
              rows="4"
              value={description}
              onChange={
                e =>
                  setDescription(
                    e.target.value
                  )
              }
            />

            :

            <p>

              {

                todo.description

                ||

                "No description"

              }

            </p>

        }

        <br />

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

          {" "}

          PRIORITY

        </div>

        <br />
        <br />

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
            ).toLocaleString()

          }

        </p>

        <p>

          Updated:

          {

            todo.updatedAt

              ?

              new Date(
                todo.updatedAt
              ).toLocaleString()

              :

              "-"

          }

        </p>

        <br />

        <Link
          className="btn"
          to="/"
        >

          ← Back

        </Link>

        {" "}

        {

          editMode ?

            <button
              className="btn"
              onClick={
                saveChanges
              }
              style={{
                marginLeft: 12
              }}
            >

              SAVE

            </button>

            :

            <button
              className="btn"
              onClick={
                () =>
                  setEditMode(
                    true
                  )
              }
              style={{
                marginLeft: 12
              }}
            >

              EDIT

            </button>

        }

      </div>

      <div className="footer">

        Developed By{" "}

        <span>

          Poovarasu V

        </span>

      </div>

    </div>

  );

}

export default TodoDetails;