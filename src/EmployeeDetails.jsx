import React from 'react';
import './EmployeeDetails.css'; // Tạo file CSS cho modal hoặc trang chi tiết
import salaryData from './SalaryData'; // Import dữ liệu lương

const EmployeeDetails = ({ employee, onClose }) => {
  // Lọc tất cả dữ liệu lương của nhân viên từ salaryData.js dựa trên employeeId
  const employeeSalaries = salaryData.filter(salary => salary.employeeId === employee.id);

  return (
    <div className="employee-details-modal">
      <div className="employee-details-content">
        <h3>Thông tin chi tiết nhân viên</h3>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Tên:</strong> {employee.name}</p>
        <p><strong>Địa chỉ:</strong> {employee.address}</p>
        <p><strong>Số điện thoại:</strong> {employee.phone}</p>
        <p><strong>Chức vụ:</strong> {employee.position}</p>
        
        {/* Hiển thị thông tin lương */}
        {employeeSalaries.length > 0 ? (
          <div className="salary-details">
            <h4>Thông tin Lương</h4>
            <table className="salary-table" border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>Mã lương</th>
                  <th>Ngày làm</th>
                  <th>Thưởng</th>
                  <th>Phụ cấp</th>
                  <th>Tiền ứng</th>
                  <th>Tổng lương</th>
                </tr>
              </thead>
              <tbody>
                {employeeSalaries.map((salary, index) => (
                  <tr key={index}>
                    <td>{salary.salaryCode}</td>
                    <td>{salary.workDate}</td>
                    <td>{salary.bonus}</td>
                    <td>{salary.allowance}</td>
                    <td>{salary.advance}</td>
                    <td>{salary.totalSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Không có thông tin lương.</p>
        )}

        {/* Nút đóng */}
        <button className="btn-close" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
