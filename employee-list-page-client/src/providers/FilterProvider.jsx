import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { EmployeesContext, FilterContext } from "../context";

export default function FilterProvider({ children }) {
  const { setEmployees, setError } = useContext(EmployeesContext);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getFilteredEmployees = async () => {
      try {
        const url = filter
          ? `http://localhost:3000/employees?employmentStatus=${filter}`
          : `http://localhost:3000/employees`;

        const response = await axios.get(url);
        let employees = response.data;

        if (searchTerm) {
          employees = employees.filter((employee) =>
            employee.employeeName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()),
          );
        }

        setEmployees(employees);
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

    getFilteredEmployees();
  }, [filter, setEmployees, searchTerm, setError]);

  return (
    <FilterContext.Provider value={{ filter, setFilter, setSearchTerm }}>
      {children}
    </FilterContext.Provider>
  );
}
