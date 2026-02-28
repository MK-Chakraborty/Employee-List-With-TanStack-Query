import axios from "axios";
import { useEffect, useState } from "react";
export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/employees`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEmployees();
  }, []);

  return (
    <>
      <section className="w-full md:w-3/5">
        <p className="text-xl">Hello 60%</p>
      </section>
    </>
  );
}
