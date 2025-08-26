import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Project {
  slug: string
  title: string
  description: string
  date: string
  category: 'data-analytics' | 'frontend' | 'backend'
  technologies: string[]
  github: string
  demo: string
  featured: boolean
  published: boolean
  content: string
}

export interface ProjectPreview {
  slug: string
  title: string
  description: string
  date: string
  category: 'data-analytics' | 'frontend' | 'backend'
  technologies: string[]
  github: string
  demo: string
  featured: boolean
  published: boolean
}

export function getSortedProjectsData(): ProjectPreview[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date,
        category: matterResult.data.category,
        technologies: matterResult.data.technologies || [],
        github: matterResult.data.github || '',
        demo: matterResult.data.demo || '',
        featured: matterResult.data.featured || false,
        published: matterResult.data.published || false,
      }
    })
    .filter(project => project.published)

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }
    })
}

export async function getProjectData(slug: string): Promise<Project> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content)
    
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    category: matterResult.data.category,
    technologies: matterResult.data.technologies || [],
    github: matterResult.data.github || '',
    demo: matterResult.data.demo || '',
    featured: matterResult.data.featured || false,
    published: matterResult.data.published || false,
    content: contentHtml,
  }
}

export function getProjectsByCategory(category: Project['category']): ProjectPreview[] {
  const allProjects = getSortedProjectsData()
  return allProjects.filter((project) => project.category === category)
}

export function getFeaturedProjects(): ProjectPreview[] {
  const allProjects = getSortedProjectsData()
  return allProjects.filter((project) => project.featured)
}

export function getAllCategories(): Project['category'][] {
  return ['data-analytics', 'frontend', 'backend']
}

export function getCategoryDisplayName(category: Project['category']): string {
  const displayNames = {
    'data-analytics': 'Data Analytics',
    'frontend': 'Frontend',
    'backend': 'Backend'
  }
  return displayNames[category]
}