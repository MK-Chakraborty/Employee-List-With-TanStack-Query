export default function AddEmployee() {
  return (
    <section className="w-full md:w-1/5">
      <div className="p-2 mt-2 mb-6 mx-2 bg-sky-300 rounded-2xl text-center">
        <p className="text-xl font-bold">Add New Employee</p>
        <form action="">
          <input
            type="text"
            name="employeeName"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Employee Name"
            required
          />{" "}
          <br />
          <input
            type="text"
            name="designation"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Designation"
            required
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="email"
            required
          />{" "}
          <br />
          <input
            type="text"
            name="passportId"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Id Number"
            required
          />{" "}
          <br />
          <input
            type="text"
            name="profileDescription"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Description"
            required
          />{" "}
          <br />
          <input
            type="url"
            name="profilePicture"
            className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
            placeholder="Profile Picture url"
            required
          />{" "}
          <br />
          <button
            type="submit"
            className="bg-sky-400 p-2 rounded-lg text-lg font-bold hover:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
