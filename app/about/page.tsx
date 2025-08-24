export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">About Me</h1>
      
      <div className="space-y-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Data Analyst with a strong foundation in Digital Business and Data Science, combining analytical expertise with full-stack development capabilities. Experienced in developing data-driven solutions, optimizing system performance, and creating business intelligence tools that bridge technical implementation with strategic decision-making.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Recent Graduate of Bachelor of Science in Digital Business and Data Science at the University of Europe for applied sciences in Potsdam, Germany, who is currently gaining hands-on experience in enterprise-level data analytics and frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'TypeScript', 'Python'].map((skill) => (
                    <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'React', 'Redis', 'Node.js', 'Next.js'].map((skill) => (
                    <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Vercel', 'Postman', 'Zuplo', 'Clerk Auth', 'Git', 'Supabase', 'Grafana', 'Jupyter'].map((skill) => (
                    <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Working Student - Data Analyst</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ETS International, Nurnberg • Mar 2025 - Aug 2025</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Optimized Search API performance by 73% (1400ms to 380ms) through Redis caching. 
                  Designed database architecture for KPI monitoring and created interactive, real-time KPI dashboards to facilitate business operations.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Frontend Development Intern</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ETS International, Nurnberg • Aug 2024 - Mar 2025</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Designed and implemented responsive UI system for enterprise-level travel solutions using React and Next.js. 
                  Created RESTful APIs and managed API connections to PostgreSQL databases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}