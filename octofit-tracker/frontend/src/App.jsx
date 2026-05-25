import React, { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((j) => setStatus(j.status || 'ok'))
      .catch(() => setStatus('unreachable'))
  }, [])

  return (
    <div className="container py-4">
      <h1>OctoFit Tracker</h1>
      <p className="text-muted">Status: {status}</p>
    </div>
  )
}
