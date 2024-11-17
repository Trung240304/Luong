import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nv from './Nv';  // Trang danh sách nhân viên
import SalaryForm from './SalaryForm';  // Trang tạo lương

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nv />} /> {/* Trang danh sách nhân viên */}
        <Route path="/salary-form" element={<SalaryForm />} /> {/* Trang tạo lương */}
      </Routes>
    </Router>
  );
}

export default App;
