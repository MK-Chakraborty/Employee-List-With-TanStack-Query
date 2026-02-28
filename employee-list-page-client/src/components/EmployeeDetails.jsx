export default function EmployeeDetails() {
  return (
    <section className="w-full md:w-1/5 pr-2">
      <div className="bg-sky-300 p-4 rounded-2xl text-center w-full">
        <img
          src="https://randomuser.me/api/portraits/men/5.jpg"
          alt="Mario Finch"
          className="rounded-full w-4/5 border-2 mx-auto mb-4"
        />
        <p className="text-xl font-bold mb-2">Mario Finch</p>
        <p className="text-lg mb-2">Managing Director</p>
        <hr />
        <p className="text-sm">mario.finch@apollo.com</p>
        <hr />
        <p className="text-sm">Passport: M9048647</p>
        <hr />
        <p className="text-xs my-2">
          Experienced executive leading organizational growth, strategic
          planning, and international partnerships across multiple sectors.
        </p>
      </div>
    </section>
  );
}
