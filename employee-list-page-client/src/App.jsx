import "./App.css";
import Page from "./components/Page";
import EmployeesProvider from "./providers/EmployeesProvider";

function App() {
  return (
    <EmployeesProvider>
      <Page />
    </EmployeesProvider>
  );
}

export default App;
