import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black px-4">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
          Md Asif Mahmud
        </h1>
        
        {/* Subtitle */}
        <div className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium">
            Thank you for visiting!
          </p>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            My portfolio is currently being crafted with care.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold mb-12">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Coming Soon</span>
        </div>

        {/* Description */}
        <p className="text-base text-zinc-500 dark:text-zinc-500 max-w-md">
          Something exciting is on the way. Check back soon to see my work, projects, and creative journey.
        </p>

        {/* Footer */}
        <div className="mt-16 text-sm text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Md Asif Mahmud
        </div>
      </main>
    </div>
  );
}