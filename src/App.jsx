/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-scroll';
import './index.css';
import CountUp from 'react-countup';
import Switch from './switch.jsx';
import LiveButton from './livebutton.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white py-10  dark:bg-gray-900 transition-colors">
        <nav className="fixed top-0 w-full font-bold bg-white dark:bg-gray-800 z-20 transition-colors">
          <ul className="flex justify-center space-x-6 py-4 text-gray-800 dark:text-gray-200 transition-colors">
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
        <div id="about" className="h-screen flex items-center justify-center transition-colors bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto p-6 space-x-10 flex flex-col md:flex-row items-center justify-center">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h2>
              <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                Hi! I’m Gruhan Ancha, a passionate developer with a strong foundation in computer science.  
                Love working on impactful projects and eager to learn and improve my skills.
              </p>
              
              {/* Scrolling Tech Stack */}
              <div className="relative overflow-hidden py-6 top-6 bg-white dark:bg-gray-800">
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
                  <button className="rounded-2xl border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-800 dark:text-white px-6 py-3 font-extrabold uppercase text-black transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none">
                    SR University
                  </button>
                </a>
                <div className="flex items-center space-x-4 rounded-2xl border-2 border-dashed border-black px-10 bg-white dark:border-white dark:bg-gray-800 transition-all duration-300 hover:rounded-md active:rounded-2xl active:shadow-none">
                  <h1 className="text-md font-extrabold text-black dark:text-gray-300">CGPA</h1>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    <CountUp end={8.9} duration={3} decimals={1} />
                  </h3> 
                </div>
              </div>
            </div>

            
            <div className="w-full md:w-1/2 mt-6 flex justify-center py-10">
              <img 
                src="gruhan_profile.jpg" 
                alt="Gruhan Ancha" 
                className="rounded-2xl shadow-2xl w-60 h-60 md:w-60 md:h-60"
              />
            </div>
          </div>
        </div>


        {/* Projects Section */}
        <h2 className="text-4xl flex items-center justify-center font-extrabold text-gray-900 dark:text-white">Projects</h2>
        <div id="projects" className="flex items-center justify-center transition-colors bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="project-image">
            <a href="https://get-fit-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img 
                src="getfit.png" 
                alt="Getfit"
                className="rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </a>
            </div>
            <div className="project-info">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">GetFit</h2>
              <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                A health and fitness application using the React library. Implementing features such
                as user authentication, workout plans, diet plans, and user testimonials.
              </p>
              <div className="button-container">
                <a href="https://github.com/Gruhann/GetFit" target="_blank" rel="noopener noreferrer">
                  <img src="github.png" alt="GitHub" className="w-8 h-8 dark:invert transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </a>
                <a href="https://get-fit-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <LiveButton />
                </a>
              </div>
            </div>
            <div className="project-image">
            <a href="https://superchat-tau-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="superchat.png" 
                alt="superchat"
                className="rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </a>
            </div>
            <div className="project-info">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Superchat</h2>
              <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                A real-time chat application using React and Firebase. Implemented user authentication with Google sign-in and real-time messaging using Firestore.
              </p>
              <div className="button-container">
                <a href="https://github.com/Gruhann/Superchat" target="_blank" rel="noopener noreferrer">
                  <img src="github.png" alt="GitHub" className="relative w-8 h-8 dark:invert transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </a>
                <a href="https://superchat-tau-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <LiveButton />
                </a>
              </div>
            </div>
            <div className="project-image">
            <a href="https://gruhann.github.io/Weather-app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="liveweather.png" 
                alt="Live Weather App"
                className="rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </a>
            </div>
            <div className="project-info">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Live Weather App</h2>
              <p className="mt-4 text-lg font-bold text-gray-700 dark:text-gray-300">
                A weather app providing real-time updates using OpenWeatherMap API. Features include current weather, forecast, and location-based updates.
              </p>
              <div className="button-container">
                <a href="https://github.com/Gruhann/Weather-app" target="_blank" rel="noopener noreferrer">
                  <img src="github.png" alt="GitHub" className="relative w-8 h-8 dark:invert transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </a>
                <a href="https://gruhann.github.io/Weather-app/" target="_blank" rel="noopener noreferrer">
                  <LiveButton />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="h-screen flex items-center justify-center transition-colors bg-white dark:bg-gray-800">
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
            <p className="mt-4 text-sm text-gray-800 dark:text-gray-300">
            Feel free to reach out if you're looking for professional UI/UX design, cross platform mobile app development, responsive web development, or modern web app solutions!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-4 text-black font-bold bg-white dark:bg-gray-800 dark:text-white text-center transition-colors">
          <p>© 2024 Gruhan Ancha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
