export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">About Me</h1>
      
      <div className="space-y-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate Full-Stack Developer and Data Analyst with expertise in building 
            scalable web applications and extracting meaningful insights from complex datasets.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With a strong background in both front-end and back-end development, I enjoy 
            creating user-friendly interfaces while ensuring robust data architecture and 
            analytics capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill) => (
                    <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'].map((skill) => (
                    <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Data Analysis</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'SQL', 'Tableau', 'Power BI', 'Excel'].map((skill) => (
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
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Full-Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Company Name • 2022 - Present</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Developed and maintained web applications using modern technologies, 
                  improving user engagement by 40%.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Data Analyst</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Previous Company • 2020 - 2022</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Analyzed large datasets to identify trends and insights, 
                  supporting data-driven decision making across departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}