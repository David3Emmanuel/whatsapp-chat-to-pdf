'use client'

import processChat from '@/processChat'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [text, setText] = useState('')

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className='flex w-full justify-center'>
        <button
          onClick={handlePrint}
          className='my-2 p-2 bg-blue-500 text-white rounded'
        >
          Print Output
        </button>
      </div>
      <div className='flex flex-wrap bg-gray-500 text-black items-stretch p-4 gap-4 min-h-screen overflow-y-auto'>
        <textarea
          className='min-w-96 flex-1 p-4 text-lg bg-white'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='min-w-96 flex-1 p-4 text-lg bg-white markdown'>
          <ReactMarkdown>{processChat(text)}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}
