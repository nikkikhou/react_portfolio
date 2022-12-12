import React from 'react';
import './App.css'


import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [pageIndex, setPageIndex] = useState(0);


  return (
    <div className="App">

      <Nav
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        pageIndex={pageIndex}
      />


      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Projects />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}

      <Footer />

    </div>
  );
}

export default App;
