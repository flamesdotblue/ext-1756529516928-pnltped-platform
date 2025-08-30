import { useState } from 'react'
import Header from './components/Header'
import TweetComposer from './components/TweetComposer'
import Feed from './components/Feed'

const initialTweets = [
  {
    id: 1,
    name: 'Mona',
    handle: '@mona',
    avatarColor: '#0ea5e9',
    content: 'Minimalism is about intention. Fewer pixels, more meaning.',
    createdAt: Date.now() - 1000 * 60 * 35,
    likes: 12,
  },
  {
    id: 2,
    name: 'Alex',
    handle: '@alex',
    avatarColor: '#f59e0b',
    content: 'Ship small, ship often.',
    createdAt: Date.now() - 1000 * 60 * 60 * 5,
    likes: 7,
  },
]

export default function App() {
  const [tweets, setTweets] = useState(initialTweets)

  const handlePost = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const newTweet = {
      id: Date.now(),
      name: 'You',
      handle: '@you',
      avatarColor: '#22c55e',
      content: trimmed,
      createdAt: Date.now(),
      likes: 0,
    }
    setTweets((prev) => [newTweet, ...prev])
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main className="mx-auto w-full max-w-xl px-4 pb-24">
        <TweetComposer onPost={handlePost} />
        <Feed tweets={tweets} />
      </main>
    </div>
  )
}
