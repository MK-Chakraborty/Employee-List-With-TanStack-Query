import axios from "axios";
import { useEffect, useState } from "react";
import { EmployeesContext } from "../context";

export default function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

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
          setError(`
            Error from server: status: ${err.response.status} - message: ${err.response.data}
            `);
        } else {
          // network error, didn't reach the server
          setError(err.message);
        }
      }
    };
    getAllEmployees();
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees, error }}>
      {children}
    </EmployeesContext.Provider>
  );
}
