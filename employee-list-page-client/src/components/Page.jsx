import { useContext } from "react";
import { EmployeeContext, EmployeesContext } from "../context";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeList from "./EmployeeList";
import Error from "./Error";
import FilterControls from "./FilterControls";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  const { error } = useContext(EmployeesContext);
  const { editable } = useContext(EmployeeContext);
  return (
    <>
      <section className="font-serif bg-gray-200">
        <Header />
        {error && <Error error={error} />}
        <FilterControls />
        <div className="flex flex-wrap flex-col md:flex-row lg:flex-row justify-between">
          {editable ? <EditEmployee /> : <AddEmployee />}
          <EmployeeList />
          <EmployeeDetails />
        </div>
        <Footer />
      </section>
    </>
  );
}
