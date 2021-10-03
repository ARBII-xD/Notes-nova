import React, { useState } from "react";

function CreateArea(props) {
  // This state handles the transition of the {{createArea}} components
  const [isExpanded , setExpanded] = useState(false)


  // this handles the state of each note 
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  // handles the change of each input field
  function handleChange(event) {
    // Object destructuring
    const { name, value } = event.target;
    setNote((prevNote) => {

      // setting the value of {{title and content}} of this state Object
      return {
        // {{...prevNote}} is a spread opeartor which used when all elements from an object or array need to be included in a list of some kind. 
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitClick(event) {
    // Passes the new {{Note}} to the {{addItem}} function...will be added to the main array and will be rendered later on
    props.onnAdd(note);

    // Sett the value of the stateObject as NULL once the Add button is clicked
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function clicked(){
    setExpanded(true)
  }


  return (
    <>
      <form>
        {/* if isExpanded == true then {{input}} component rendered else NULL */}
        {isExpanded && (<input
          
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />)  }
        

        <textarea
          onClick={clicked}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <button onClick={submitClick}>Add</button>
      </form>
    </>
  );
}

export default CreateArea;
