import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-950 py-12 px-4">
        <section className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">🎨 Creative Graphic Designer</h1>
          <p className="text-lg text-gray-300 text-center mb-6">
            Creative and detail-oriented Graphic Designer with hands-on experience in logo design, 2D/3D branding visuals, and digital illustration. Skilled in tools like Canva <span aria-label='paint palette' title='Canva'>🖌️</span>, Blender <span aria-label='cube' title='Blender'>🧊</span>, and Inkscape <span aria-label='pen' title='Inkscape'>✒️</span> to deliver impactful design solutions. Strong eye for layout, typography, and storytelling through visuals. Adept at transforming concepts into polished designs and building organized portfolios <span aria-label='portfolio' title='Portfolio'>📁</span> to showcase work.
          </p>
        </section>
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">🛠️ Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Logo Design <span title="logo">🌟</span></li>
              <li>Script Writing <span title="script">📝</span></li>
              <li>Motion Graphics <span title="motion">🎬</span></li>
              <li>Storyboarding <span title="storyboard">📖</span></li>
              <li>Scene Direction <span title="direction">🎯</span></li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">🧰 Tools Used</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Blender (Logo & Animation) <span title="Blender">🧊</span></li>
              <li>Canva (Story Design & Animation) <span title="Canva">🖌️</span></li>
              <li>Kapwing (Subtitles & Editing) <span title="Kapwing">🎞️</span></li>
              <li>Audacity (Audio Editing) <span title="Audacity">🎧</span></li>
              <li>Inkscape (Sketches & Vector Art) <span title="Inkscape">✒️</span></li>
              <li>Notion (Portfolio) <span title="Notion">📁</span></li>
            </ul>
          </div>
        </section>
        <section className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">🏆 Achievements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Received Canva 5 & 10 Design Milestone Certificates <span title="certificate">📜</span> for completing design challenges and creative consistency.</li>
            <li>Built a Notion-based Design Portfolio <span title="portfolio">📁</span> with logo series, digital sketches, animations, and creative projects.</li>
            <li>Finalist entry for Network18 Sanjeevni Short Film Challenge <span title="film">🎥</span>.</li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">🚀 Project Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Logo Design Series <span title="logo">🌟</span></h3>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>Multi-style logo set: 2D vector, 3D cinematic, glitch reveal glow <span title="glitch">✨</span></li>
                <li>Animation principles, modifiers, lighting, camera angles <span title="animation">🎬</span></li>
                <li>Original sketches using Inkscape vectorization <span title="sketch">✏️</span></li>
              </ul>
              <span className="text-sm text-gray-500">Tools: Blender <span title="Blender">🧊</span>, Inkscape <span title="Inkscape">✒️</span>, Canva <span title="Canva">🖌️</span></span>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">The Boy Who Shines Bright <span title="film">🎥</span></h3>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>2min5sec animated short film on childhood cancer <span title="animation">🎬</span></li>
                <li>Scene scripting, animation, subtitles, sound design <span title="sound">🔊</span></li>
                <li>Finalist entry for Network18 Sanjeevni Short Film Challenge <span title="award">🏅</span></li>
              </ul>
              <span className="text-sm text-gray-500">Tools: Canva <span title="Canva">🖌️</span>, Audacity <span title="Audacity">🎧</span>, Kapwing <span title="Kapwing">🎞️</span></span>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Nescafe Ad Campaign <span title="ad">📢</span></h3>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>12sec commercial ad: background, sound effects, voiceover <span title="sound">🔊</span></li>
                <li>Custom 3D logo variant in Blender <span title="logo">🌟</span></li>
              </ul>
              <span className="text-sm text-gray-500">Tools: Canva <span title="Canva">🖌️</span>, Kapwing <span title="Kapwing">🎞️</span>, Blender <span title="Blender">🧊</span></span>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Never Give Up – Cinematic Logo Animation <span title="motivation">💪</span></h3>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>Motivational logo design on trapezium base <span title="logo">🌟</span></li>
                <li>Cinematic reveal, fist icon symbol <span title="fist">👊</span></li>
              </ul>
              <span className="text-sm text-gray-500">Tools: Blender <span title="Blender">🧊</span></span>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">XenionInTHEscapeInk – Original 3D Series <span title="sci-fi">👾</span></h3>
              <ul className="list-disc list-inside text-gray-300 mb-2">
                <li>Animated sci-fi fantasy series: original characters, soundtrack, lore <span title="soundtrack">🎶</span></li>
                <li>3D and cinematic logos <span title="logo">🌟</span></li>
              </ul>
              <span className="text-sm text-gray-500">Tools: Blender <span title="Blender">🧊</span></span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
