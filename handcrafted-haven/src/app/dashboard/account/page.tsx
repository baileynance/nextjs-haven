import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AccountScreen() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <div>You must be logged in to view this page.</div>;
    }

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Account</h2>
        </div>
      </div>
    );
  }
  