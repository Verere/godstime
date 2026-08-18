import { loginAction } from "@/app/admin/login/actions";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0fdf4] px-4">
      <form action={loginAction} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-[#17201A]">Admin Login</h1>
        <p className="mt-1 text-sm text-[#2f3d34]">Access the protected dashboard.</p>

        <label className="mt-4 block text-sm font-medium text-[#17201A]">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2"
          />
        </label>

        <label className="mt-3 block text-sm font-medium text-[#17201A]">
          Password
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full rounded-lg border border-[#bbf7d0] px-3 py-2"
          />
        </label>

        <button className="mt-5 w-full rounded-full bg-[#166534] px-4 py-2 text-sm font-semibold text-white">
          Login
        </button>
      </form>
    </main>
  );
}
