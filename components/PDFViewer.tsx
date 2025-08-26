'use client'

interface PDFViewerProps {
  src: string
  title?: string
}

export default function PDFViewer({ src, title = "Performance Report" }: PDFViewerProps) {
  return (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="bg-gray-50 dark:bg-gray-900">
        <object 
          data={`${src}#view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0`}
          type="application/pdf"
          className="w-full h-[700px] border-0"
          title="Load Testing Report"
        >
          <p className="p-8 text-center text-gray-600 dark:text-gray-400">
            Your browser does not support PDFs. <a href={src} className="text-blue-600 dark:text-blue-400 hover:underline">Download the PDF</a>.
          </p>
        </object>
      </div>
    </div>
  )
}