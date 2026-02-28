import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <section className="font-serif">
      <Header />
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row justify-between">
        <AddEmployee />
        <EmployeeList />
        <EmployeeDetails />
      </div>
      <Footer />
    </section>
  );
}

export default App;
