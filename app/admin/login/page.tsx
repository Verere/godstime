import { loginAction } from "@/app/admin/login/actions";

export default function AdminLoginPage() {
  return (
    <main id="main-content" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f7ef] px-4 py-10">
      <div aria-hidden="true" className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#dcebd8] blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#f4e7c8] blur-3xl" />
      <form action={loginAction} className="relative w-full max-w-md rounded-3xl border border-[#e0e9dd] bg-white p-7 shadow-[0_30px_80px_-50px_rgba(23,32,26,.55)] sm:p-9">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18492f] font-serif text-2xl font-bold text-white">G</div>
        <p className="section-label">God&apos;stime Orphanage Home</p>
        <h1 className="mt-1 font-sans text-2xl font-extrabold text-[#17201A]">Welcome back</h1>
        <p className="mt-1 text-sm text-[#607064]">Sign in to your admin workspace.</p>

        <label className="mt-4 block text-sm font-medium text-[#17201A]">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="username"
            className="field-control mt-1"
          />
        </label>

        <label className="mt-3 block text-sm font-medium text-[#17201A]">
          Password
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="field-control mt-1"
          />
        </label>

        <button className="btn-base btn-primary mt-6 w-full">
          Sign in
        </button>
      </form>
    </main>
  );
}
