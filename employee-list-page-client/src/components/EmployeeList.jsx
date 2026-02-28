import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeListCard from "./EmployeeListCard";
export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/employees`);
        if (response && response.data) {
          setEmployees(response.data);
        }
      } catch (err) {
        if (err.response) {
          // error came from server
          setError(
            `Eooro from server: status: ${err.response.status} - message: ${err.response.data}`,
          );
        } else {
          // network error, didn't reach the server
          setError(err.message);
        }
      }
    };
    getAllEmployees();
  }, []);

  return (
    <section className="w-full md:w-3/5 flex flex-wrap justify-evenly gap-2 px-0 sm:px-2">
      {employees.map((employee) => (
        <EmployeeListCard key={employee.employeeId} employee={employee} />
      ))}
    </section>
  );
}
