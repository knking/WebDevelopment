import RevealOnScroll from "./RevealOnScroll";

function About() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
  ];

  const backendSkills = [
    'NodeJs','Azure','Azure DevOps','CI/CD','Docker',"kubernets",'MongoDb'
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        {/* skills */}
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in bulding scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* education and experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
          <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>B.Tech in Computer Science & Engineering </strong>
               - MRSPTU
              (2016-2020)
            </li>
            <li>
              <strong>Class XII </strong> - Marwari College Darbhanga
              (2013-2016)
            </li>
            <li>
              <strong>Class X </strong> - L.N High School Marona,Supaol,Bihar
              (2012-2013)
            </li>
          </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
          <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

          <div className="space-y-4 text-gray-300"> 
                <div>
                  <h4 className="font-semibold">Software Engineer at Tech Mahindra (2021 - Present) </h4>
                  <li>Developed and Maintained microservice for cloud-based application</li>
                  <li>Experience in Implementing CI/CD for Multi-Tier Architecture Micro Services using Azure Pipelines and Argo CD. </li>
                  <li>Experience in installing, configuring and Managing Argo CD for Continuous Delivery of Software.</li>
                  <li>Developed shell scripts for automating node health checks, monitoring CPU, memory, and other critical metrics, 
                  ensuring system stability.</li>
        
                </div>
          </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
