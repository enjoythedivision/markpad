import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'

interface LandingPageProps {
  onUpload: (files: File[]) => void
}

export default function LandingPage({ onUpload }: LandingPageProps) {
  const fileInput = useRef<HTMLInputElement>(null)
  const [error, setError] = useState('')

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? [])
    event.currentTarget.value = ''

    // Closing the picker without selecting files keeps the landing page open.
    if (files.length === 0) return

    if (files.some((file) => !/\.(md|markdown)$/i.test(file.name))) {
      setError('Please choose only .md or .markdown files.')
      return
    }

    setError('')
    onUpload(files)
  }

  return (
    <main className="landing">
      <div className="landing-content">
        <p className="eyebrow">Your documentation, in one place.</p>
        <h1>Markpad</h1>
        <p className="landing-description">
          A quiet space to read your project’s Markdown documentation.
        </p>
        <button className="upload-button" type="button" onClick={() => fileInput.current?.click()}>
          Upload documents
        </button>
        <p className="upload-hint">Choose one or more .md or .markdown files.</p>
        {error && <p className="upload-error">{error}</p>}
        <input
          ref={fileInput}
          type="file"
          accept=".md,.markdown"
          multiple
          hidden
          onChange={handleFileSelection}
        />
      </div>
    </main>
  )
}
