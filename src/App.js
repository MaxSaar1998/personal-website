import './App.css';
import Header from './components/header.js';
import About from './components/about.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';

function App() {
  return (
      <div className="mx-auto min-h-screen max-w-screen-xl
        px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="App font-ssans3 lg:flex lg:justify-between lg:gap-4">
          <Header />
          {/* Body */}
          <main id="content" className=" pt-12 lg:pt-24 lg:w-[55%] flex flex-col">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>

  );
}

export default App;
