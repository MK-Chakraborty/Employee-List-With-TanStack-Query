import axios from "axios";
import { useContext, useState } from "react";
import { EmployeesContext } from "../context";

export default function AddEmployee() {
  const [employeeData, setEmployeeData] = useState({
    id: crypto.randomUUID(),
    employeeName: "",
    designation: "",
    email: "",
    passportId: "",
    profileDescription: "",
    profilePicture: "",
    employmentStatus: "employed",
    skillSet: [],
  });

  const { setError } = useContext(EmployeesContext);

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/employees`,
        employeeData,
      );

      response.statusText === "Created" &&
        alert("New Employee Added. Id: " + employeeData.id);

      setEmployeeData({
        id: crypto.randomUUID(),
        employeeName: "",
        designation: "",
        email: "",
        passportId: "",
        profileDescription: "",
        profilePicture: "",
        employmentStatus: "employed",
        skillSet: [],
      });
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
      <div className="p-2 mb-6 mx-2 bg-sky-300 rounded-2xl text-center">
        <p className="text-xl font-bold">Add New Employee</p>
        <form action="" onSubmit={handleAddEmployee}>
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
          {/* <select
            name="employees"
            id="employees"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
          >
            <option value="volvo">Employeed</option>
            <option value="saab">On Non-Pain Leave</option>
            <option value="mercedes">On Paid Leave</option>
            <option value="audi">Ex Employee</option>
          </select> */}
          <button
            type="submit"
            className="bg-sky-400 p-2 rounded-lg text-lg font-bold hover:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
