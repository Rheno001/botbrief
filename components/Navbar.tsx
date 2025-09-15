"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/signin");
  };

  // Don't render anything while loading
  if (loading) {
    return (
      <header className="w-full bg-black text-green-400 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="text-xl font-bold">NOVAN</div>
        <div className="text-sm">Loading...</div>
      </header>
    );
  }

  // Hide navbar for unauthenticated users
  if (!user) {
    return null;
  }

  

  return (
    <header className="w-full bg-black text-green-400 px-6 py-4 flex items-center justify-between shadow-md">
      <h1
        onClick={() => router.push("/dashboard")}
        className="text-xl font-bold cursor-pointer hover:text-green-300"
      >
        NOVAN
      </h1>

      <nav className="flex gap-6 items-center">
        <button
          onClick={() => router.push("/dashboard")}
          className="hover:text-green-300"
        >
          Dashboard
        </button>
        <span className="text-sm">Welcome, {user.email}</span>
      </nav>

      <button
        onClick={handleLogout}
        className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-green-400 cursor-pointer transition"
      >
        Logout
      </button>
    </header>
  );
}