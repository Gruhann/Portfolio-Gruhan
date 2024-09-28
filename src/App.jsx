
import { useState } from 'react';
import { Link } from 'react-scroll';
import './index.css';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Switch from './switch.jsx';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
function ProjectCard({ title , description, imageSrc, githubLink, liveLink }) {
  return (
    <CardContainer className="inter-var">

      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-700 text-sm max-w-sm mt-2 dark:text-gray-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-950"
          >
            <img src="github.png" alt="GitHub" className="w-6 h-6 dark:invert" />
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-950 dark:hover:bg-gray-200"
          >
            Live Demo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white py-10  dark:bg-gray-950 transition-colors">
        <nav className="fixed top-0 w-full font-bold bg-white dark:bg-gray-950 z-20 transition-colors">
          <ul className="flex justify-center space-x-6 py-4 text-gray-950 dark:text-gray-200 transition-colors">
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">Contact</Link>
            </li>
          </ul>
          <div className="absolute top-4 right-4">
            <Switch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          </div>
        </nav>


        {/* About Section */}
        <div id="about" className="h-screen flex items-center justify-center transition-colors bg-white dark:bg-gray-950">
  <div className="max-w-4xl mx-auto p-6  flex flex-col md:flex-row items-center justify-center">
    {/* Left Section */}
    <div className="w-full md:w-1/2 mt-20 md:mt-0">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h2>
      <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
        Hi! I’m Gruhan Ancha, a passionate developer with a strong foundation in computer science.  
        Love working on impactful projects and eager to learn and improve my skills.
      </p>
      
      {/* Scrolling Tech Stack */}
      <div className="relative overflow-hidden py-6 top-6 bg-white dark:bg-gray-950">
        <div className="absolute inset-0 flex items-center">
          <div className="flex space-x-10 animate-scroll">
              <img src="react.png" alt="react" className="w-8 h-auto" />
              <img src="tailwind.png" alt="tailwind" className="w-12 h-auto" />
              <img src="python.png" alt="python" className="w-8 h-auto" />
              <img src="c.png" alt="c" className="w-8 h-auto" />
              <img src="firebase.png" alt="firebase" className="w-8 h-auto" />
              <img src="react.png" alt="react" className="w-8 h-auto" />
              <img src="tailwind.png" alt="tailwind" className="w-12 h-auto" />
              <img src="python.png" alt="python" className="w-8 h-auto" />
              <img src="c.png" alt="c" className="w-8 h-auto" />
              <img src="firebase.png" alt="firebase" className="w-8 h-auto" />
            </div>
          </div>
        </div>

      {/* Button and CGPA */}
      <div className='relative inline-flex gap-6 top-10'>
        <a href="https://sru.edu.in/" target="_blank" rel="noopener noreferrer">
          <button className="rounded-2xl border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-950 dark:text-white px-6 py-3 font-extrabold uppercase text-black transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none">
            SR University
          </button>
        </a>
        <div className="flex items-center space-x-4 rounded-2xl border-2 border-dashed border-black px-10 bg-white dark:border-white dark:bg-gray-950 transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none">
          <h1 className="text-md font-extrabold text-black dark:text-gray-300">CGPA</h1>
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
            <CountUp end={8.9} duration={3} decimals={1} />
          </h3> 
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <CardContainer className="mt-0 ml-0 flex justify-center">
        <CardItem
          translateZ="100"
          className="w-full  flex justify-center py-10"
        >
          <img 
            src="gruhan_profile.jpg" 
            alt="Gruhan Ancha" 
            className="rounded-2xl shadow-2xl w-60 h-60 md:w-60 md:h-60"
          />
        </CardItem>
      </CardContainer>
    </div>
  </div>
</div>


        {/* Projects Section */}
      <div id="projects" className="flex-col items-center justify-center transition-colors bg-white dark:bg-gray-950">
      <h2 className="text-4xl flex items-center justify-center font-extrabold text-gray-900 dark:text-white bg-white dark:bg-gray-950 pt-20">Projects</h2>
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 ">
          <ProjectCard
            title="GetFit"
            description="A health and fitness application using the React library. Implementing features such as user authentication, workout plans, diet plans, and user testimonials."
            imageSrc="getfit.png"
            githubLink="https://github.com/Gruhann/GetFit"
            liveLink="https://get-fit-psi.vercel.app/"
          />
          <ProjectCard
            title="Superchat"
            description="A real-time chat application using React and Firebase. Implemented user authentication with Google sign-in and real-time messaging using Firestore."
            imageSrc="superchat.png"
            githubLink="https://github.com/Gruhann/Superchat"
            liveLink="https://superchat-tau-seven.vercel.app/"
          />
          <ProjectCard
            title="Resume Collector"
            description="This application facilitates the collection of student resumes and essential details, enabling administrators to manage and export the information seamlessly to an Excel sheet."
            imageSrc="rc.png"
            githubLink="https://github.com/Gruhann/Resume-collector"
            liveLink="https://resume-collector.vercel.app/"
          />
          <ProjectCard
            title="Live Weather App"
            description="A weather app providing real-time updates using OpenWeatherMap API. Features include current weather, forecast, and location-based updates."
            imageSrc="liveweather.png"
            githubLink="https://github.com/Gruhann/Weather-app"
            liveLink="https://gruhann.github.io/Weather-app/"
          />
        </div>
      </div>

        {/* Contact Section */}
        <div id="contact" className="h-screen flex items-center justify-center transition-colors bg-white dark:bg-gray-950">
          <div className="max-w-lg mx-auto p-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Me</h2>
            <div className="mt-4 flex justify-center space-x-4 ">
              <a href="mailto:gruhanancha@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="gmail.png" alt="gmail" className="w-8 h-8 transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </a>
              <a href="https://www.linkedin.com/in/gruhan-ancha" target="_blank" rel="noopener noreferrer">
                <img src="linkedin.png" alt="LinkedIn" className="w-8 h-8 transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </a>
              <a href="https://github.com/Gruhann" target="_blank" rel="noopener noreferrer">
                <img src="github.png" alt="GitHub" className="w-8 h-8 dark:invert transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </a>
              <a href="https://www.instagram.com/gruhan.ancha/" target="_blank" rel="noopener noreferrer">
                <img src="instagram.png" alt="Instagram" className="w-8 h-8 transition-transform duration-500 ease-in-out transform hover:scale-110"/>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-950 dark:text-gray-300">
            Feel free to reach out if you&apos;re looking for professional UI/UX design, cross platform mobile app development, responsive web development, or modern web app solutions!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-4 text-black font-bold bg-white dark:bg-gray-950 dark:text-white text-center transition-colors">
          <p>© 2024 Gruhan Ancha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
