import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const Form = () => {
   const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      Search For:{" "}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">------</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      ID: <input type="text" onChange={(e) => setId(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;