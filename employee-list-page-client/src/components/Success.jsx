export default function Success({ status }) {
  return (
    <p className="m-2 text-center bg-red-300 rounded-2xl p-2 font-bold">
      {status}
    </p>
  );
}
