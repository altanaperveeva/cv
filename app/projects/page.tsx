import { getSortedProjectsData, getAllCategories } from '@/lib/projects'
import ProjectsClient from './ProjectsClient'

export default function Projects() {
  const categories = getAllCategories()
  const allProjects = getSortedProjectsData()

  return (
    <ProjectsClient 
      categories={categories}
      allProjects={allProjects}
    />
  )
}