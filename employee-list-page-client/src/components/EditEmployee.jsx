import axios from "axios";
import { useContext, useState } from "react";
import { EmployeeContext, EmployeesContext } from "../context";

export default function EditEmployee() {
  const { employee, setEmployee, setEditable } = useContext(EmployeeContext);

  const [employeeData, setEmployeeData] = useState(employee);
  const { setError } = useContext(EmployeesContext);

  const handleEditEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/employees/${employee.id}`,
        employeeData,
      );
      response.statusText === "OK" &&
        alert("Employee Data Updated. Id: " + employeeData.id);
      setEmployee(employeeData);
      setEditable(false);
    } catch (err) {
      if (err.response) {
        // error came from server
        setError(`
            Error from server: status: ${err.response.status} - message: ${err.response.data}
            `);
      } else {
        // network error, didn't reach the server
        setError(err.message);
      }
    }
  };

  return (
    <section className="w-full md:w-1/5">
      <div className="p-2 mb-6 mx-2 bg-amber-200 rounded-2xl text-center">
        <p className="text-xl font-bold">Edit Employee Data</p>
        <form action="" onSubmit={handleEditEmployee}>
          <input
            type="text"
            value={employeeData.employeeName}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                employeeName: e.target.value,
              });
            }}
            name="employeeName"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Employee Name"
            required
          />{" "}
          <br />
          <input
            type="text"
            value={employeeData.designation}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                designation: e.target.value,
              });
            }}
            name="designation"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Designation"
            required
          />{" "}
          <br />
          <input
            type="email"
            value={employeeData.email}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                email: e.target.value,
              });
            }}
            name="email"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="email"
            required
          />{" "}
          <br />
          <input
            type="text"
            value={employeeData.passportId}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                passportId: e.target.value,
              });
            }}
            name="passportId"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Id Number"
            required
          />{" "}
          <br />
          <textarea
            type="text"
            value={employeeData.profileDescription}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                profileDescription: e.target.value,
              });
            }}
            name="profileDescription"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Description"
            required
          />{" "}
          <br />
          <input
            type="url"
            value={employeeData.profilePicture}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                profilePicture: e.target.value,
              });
            }}
            name="profilePicture"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Profile Picture url"
            required
          />{" "}
          <br />
          <select
            value={employeeData.employmentStatus}
            onChange={(e) => {
              setEmployeeData({
                ...employeeData,
                employmentStatus: e.target.value,
              });
            }}
            name="employees"
            id="employees"
            className="border border-sky-800 my-2 p-2 rounded-2xl w-full text-sm"
          >
            <option value="">Refreash Filter</option>
            <option value="employed">Employeed 🟢</option>
            <option value="nonPaidLeave">On Non-Pain Leave 🟡</option>
            <option value="paidLeave">On Paid Leave 🔵</option>
            <option value="exEmployee">Ex Employee 🔴</option>
          </select>
          <div className="flex flex-wrap justify-evenly">
            <button
              type="submit"
              className="bg-amber-400 p-1 rounded-lg font-bold hover:bg-white"
            >
              Submit
            </button>
            <button
              onClick={() => setEditable(false)}
              className="bg-red-200 p-1 rounded-lg font-bold hover:bg-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
