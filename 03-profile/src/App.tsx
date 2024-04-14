function App() {
  return (
    <> 
      <div className="relative">
        <header className="text-center fixed top-0 z-50">
          <h1 className="text-white	w-screen text-5xl p-8 bg-zinc-900 bg-gradient-to-b from-neutral-700 to-0">
            Diego Gutiérrez Treviño
          </h1>
        </header>

        <div className="overflow-y-auto p-7 flex flex-col w-screen items-center mt-20 overflow-x-hidden">
          <div className="mb-10">
            <h1 className="text-sky-100 font-bold text-2xl italic pb-3">
              Education
            </h1>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">ITESM - Tecnológico de Monterrey</h2>
                <h2 className="font-bold text-gray-400">Monterrey, MX</h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white">
                  Relevant coursework: Programming of Data Structures and Fundamental Algorithms, Object-Oriented Programming,
                  Analysis of software requirements, Integration of computer security in networks and software systems.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10 min-w-[670px] max-w-2xl">
            <h1 className="text-sky-100 font-bold text-2xl italic pb-3">
              Skills
            </h1>
              <ul className="pl-6">
                <li className="text-white mb-2">
                  <b>Languages:</b> C++, Python, JavaScript, Java, Swift             
                </li>
                <li className="text-white mb-2">
                  <b>Databases:</b> SQL Server, MySQL, Postgres, Firebase, MongoDB        
                </li>
                <li className="text-white mb-2">
                  <b>Web Development:</b> React, Next JS, Vue, Flask, ThreeJS, HTML, CSS, SCSS, Tailwind, Prisma, JWT    
                </li>
                <li className="text-white mb-2">
                  <b>Development Tools:</b> Git, GitHub, GitHub Actions, Jira, VSCode, Docker, XCode    
                </li>
              </ul>
          </div>

          <div className="mb-10">
            <h1 className="text-sky-100 font-bold text-2xl italic pb-3">
              Relevant Experience
            </h1>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2 mb-5">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">Meta & MLH - Site Reliability Engineering Fellow</h2>
                <h2 className="font-bold text-gray-400">June 2023 - September 2023</h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white mb-2">
                  Completed 12-weeks of structured curriculum-based learning covering core Site Reliability Engineering topics,
                  supplemented with events/workshops hosted by industry experts.
                </li>

                <li className="text-white mb-2">
                  Developed an open-source personal portfolio website template using Python, React, Flask, Jinja, MySQL, Nginx, and unittest.
                </li>

                <li className="text-white">
                  Optimized testing and deployment workflows using CI/CD and set up a system for monitoring, alerting, and
                  visualization using Prometheus and Grafana in a Linux environment.
                </li>
              </ul>
            </div>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">Centro Virtual de Aprendizaje - Project Leader</h2>
                <h2 className="font-bold text-gray-400">August 2022 - July 2023</h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white mb-2">
                  Oversaw and aided a team of 5 programmers in the successful creation of multiple interactive web courses,
                  benefiting more than 40,000 individuals in low-income Mexican communities by providing access to valuable
                  learning resources.
                </li>

                <li className="text-white">
                  Revamped the organization's code framework to be more approachable for new programmers, resulting in a 70%
                  faster onboarding process.                
                  </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-sky-100 font-bold text-2xl italic pb-3">
              Projects
            </h1>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2  mb-5">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">Kofy - iOS App for Inclusion</h2>
                <h2 className="font-bold text-blue-400">
                  <a href="https://github.com/Diegogtz03/kofy-app.git" target="_blank">View Project</a>
                </h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white mb-2">
                  Bridged the communication gap in the medical industry using speech-to-text and text-to-speech technology,
                  reducing up to 80% of incidents caused by communication difficulties with the deaf community.
                </li>
                <li className="text-white mb-2">
                  Facilitated people's understanding of their prescriptions and enabled them to keep track of their medical visits using
                  Generative AI and HealthKit to provide concise summaries, reminders, and explanations of complex vocabulary.
                </li>
                <li className="text-white">
                  Increased user's security of using medical instruments by 80% using Machine Learning to identify and provide
                  information on the instrument's usage in sign language.
                </li>
              </ul>
            </div>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2 mb-5">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">Trainee Management System - Web App</h2>
                <h2 className="font-bold text-blue-400">
                  <a href="https://github.com/Diegogtz03/TMS.git" target="_blank">View Project</a>
                </h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white mb-2">
                  Designed and developed a platform for a company to help manage their trainees with Next JS and Postgres,
                  resulting in a 95% faster data update and collection from previous methods.
                </li>
                <li className="text-white mb-2">
                  Collaborated in the creation of a token protected back-end server to communicate data between the platform and
                  database using .NET, helping increase data security and coherence by 80%.
                </li>
              </ul>
            </div>

            <div className="border-2 rounded-lg p-3 max-w-2xl ml-2">
              <div className="flex place-content-between pb-2">
                <h2 className="font-bold text-gray-400">GT-Dent - Web App</h2>
                <h2 className="font-bold text-blue-400">
                  <a href="https://github.com/Diegogtz03/GT-Dent-V2.git" target="_blank">View Project</a>
                </h2>
              </div>

              <ul className="list-disc pl-6">
                <li className="text-white mb-2">
                  Transformed a dental office’s workflow by digitizing medical record search, generation, and updates, achieving a
                  95% reduction in processing time using Next JS, React, Express, JWT, Prisma, Docker, and MySQL.
                </li>
                <li className="text-white mb-2">
                  Reduced data loss by 100% by implementing automated and manual backup strategies using Dropbox’s API, and a
                  physical NAS ensuring data safety and protection from damage.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10 min-w-[670px]">
            <h1 className="text-sky-100 font-bold text-2xl italic pb-3">
              Leadership Experience
            </h1>
              <ul className="list-disc pl-6">
                <li className="text-white">
                  Student group (SwiftTec) Coordinator/Instructor                
                </li>
                <li className="text-white">
                  Theater Technical Staff/Leader            
                </li>
              </ul>
          </div>
        </div>

        <footer className="flex w-screen justify-center bottom-0 p-4 bg-zinc-900 bg-gradient-to-t from-neutral-700 to-0">
          <a href="mailto: diego_gtz_t@hotmail.com" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            diego_gtz_t@hotmail.com
          </a>

          <a href="https://www.instagram.com/diegogtzt" target="_blank" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            Instagram
          </a>

          <a href="https://twitter.com/diego_trevin" target="_blank" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            X
          </a>

          <a href="https://linkedin.com/in/diegogtzt" target="_blank" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            LinkedIn
          </a>

          <a href="https://github.com/Diegogtz03" target="_blank" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            Github
          </a>

          <a href="https://diegogtz.dev" target="_blank" className="p-4 bg-gray-600 rounded-lg text-gray-300 hover:opacity-95 mx-2">
            Portfolio
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
