import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Sidebar from './components/Sidebar'

function App() {
  const [documents, setDocuments] = useState<File[]>([])

  if (documents.length === 0) {
    return <LandingPage onUpload={setDocuments} />
  }

  return (
    <div className="app">
      <Sidebar documents={documents} />
      <main className="welcome">
        <p className="eyebrow">Markpad</p>
        <h1>Your documents</h1>
        <p>
          {documents.length} Markdown {documents.length === 1 ? 'file' : 'files'} imported.
        </p>
      </main>
    </div>
  )
}

export default App
