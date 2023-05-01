import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Main
        key={item.id}
        img={item.coverImg}
        Location={item.Location}
        name={item.name}
        startDate={item.startDate}
        endDate={item.endDate}
      />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
