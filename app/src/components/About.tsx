import SplineAbout from "./spline/splineUse";

const timeline = [
  { title: "Schooling", content: "Finished my schooling in Mysore." },
  {
    title: "Engineering",
    content:
      "Pursuing Electronics & Communication Engineering at Dayananda Sagar College of Engineering.",
  },
  {
    title: "Coding Journey",
    content:
      "I love coding, especially in React, Node.js, and Tailwind CSS. Currently learning server-side development with Docker and AWS, and deeply interested in Japanese language and culture.",
  },
  {
    title: "Hobbies",
    content:
      "Building frontend experiences with 3D models, playing badminton, watching anime, and reading web novels.",
  },
  {
    title: "What's Next?",
    content:
      "Will be relocating to Tokyo, Japan in 2027 for a developer role. Excited for new experiences and opportunities!",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-transparent py-24 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SplineAbout url="https://prod.spline.design/9qzkNMOwrmkdgWdO/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-3xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 md:px-12 py-14">
        <div className="
          absolute -top-10 -left-10
          w-28 h-28 sm:w-32 sm:h-32
          rounded-full overflow-hidden
          border border-white/20
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(99,102,241,0.35)]
        bg-black/30 hover:scale-105 transition-transform duration-300


      ">
        <img
          src="public/myPic.jpeg"  
          alt="Arjun Rao"
          className="w-full h-full object-cover brightness-95 contrast-105"
      />
    </div>
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-14">
          My Journey
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/20" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="relative z-10 mt-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-400 shadow-md shadow-indigo-400/40" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/arjun1127"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
          >
            Visit GitHub
          </a>

          <a
            href="/myResume.pdf"
            download
            className="bg-gray-800 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
