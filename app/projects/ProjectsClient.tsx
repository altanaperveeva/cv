'use client'

import { useState } from 'react'
import Link from 'next/link'
import { type ProjectPreview } from '@/lib/projects'

interface ProjectsClientProps {
  categories: ('data-analytics' | 'frontend' | 'backend')[]
  allProjects: ProjectPreview[]
}

function getCategoryDisplayName(category: 'data-analytics' | 'frontend' | 'backend'): string {
  const displayNames = {
    'data-analytics': 'Data Analytics',
    'frontend': 'Frontend',
    'backend': 'Backend'
  }
  return displayNames[category]
}

export default function ProjectsClient({ categories, allProjects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<'data-analytics' | 'frontend' | 'backend' | 'all'>('all')
  
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Projects</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Here are some of the projects I've worked on, showcasing my skills in full-stack development and data analysis.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {getCategoryDisplayName(category)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article key={project.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col h-full">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                  {getCategoryDisplayName(project.category)}
                </span>
                <time className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                {project.featured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                <Link href={`/projects/${project.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </Link>
              </h2>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center text-sm transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found for the selected category.</p>
        </div>
      )}
    </div>
  )
}