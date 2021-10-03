import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //this state handles the main array, 
  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((prevNotes) => {
      // return the updated array which includes the newly created note which passed after the submit/Add Note button clicked 
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    // return all the Note except the one whcih iD is passed as argument
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />


      <CreateArea onnAdd={addItem} />
      
      {/* map iterates over the notes array, and renders all the Notes with specific props passed on it */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}

            // deleteNote func passed as props to the Note component 
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
