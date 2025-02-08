import profilePicture from "../images/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// TODO: add clickable icons for github and linkedin

// TODO: add education section

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 flex lg:max-h-screen
            lg:w-[45%] flex-col lg:py-24
            items-center
        ">
            <img src={profilePicture} alt="Max Saar"
                className="w-32 h-32 rounded-full" />
            <h1 className="text-5xl font-ssans3bold mt-2 ">Max Saar</h1>
            <div className="mt-3 text-3xl font-semibold">Web Developer</div>
            <div className="mt-3 text-lg">maxsaar1998@gmail.com</div>
            <div className="flex flex-row items-center mt-4">
                <IconLink href="https://github.com/MaxSaar1998">
                    <FaGithub className="w-8 lg:w-6 h-8 lg:h-6 mx-2"/>
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/max-saar-5a895734a/">
                    <FaLinkedin className="w-8 lg:w-6 h-8 lg:h-6 mx-2"/>
                </IconLink>
            </div>

            <nav className="hidden lg:flex lg:flex-col mt-6">
                <ul className="flex flex-col items-center text-xl">
                    <li className="mb-2">
                        <AnimatedLink href="#about" >About</AnimatedLink>
                    </li>
                    <li className="mb-2">
                        <AnimatedLink href="#experience" >Experience</AnimatedLink>
                    </li>
                    <li className="mb-2">
                        <AnimatedLink href="#projects" >Projects</AnimatedLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const IconLink = ({href, children}) => {
    return (
        <a
          href={href}
          className="hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
}

const AnimatedLink = ({ href, children }) => {
    return (
      <a
        href={href}
        className="text-blue-700 font-semibold transition-all duration-300 hover:text-black hover:underline hover:scale-110"
      >
        {children}
      </a>
    );
  };