import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-md border-b border-gray-700/50 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Text */}
        <div className="text-sm text-center md:text-left">
          &copy; {year} Arjun Rao. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/arjun1127"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/arjun1127" // replace with actual LinkedIn if available
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>

          <a
            href="mailto:arjunkrao2004@gmail.com"
            className="hover:text-white transition-colors duration-300"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
