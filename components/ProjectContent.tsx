'use client'

import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), { 
  ssr: false,
  loading: () => (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-8">
      <div className="animate-pulse">
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="text-center text-gray-500 dark:text-gray-400">Loading PDF...</div>
      </div>
    </div>
  )
})

interface ProjectContentProps {
  slug: string
  content: string
}

export default function ProjectContent({ slug, content }: ProjectContentProps) {
  // For the search API project, inject PDF viewer after "Load Testing Report" heading
  if (slug === 'sales-analytics-dashboard') {
    console.log('Content includes:', content.includes('Load Testing Report'));
    console.log('Content snippet:', content.substring(content.indexOf('Load Testing'), content.indexOf('Load Testing') + 200));
    
    // Try multiple possible HTML structures
    const possibleMarkers = [
      '<h2 id="load-testing-report">Load Testing Report</h2>',
      '<h2>Load Testing Report</h2>',
      '<h2 id="load-testing-report"><a href="#load-testing-report">Load Testing Report</a></h2>',
      '<h2><a href="#load-testing-report">Load Testing Report</a></h2>'
    ];
    
    let parts = null;
    let foundMarker = '';
    
    for (const marker of possibleMarkers) {
      const testParts = content.split(marker);
      if (testParts.length === 2) {
        parts = testParts;
        foundMarker = marker;
        break;
      }
    }
    
    if (parts && parts.length === 2) {
      console.log('Found marker:', foundMarker);
      return (
        <>
          <div 
            className="prose prose-lg prose-gray dark:prose-invert max-w-none 
                       prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:leading-relaxed prose-p:mb-6
                       prose-ul:space-y-2 prose-li:marker:text-blue-500 dark:prose-li:marker:text-blue-400
                       prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                       prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                       prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-lg
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
                       prose-blockquote:pl-4 prose-blockquote:italic
                       prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: parts[0] + foundMarker }}
          />
          
          <PDFViewer 
            src="/optimized300rps.pdf" 
            title="Performance Load Testing Report - 300 RPS Achievement"
          />
          
          <div 
            className="prose prose-lg prose-gray dark:prose-invert max-w-none 
                       prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:leading-relaxed prose-p:mb-6
                       prose-ul:space-y-2 prose-li:marker:text-blue-500 dark:prose-li:marker:text-blue-400
                       prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                       prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                       prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-lg
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
                       prose-blockquote:pl-4 prose-blockquote:italic
                       prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: parts[1] }}
          />
        </>
      )
    }
    
    console.log('No marker found, rendering PDF at bottom');
    return (
      <>
        <div 
          className="prose prose-lg prose-gray dark:prose-invert max-w-none 
                     prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                     prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                     prose-p:leading-relaxed prose-p:mb-6
                     prose-ul:space-y-2 prose-li:marker:text-blue-500 dark:prose-li:marker:text-blue-400
                     prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                     prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                     prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-lg
                     prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
                     prose-blockquote:pl-4 prose-blockquote:italic
                     prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        <PDFViewer 
          src="/optimized300rps.pdf" 
          title="Performance Load Testing Report - 300 RPS Achievement"
        />
      </>
    )
  }
  
  return (
    <div 
      className="prose prose-lg prose-gray dark:prose-invert max-w-none 
                 prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                 prose-p:leading-relaxed prose-p:mb-6
                 prose-ul:space-y-2 prose-li:marker:text-blue-500 dark:prose-li:marker:text-blue-400
                 prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-gray-100
                 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:rounded-lg
                 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
                 prose-blockquote:pl-4 prose-blockquote:italic
                 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}