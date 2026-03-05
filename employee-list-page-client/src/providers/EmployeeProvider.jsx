import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext, EmployeesContext } from "../context";

export default function EmployeeProvider({ children }) {
  const { setError } = useContext(EmployeesContext);
  const [empId, setEmpId] = useState(1);
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    const getSingleEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/employees/${empId}`,
        );
        if (response && response.data) {
          setEmployee(response.data);
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
    getSingleEmployee();
  }, [empId, setError]);

  return (
    <EmployeeContext.Provider value={{ setEmpId, employee }}>
      {children}
    </EmployeeContext.Provider>
  );
}
