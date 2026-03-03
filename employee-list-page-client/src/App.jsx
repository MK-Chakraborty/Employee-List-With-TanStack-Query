import "./App.css";
import Page from "./components/Page";
import EmployeeProvider from "./providers/EmployeeProvider";
import EmployeesProvider from "./providers/EmployeesProvider";

function App() {
  return (
    <EmployeesProvider>
      <EmployeeProvider>
        <Page />
      </EmployeeProvider>
    </EmployeesProvider>
  );
}

export default App;
