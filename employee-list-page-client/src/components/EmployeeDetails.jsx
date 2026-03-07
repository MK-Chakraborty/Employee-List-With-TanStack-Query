import axios from "axios";
import { useContext } from "react";
import { EmployeeContext, EmployeesContext } from "../context";

export default function EmployeeDetails() {
  const { setEmpId, employee, setEditable } = useContext(EmployeeContext);
  const { setError } = useContext(EmployeesContext);

  const handleDeleteEmployee = async (id) => {
    if (id === "1") {
      alert(
        "Hey Sailor! Chill Up! You can't delete the Managing Director like this! Phew...",
      );
      return;
    }
    if (
      confirm(
        `🚫 Are you sure? 🛑 \nThis action can't be retracted.\nIf you want to update employee information, you can just edit the information. \nPress OK to continue. `,
      )
    ) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/employees/${id}`,
        );
        setEmpId("1");
        response.status === 200 &&
          alert(`Employee Information Deleted Successfully! 💔`);
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
    }
  };

  return (
    <section className="w-full md:w-1/5 pr-2">
      <div className="bg-sky-300 p-4 rounded-2xl text-center w-full relative">
        <p className="absolute right-2 top-2 animate-bounce">
          {employee.employmentStatus === "employed"
            ? "🟢"
            : employee.employmentStatus === "paidLeave"
              ? "🔵"
              : employee.employmentStatus === "nonPaidLeave"
                ? "🟡"
                : "🔴"}
        </p>
        <p className="text-xl font-bold mb-2">ID: {employee.id}</p>
        <img
          src={employee.profilePicture}
          alt={employee.employeeName}
          className="rounded-full w-4/5 border-2 mx-auto mb-4"
        />
        <p className="text-xl font-bold mb-2">{employee.employeeName}</p>
        <p className="text-lg mb-2">{employee.designation}</p>
        <hr />
        <p className="text-xs cursor-pointer">{employee.email}</p>
        <hr />
        <p className="text-sm">Passport: {employee.passportId}</p>
        <hr />
        <p className="text-xs my-2">{employee.profileDescription}</p>
        <div className="flex flex-wrap gap-2 justify-around">
          <button
            onClick={() => setEditable(true)}
            className="bg-sky-400 p-1 rounded-lg hover:bg-amber-200"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteEmployee(employee.id)}
            className="bg-sky-400 p-1 rounded-lg hover:bg-red-300 cursor-no-drop"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
