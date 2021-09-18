import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm
          ipHeading="Enter your Text to analyse"
          opHeading="This is your output text"
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
