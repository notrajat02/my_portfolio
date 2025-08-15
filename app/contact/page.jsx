import Header from '../../components/Header';

export default function ContactsPage() {
  return (
    <>
      <Header />
        <div className="bg-gray-950 min-h-screen py-10">
    <section className="max-w-2xl mx-auto px-6 py-10 bg-gray-900 border border-gray-700 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-100 mb-6">Connect with Me</h2>
      <p className="text-gray-300 mb-6 text-lg">I'm always excited to collaborate, discuss creative ideas, or help you bring your vision to life. Whether you're a recruiter, fellow designer, or just want to say hello, feel free to reach out!</p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">Availability</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Open to freelance, contract, and full-time opportunities</li>
          <li>Available for design consultations and collaborations</li>
          <li>Happy to mentor aspiring designers and students</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">How to Reach Me</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition border border-gray-700">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            <span className="text-gray-100 font-medium">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition border border-gray-700">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            <span className="text-gray-100 font-medium">LinkedIn</span>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition border border-gray-700">
            <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
            <span className="text-gray-100 font-medium">Twitter</span>
          </a>
          <a href="mailto:your@email.com" className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition border border-gray-700">
            <img src="/email.svg" alt="Email" className="w-6 h-6" />
            <span className="text-gray-100 font-medium">Email</span>
          </a>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">Why Connect?</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Get a custom logo or branding solution for your business</li>
          <li>Collaborate on creative projects and campaigns</li>
          <li>Discuss design trends, tools, and portfolio building</li>
          <li>Share feedback or request a portfolio review</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <a href="mailto:your@email.com" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition">Send Me a Message</a>
      </div>
    </section>
        </div>
    </>
  );
}
