interface SidebarProps {
  documents: File[]
}

export default function Sidebar({ documents }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <h2 id="documents-heading">Documents</h2>
      <ul className="document-list">
        {documents.map((document, index) => (
          <li key={`${document.name}-${index}`}>{document.name}</li>
        ))}
      </ul>
    </aside>
  )
}
