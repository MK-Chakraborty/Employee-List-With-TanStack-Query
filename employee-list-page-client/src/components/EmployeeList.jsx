import { useContext } from "react";
import { EmployeesContext } from "../context";
import EmployeeListCard from "./EmployeeListCard";
export default function EmployeeList() {
  const { employees } = useContext(EmployeesContext);

  const handleEmployeeCardClick = (id) => {
    console.log(id);
  };

  return (
    <section className="w-full md:w-3/5 flex flex-wrap justify-evenly gap-2 px-0 sm:px-2">
      {employees.map((employee) => (
        <EmployeeListCard
          key={employee.employeeId}
          employee={employee}
          onEmployeeCardClick={handleEmployeeCardClick}
        />
      ))}
    </section>
  );
}
