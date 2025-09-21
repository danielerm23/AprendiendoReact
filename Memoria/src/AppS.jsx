import { useState } from 'react'
import { NOTES } from 'contants.js'

export function AppS () {

    const [notes, setNotes] = useState([]);
    notes = NOTES

    return (
        <>
            <ol>
                {notes.map((note)=>
                    <li>
                        {key=note.id}
                        <p>{note.id}</p>
                        <p>{note.content} </p>

                    </li>
                )}
            </ol>
        </>
    )
}