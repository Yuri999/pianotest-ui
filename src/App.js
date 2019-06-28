import React from "react";
import { ToastContainer } from "react-toastify";
import StackExchangeSearchPage from "./components/stackExchange/stackExchangeSearchPage";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="container">
        <StackExchangeSearchPage />
      </div>
    </React.Fragment>
  );
}

export default App;
