import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate từ react-router-dom
import Data from './Data'; // Import dữ liệu nhân viên từ file Data.jsx
import './Nv.css';
import EmployeeDetails from './EmployeeDetails'; // Import component chi tiết nhân viên

const Nv = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate();  // Khởi tạo hook navigate

  // Hàm hiển thị chi tiết nhân viên
  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  // Hàm đóng chi tiết nhân viên
  const handleCloseDetails = () => {
    setSelectedEmployee(null);
  };

  // Hàm chuyển hướng đến trang SalaryForm
  const handleAddSalary = () => {
    navigate('/salary-form');
  };

  return (
    <div className="employee-list">
      <h2>Danh sách Nhân viên</h2>

      {/* Nút Thêm Lương */}
      <button className="btn-add-salary" onClick={handleAddSalary}>
        Thêm Lương
      </button>

      <table className="employee-table" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Chức vụ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((nv) => (
            <tr key={nv.id}>
              <td>{nv.id}</td>
              <td>{nv.name}</td>
              <td>{nv.address}</td>
              <td>{nv.phone}</td>
              <td>{nv.position}</td>
              <td>
                <button className="btn-view-details" onClick={() => handleViewDetails(nv)}>
                  Xem chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedEmployee && (
        <EmployeeDetails employee={selectedEmployee} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default Nv;
