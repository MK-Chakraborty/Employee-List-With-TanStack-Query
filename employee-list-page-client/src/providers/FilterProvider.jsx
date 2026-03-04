import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { EmployeesContext, FilterContext } from "../context";

export default function FilterProvider({ children }) {
  const { setEmployees, setError } = useContext(EmployeesContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getFilteredEmployees = async () => {
      let response = [];
      try {
        if (filter) {
          response = await axios.get(
            `http://localhost:3000/employees?employmentStatus=${filter}`,
          );
        } else {
          response = await axios.get(`http://localhost:3000/employees`);
        }
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

    getFilteredEmployees();
  }, [filter, setEmployees, setError]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
