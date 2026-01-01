import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiPostgresql,
  SiPython, SiC, SiJavascript, SiGit, SiLinux, SiNextdotjs,SiAmazon
} from 'react-icons/si';
import SplineSkills from "./spline/splineUse";
const skills = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C', icon: <SiC /> },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'AWS(Basics)', icon: <SiAmazon /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 bg-transparent overflow-hidden0 text-white">
       {/* <div className="absolute inset-0 z-0">
        <SplineSkills url="https://prod.spline.design/xFL9TYlOotRFrWPF/scene.splinecode" />
      </div> */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 mb-16">
          Skills
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-indigo-400/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.items.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm sm:text-base">
                    <span className="text-xl text-indigo-300">{skill.icon}</span>
                    <span className="text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
