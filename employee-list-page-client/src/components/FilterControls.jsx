import { useContext, useState } from "react";
import { FilterContext } from "../context";

export default function FilterControls() {
  const { setFilter, setSearchTerm } = useContext(FilterContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <div className="my-5 mx-2 p-3 bg-sky-300 rounded-2xl flex items-center gap-2 justify-between flex-wrap">
      <p className="text-lg md:text-xl font-bold">Filter Employee List:</p>
      <form className="flex gap-2" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            const value = e.target.value;
            setSearchInput(value);

            if (value === "") setSearchTerm("");
          }}
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
        <label htmlFor="employees" className="pr-2">
          Filter Employees
        </label>

        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          name="employees"
          id="employees"
          className="border border-sky-800 my-2 p-2 rounded-2xl"
        >
          <option value="">Refreash Filter</option>
          <option value="employed">Employeed 🟢</option>
          <option value="nonPaidLeave">On Non-Pain Leave 🟡</option>
          <option value="paidLeave">On Paid Leave 🔵</option>
          <option value="exEmployee">Ex Employee 🔴</option>
        </select>
      </div>
    </div>
  );
}
