import Link from 'next/link';

export default function AuthLinks() {

  return (
    <div className="sm:flex sm:gap-4">
        <Link href="/dashboard/login" className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500">
            Login
        </Link>

        <Link href="/dashboard/register" className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
            Register
        </Link>
    </div>
  );
}
