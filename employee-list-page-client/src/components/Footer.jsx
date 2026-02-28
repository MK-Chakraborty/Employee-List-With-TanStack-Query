export default function Footer() {
  return (
    <footer className="bg-sky-300 py-10 mt-5 w-full px-3 flex flex-col md:flex-row justify-between items-center gap-1">
      <div className="text-lg md:text-2xl lg:text-5xl font-black">
        <i>@ppolo</i>
      </div>
      <div className="text-sm lg:text-3xl font-bold">
        {" "}
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Appolo
          Industries Ltd
        </p>
      </div>
    </footer>
  );
}
