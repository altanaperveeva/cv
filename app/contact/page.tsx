export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Contact Me</h1>
      
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to discuss a project or just say hello!
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <a href="mailto:altana.perveeva05@gmail.com" className="text-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                altana.perveeva05@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
              <a href="tel:+4915560690313" className="text-lg text-gray-700 dark:text-gray-300">
                +49 1556 069 0313
              </a>
            </div>
          </div>
          
          <div className="flex items-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
            </svg>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/altana-perveeva05/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                altana-perveeva05
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}