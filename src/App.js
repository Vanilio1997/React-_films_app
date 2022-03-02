import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/main";
import React from "react";
import { render } from "@testing-library/react";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

}

export default App;
