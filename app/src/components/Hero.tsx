import SplineHero from "./spline/splineUse";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden px-6 py-24">

      <div className="absolute inset-0 z-0">
        <SplineHero url="https://prod.spline.design/eQgsFN762edf2Kbk/scene.splinecode" />
      </div>

      {/* UI Overlay (non-blocking by default) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pointer-events-none">

        {/* Re-enable pointer events ONLY where needed */}
        <div className="mt-96 flex gap-6 justify-center pointer-events-auto">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border-2 border-white text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
