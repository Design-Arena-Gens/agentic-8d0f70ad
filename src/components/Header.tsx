import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ZipRecruiter Clone
        </Link>
        <div className="flex items-center">
          <Link href="/jobs" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Jobs
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2">
            Login
          </Link>
          <Link href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
