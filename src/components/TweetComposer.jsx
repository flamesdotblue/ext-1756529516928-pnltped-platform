import { useState } from 'react'

export default function TweetComposer({ onPost }) {
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onPost?.(value)
    setValue('')
  }

  return (
    <form onSubmit={submit} className="mb-4 rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-start gap-3">
        <Avatar name="You" color="#22c55e" />
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What’s happening?"
          rows={3}
          className="min-h-[56px] w-full resize-y bg-transparent outline-none placeholder:text-neutral-400"
        />
      </div>
      <div className="mt-3 flex items-center justify-end gap-2">
        <span className="text-xs text-neutral-500">{value.trim().length}/280</span>
        <button
          type="submit"
          disabled={!value.trim() || value.trim().length > 280}
          className="rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white transition-opacity disabled:opacity-40 dark:bg-white dark:text-neutral-900"
        >
          Post
        </button>
      </div>
    </form>
  )
}

function Avatar({ name, color }) {
  const initial = name?.[0]?.toUpperCase() || 'U'
  return (
    <div
      className="flex h-9 w-9 select-none items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color || '#111827' }}
      aria-hidden
    >
      {initial}
    </div>
  )
}
