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
      <div className='flex flex-wrap bg-gray-500 text-black items-stretch p-4 max-sm:p-0 gap-4 min-h-screen overflow-y-auto'>
        <textarea
          className='min-w-96 flex-1 p-4 text-lg bg-white'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='min-w-96 flex-1 p-4 text-lg bg-white markdown'>
          <ReactMarkdown>{processChat(text)}</ReactMarkdown>
        </div>
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-bold'>
          Instructions to Convert WhatsApp Chat to PDF
        </h2>
        <ol className='list-decimal list-inside'>
          <li>Open WhatsApp and go to the chat you want to export.</li>
          <li>
            Tap on the three dots in the top right corner and select
            &quot;More&quot;.
          </li>
          <li>
            Select &quot;Export chat&quot; and choose whether to include media
            or not.
          </li>
          <li>
            Choose a method to share the exported chat (e.g., email, Google
            Drive).
          </li>
          <li>Download the exported chat file to your device.</li>
          <li>Copy and paste the chat text into the textarea above.</li>
          <li>
            Click the &quot;Print Output&quot; button to print the chat as a
            PDF.
          </li>
        </ol>
      </div>
    </>
  )
}
