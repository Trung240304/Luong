import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Data from "./Data";  // Nhập dữ liệu nhân viên từ Data.js
import "./SalaryForm.css";

const SalaryForm = () => {
  const [workingDays, setWorkingDays] = useState(""); // Cho phép nhập giá trị trực tiếp
  const [allowance, setAllowance] = useState(0); // Cho phép nhập trực tiếp phụ cấp
  const [bonus, setBonus] = useState(0); // Thêm trường tiền thưởng
  const [advance, setAdvance] = useState(0);
  const [calculationDate, setCalculationDate] = useState("");
  const [description, setDescription] = useState("");
  const [finalSalary, setFinalSalary] = useState(0); // Thêm state cho lương cuối
  const [selectedEmployee, setSelectedEmployee] = useState(""); // Theo dõi nhân viên đã chọn
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleFinalSalaryCalculation = () => {
    // Tính lương cuối: Số ngày công * 20000 + Tiền thưởng + Phụ cấp - Tạm ứng
    const calculatedSalary =
      workingDays * 200000 +
      parseFloat(bonus || 0) +
      parseFloat(allowance || 0) - 
      parseFloat(advance || 0);
    setFinalSalary(calculatedSalary);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFinalSalaryCalculation();
    alert(`Dữ liệu đã được lưu thành công! Lương cuối: ${finalSalary} VND`);
  };

  const handleExit = () => {
    // Chuyển hướng về trang Nv khi ấn nút thoát
    navigate("/");  // Quay về trang danh sách nhân viên
  };

  return (
    <div className="salary-form-container">
      <h2>Tính Lương Nhân Viên</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Mã lương:</label>
          <input type="text" value={`ML${Date.now()}`} disabled />
        </div>

        <div className="form-group">
          <label>Nhân viên:</label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            <option value="">Chọn nhân viên</option>
            {Data.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Số ngày công:</label>
          <input
            type="number"
            placeholder="Nhập số ngày công"
            value={workingDays}
            onChange={(e) => setWorkingDays(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phụ cấp:</label>
          <input
            type="number"
            placeholder="Nhập phụ cấp"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tiền thưởng:</label>
          <input
            type="number"
            placeholder="Nhập tiền thưởng"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tạm ứng:</label>
          <input
            type="number"
            placeholder="Nhập số tiền tạm ứng"
            value={advance}
            onChange={(e) => setAdvance(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Ngày tính lương:</label>
          <input
            type="date"
            value={calculationDate}
            onChange={(e) => setCalculationDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mô tả:</label>
          <textarea
            placeholder="Nhập mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Lương cuối:</label>
          <input type="number" value={finalSalary} readOnly />
          <button type="button" onClick={handleFinalSalaryCalculation}>
            Tính lương cuối
          </button>
        </div>

        <div className="form-buttons">
          <button type="submit">Lưu</button>
          <button type="button" className="exit-button" onClick={handleExit}>
            Thoát
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalaryForm;
