export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
                <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                    type="text"
                    placeholder="Adam"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                    type="text"
                    placeholder="Eve"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-500 transition"
                >
                    Register
                </button>
                </form>
            </div>
        </div>
    )
}