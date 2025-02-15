import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
