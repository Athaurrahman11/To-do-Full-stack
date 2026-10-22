import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import api from "../lib/axios.js";
import { NoteCard } from "../components/NoteCard";

export const Homepage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);

        setNotes(res.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setloading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        {loading ? (
          <div className="text-center py-10">Loading Notes...</div>
        ) : notes.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 p-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};
