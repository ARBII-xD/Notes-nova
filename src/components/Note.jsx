import React from "react";



function Note(props) {
  function handleClick() {

    
    // passes the {{id}} of that particular Note to the deleteNote function
    props.onDelete(props.id);
    // console.log(props.onDelete(props.id))
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}> Delete
      </button>
    </div>
  );
}

export default Note;
