import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    showAlert("Mode Changed", "success");
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#002259";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark";

      // setInterval(() => {
      //   document.title = 'Good Morning';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* /users --> componenet 1
            /users/home --> component 2
            if we don't use exact it will render component 1 in both calls
            by default react use partial matching  */}

        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm
              ipHeading="Enter your Text to analyse"
              opHeading="This is your output text"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
