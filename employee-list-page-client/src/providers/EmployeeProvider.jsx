import { EmployeeContext } from "../context";

export default function EmployeeProvider({ children }) {
  return <EmployeeContext.Provider>{children}</EmployeeContext.Provider>;
}
