import React from "react"

const Sidebar = (props) => {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div

                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                {/* <div className="text-title">
                    <h4 className="text-snippet">Note {index + 1}</h4>
                    <h5 className="text-snippet">{note.body.split("/n")[0]}</h5>
                </div> */}
                <h5 className="text-snippet">{note.body.split("/n")[0]}</h5>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                   <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
export default Sidebar