import SplineHero from "./spline/splineUse";
import {  FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resume from '../assets/myResume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent overflow-hidden px-6 py-24">

      {/* ✅ Spline: ONLY desktop (unchanged behavior for lg) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <SplineHero url="https://prod.spline.design/0d6hfJtXcSAYTugk/scene.splinecode" />
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto text-center lg:pointer-events-none">

        <div className="block lg:hidden mb-12 space-y-4">
          <h1 className="text-3xl font-bold text-white">
            Hi, I’m Arjun 
          </h1>

          <p className="text-gray-300 text-base leading-relaxed">
           I build mordern web experiences with react, 3D visuals and backend systems with AI , and I aspire to work in Japnan as a software engineer.
          </p>
        </div>

      {/* ACTION BUTTONS */}
<div
  className="
    flex flex-wrap justify-center gap-4
    mt-10 lg:mt-96
    pointer-events-auto
  "
>
  <a
    href="#skills"
    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
      text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
      rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
  >
     skills
  </a>

  <a
    href="#contact"
    className="border-2 border-white text-white font-semibold
      text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
      rounded-full hover:bg-white hover:text-gray-900
      transition-all duration-300 transform hover:scale-105"
  >
    Contact 
  </a>

  <a
    href="https://github.com/arjun1127"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
      text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
      rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
  >
    GitHub
  </a>

  <a
    href={resume}
    download='Arjun_Rao_Resume.pdf'
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-white text-white font-semibold
      text-sm lg:text-lg px-5 py-2 lg:px-8 lg:py-3
      rounded-full hover:bg-white hover:text-gray-900
      transition-all duration-300 transform hover:scale-105"
  >
    Resume
  </a>


</div>

{/* SOCIAL ICONS – BELOW BUTTONS */}
<div className="mt-6 flex justify-center gap-6 pointer-events-auto">
  <a
    href="https://www.linkedin.com/in/arjun-rao-1520a424a/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    <FaLinkedin className="text-2xl" />
  </a>

  <a
    href="mailto:arjunkrao2004@gmail.com"
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    <FaEnvelope className="text-2xl" />
  </a>
</div>

      </div>
    </section>
  );
};

export default Hero;

