import Content from "components/Content";
import Copyright from "components/Copyright";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="AppContainer">
        <Header />
        <Content className="AppContent" />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};
