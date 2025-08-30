import { useState } from 'react'
import { Heart, MessageCircle, Repeat, Share } from 'lucide-react'

export default function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes || 0)
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked((v) => !v)
    setLikes((n) => (liked ? Math.max(0, n - 1) : n + 1))
  }

  return (
    <article className="grid grid-cols-[40px,1fr] gap-3 p-3">
      <Avatar name={tweet.name} color={tweet.avatarColor} />
      <div className="min-w-0">
        <header className="mb-1 flex items-center gap-2 text-sm">
          <span className="truncate font-semibold">{tweet.name}</span>
          <span className="truncate text-neutral-500">{tweet.handle}</span>
          <span className="select-none text-neutral-400">·</span>
          <time className="text-neutral-500" title={new Date(tweet.createdAt).toLocaleString()}>
            {relativeTime(tweet.createdAt)}
          </time>
        </header>
        <p className="whitespace-pre-wrap text-[15px] leading-snug">
          {tweet.content}
        </p>
        <nav className="mt-3 flex items-center gap-5 text-neutral-500">
          <button onClick={toggleLike} className="group inline-flex items-center gap-1 text-sm hover:text-rose-500">
            <Heart className={`h-4 w-4 transition-colors ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{likes}</span>
          </button>
          <button className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-200">
            <MessageCircle className="h-4 w-4" />
            <span>Reply</span>
          </button>
          <button className="inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-200">
            <Repeat className="h-4 w-4" />
            <span>Repost</span>
          </button>
          <button className="ml-auto inline-flex items-center gap-1 text-sm hover:text-neutral-900 dark:hover:text-neutral-200">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </button>
        </nav>
      </div>
    </article>
  )
}

function Avatar({ name, color }) {
  const initial = name?.[0]?.toUpperCase() || 'U'
  return (
    <div
      className="flex h-10 w-10 select-none items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color || '#111827' }}
      aria-hidden
    >
      {initial}
    </div>
  )
}

function relativeTime(time) {
  const now = Date.now()
  const diff = Math.max(0, Math.floor((now - time) / 1000))
  if (diff < 60) return `${diff}s`
  const m = Math.floor(diff / 60)
  if (m < 60) return `${m}m`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d`
  return new Date(time).toLocaleDateString()
}
