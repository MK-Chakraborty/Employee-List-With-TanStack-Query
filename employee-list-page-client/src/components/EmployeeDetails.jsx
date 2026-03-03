import { useContext } from "react";
import { EmployeeContext } from "../context";

export default function EmployeeDetails() {
  const { employee } = useContext(EmployeeContext);

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
          <button className="bg-sky-400 p-1 rounded-lg hover:bg-amber-200">
            Edit
          </button>
          <button className="bg-sky-400 p-1 rounded-lg hover:bg-red-300">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
