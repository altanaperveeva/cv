'use client'

import { useState, useEffect } from 'react'

interface PDFViewerProps {
  src: string
  title?: string
}

export default function PDFViewer({ src, title = "Performance Report" }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a brief loading delay to ensure PDF loads properly
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="text-center text-gray-500 dark:text-gray-400">Loading performance report...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="bg-gray-50 dark:bg-gray-900">
        <iframe 
          src={`${src}#view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`}
          className="w-full h-[700px] border-0"
          title="Load Testing Report"
          onLoad={() => console.log('PDF loaded successfully')}
        />
      </div>
    </div>
  )
}