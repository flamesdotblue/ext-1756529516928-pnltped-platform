import { Home, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/70">
      <div className="mx-auto flex h-14 w-full max-w-xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5 text-neutral-500" />
          <span className="font-semibold tracking-tight">Stream</span>
        </div>
        <Settings className="h-5 w-5 text-neutral-500" />
      </div>
    </header>
  )
}
