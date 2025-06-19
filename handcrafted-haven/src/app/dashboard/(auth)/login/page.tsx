import Link from "next/link"

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                    Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 focus:outline-none"
                >
                    Sign In
                </button>
                </form>
            </div>
        </div>
    )
}