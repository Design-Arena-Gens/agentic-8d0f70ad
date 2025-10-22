export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Find Your Next Job
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Search millions of jobs from thousands of job boards.
      </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="City, state, or zip code"
          className="w-1/3 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </div>
  );
}
