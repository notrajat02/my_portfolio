import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 min-h-screen py-10 px-4 flex flex-col items-center">
        <section className="max-w-3xl w-full bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 mb-4 md:mb-0"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-100 mb-2">Hi, I'm Rajat</h1>
              <h2 className="text-xl text-gray-300 mb-4">Full Stack Developer & Tech Enthusiast</h2>
              <p className="text-gray-300 mb-2">
                Passionate about building scalable web applications and beautiful user experiences. With 4+ years of experience in JavaScript, React, Next.js, and Node.js, I love solving complex problems and learning new technologies.
              </p>
              <p className="text-gray-300">
                I enjoy collaborating with teams, contributing to open source, and sharing knowledge through blogs and talks. Let's connect and create something amazing!
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-3xl w-full bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">JavaScript</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">React</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">Next.js</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">Node.js</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">TypeScript</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">Tailwind CSS</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">MongoDB</span>
            <span className="bg-gray-800 text-gray-100 px-3 py-1 rounded-full text-center border border-gray-700">Git</span>
          </div>
        </section>
        <section className="max-w-3xl w-full bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Experience</h3>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Senior Developer</span> @ TechCorp (2023 - Present)
              <p className="text-gray-300">Leading a team to build scalable SaaS products using React and Node.js.</p>
            </li>
            <li>
              <span className="font-bold">Frontend Developer</span> @ Webify (2021 - 2023)
              <p className="text-gray-300">Developed interactive dashboards and improved performance for client apps.</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
