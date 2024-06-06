import React, { useState } from "react";
import "./index.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });
  

  const onchange = (e) => {
    // const value = e.target.value;
    // const name= e.target.name;
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addNote = (e) => {
    e.preventDefault();

    props.passNote(note);
    setNote({
        title: "", content: ""
    })
  };

  return (
    <>
      <div className="main_note">
        <form onSubmit={addNote}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onchange}
            autoComplete="off"
          />
          <textarea
            rows=""
            column=""
            placeholder="Enter Info..."
            name="content"
            value={note.content}
            onChange={onchange}
          >
            {""}
          </textarea>
          <button className="plus-sign" type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
