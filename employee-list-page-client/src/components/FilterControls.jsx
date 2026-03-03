export default function FilterControls() {
  return (
    <div className="my-5 mx-2 p-3 bg-sky-300 rounded-2xl flex items-center gap-2 justify-between flex-wrap">
      <p className="text-lg md:text-xl font-bold">Filter Employee List:</p>
      <form className="flex gap-2">
        <input
          type="text"
          name="employeeName"
          className="w-full border border-sky-800 my-2 p-2 rounded-2xl"
          placeholder="🔍 Employee Name"
          required
        />
        <button
          type="submit"
          className=" border px-4 rounded-full hover:bg-white"
        >
          🍳
        </button>
      </form>
      <div>
        <label for="employees" className="pr-2">
          Filter Employees
        </label>

        <select
          name="employees"
          id="employees"
          className="border border-sky-800 my-2 p-2 rounded-2xl"
        >
          <option value="volvo">Employeed 🟢</option>
          <option value="saab">On Non-Pain Leave 🟡</option>
          <option value="mercedes">On Paid Leave 🔵</option>
          <option value="audi">Ex Employee 🔴</option>
        </select>
      </div>
    </div>
  );
}
