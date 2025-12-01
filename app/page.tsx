"use client"


 



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black px-4">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
          Md Asif Mahmud
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium">
            Thank you for visiting!
          </p>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            My portfolio is coming soon.
          </p>
        </div>

       

        <a 
          href="https://github.com/mdasifmahmuddev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-colors text-zinc-900 dark:text-zinc-50 font-medium"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View GitHub
        </a>

        <div className="mt-16 text-sm text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Md Asif Mahmud
        </div>
      </main>
    </div>
  );
}