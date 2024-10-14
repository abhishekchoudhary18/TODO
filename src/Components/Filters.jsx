export default function Filters({ filter, setFilter }) {
  return (
    <div className="flex justify-center mb-5">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-l-lg ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300"
        } hover:bg-blue-500`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 ${
          filter === "completed"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300"
        } hover:bg-blue-500`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-r-lg ${
          filter === "pending"
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-300"
        } hover:bg-blue-500`}
      >
        Pending
      </button>
    </div>
  );
}
