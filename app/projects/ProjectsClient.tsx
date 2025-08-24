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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
      <p className="text-lg text-gray-700 mb-8">
        Here are some of the projects I've worked on, showcasing my skills in full-stack development and data analysis.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getCategoryDisplayName(category)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  <Link href={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
                    {project.title}
                  </Link>
                </h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {getCategoryDisplayName(project.category)}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short'
                  })}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects found for the selected category.</p>
        </div>
      )}
    </div>
  )
}