import "./App.css";
import Page from "./components/Page";
import EmployeeProvider from "./providers/EmployeeProvider";
import EmployeesProvider from "./providers/EmployeesProvider";
import FilterProvider from "./providers/FilterProvider";

function App() {
  return (
    <EmployeesProvider>
      <FilterProvider>
        <EmployeeProvider>
          <Page />
        </EmployeeProvider>
      </FilterProvider>
    </EmployeesProvider>
  );
}

export default App;
