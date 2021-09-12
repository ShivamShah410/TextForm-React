import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <TextForm ipHeading="Enter your Text to analyse" opHeading="This is your output text"/ >
    </>
  );
}

export default App;
