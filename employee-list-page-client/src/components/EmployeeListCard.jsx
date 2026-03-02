export default function EmployeeListCard({ employee }) {
  return (
    <div className="bg-sky-300 p-4 rounded-2xl text-center w-full md:w-23/50 lg:w-8/25 relative cursor-pointer">
      <p className="absolute top-0 right-0 text-lg font-black m-2 px-1.5 border rounded-full">
        →
      </p>
      <img
        src={employee.profilePicture}
        alt={employee.employeeName}
        className="rounded-full w-1/2 border-2 mx-auto mb-4"
      />
      <p className="text-xl font-bold mb-2">{employee.employeeName}</p>
      <p className="text-lg mb-2">{employee.designation}</p>
    </div>
  );
}
