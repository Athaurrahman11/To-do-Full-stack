import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils.js";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
export const NoteCard = ({ note, setNotes}) => {
  const handledlt=async(e,id)=>{
    e.preventDefault();
    if(!window.confirm("Are u sure to dlt?")) return;
    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev)=>prev.filter(note=>note._id !== id))
      toast.success("Deleted") 
           
    } catch (error) {
      
    }
  }
  return (
    <>
      <Link to={`/detail/${note._id}`}>
        <div className="bg-amber-100 p-10 rounded-2xl relative flex flex-col ">
          <h3>Title: {note.title}</h3>
          <h1>Content: {note.content}</h1>
          <h3>Created at:{formatDate(new Date(note.createdAt))}</h3>

          <div className="text-green-600 absolute bottom-1 right-2">
            <button>Edit</button>
            <button onClick={(e)=>handledlt(e,note._id)}>Delete</button>
          </div>
        </div>
      </Link>
    </>
  );
};
