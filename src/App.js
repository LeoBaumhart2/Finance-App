import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Resume from "./components/Resume";


const App = () => {
  return (
    <>
    <Header />
    <Resume />
    <Form />
    <GlobalStyle />
    </>
    
  );
};

export default App
