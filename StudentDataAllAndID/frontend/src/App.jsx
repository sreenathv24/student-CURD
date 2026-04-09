import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddStudent from "./pages/AddStudent";
import GetStudentId from "./pages/GetStudentId";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import NavigationButtons from "./components/NavigationButtons";

function App() {
  return (
    <BrowserRouter>
      <NavigationButtons />

      <Routes>
        <Route path="/" element={<GetStudentId />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update" element={<UpdateStudent />} />
        <Route path="/delete" element={<DeleteStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;