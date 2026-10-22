import React, {  useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios.js";
export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Required fields");
      return;
    }

    setLoading(true);

    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Created successfully");

      navigate("/");
    } catch (error) {
      toast.error("Failed to create");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Link to="/">Back to Notes</Link>
      </div>

      <div className="bg-gray-400">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border border-amber-950 text-black"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Note"}
          </button>
        </form>
      </div>
    </>
  );
};