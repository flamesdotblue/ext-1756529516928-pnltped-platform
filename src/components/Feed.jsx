import Tweet from './Tweet'

export default function Feed({ tweets }) {
  if (!tweets?.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-sm text-neutral-500 dark:border-neutral-800">
        No posts yet. Start the conversation.
      </div>
    )
  }

  return (
    <ul className="flex flex-col divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
      {tweets.map((t) => (
        <li key={t.id}>
          <Tweet tweet={t} />
        </li>
      ))}
    </ul>
  )
}
