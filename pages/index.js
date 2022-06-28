import Dao from "./components/Dao";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import React from "react";
import data from "../data/dataDao";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <section className="container">
        <Dao
          key={1}
          image={data[0]["logo"]}
          name={data[0]["name"]}
          rating={data[0]["rating"]}
          review={data[0]["reviews"]}
        />
        <Dao
          key={2}
          image={data[1]["logo"]}
          name={data[1]["name"]}
          rating={data[1]["rating"]}
          review={data[1]["reviews"]}
        />
        <Dao
          key={3}
          image={data[2]["logo"]}
          name={data[2]["name"]}
          rating={data[2]["rating"]}
          review={data[2]["reviews"]}
        />
        <Dao
          key={4}
          image={data[3]["logo"]}
          name={data[3]["name"]}
          rating={data[3]["rating"]}
          review={data[3]["reviews"]}
        />
        <Dao
          key={5}
          image={data[4]["logo"]}
          name={data[4]["name"]}
          rating={data[4]["rating"]}
          review={data[4]["reviews"]}
        />
        <Dao
          key={6}
          image={data[5]["logo"]}
          name={data[5]["name"]}
          rating={data[5]["rating"]}
          review={data[5]["reviews"]}
        />
        <Dao
          key={7}
          image={data[6]["logo"]}
          name={data[6]["name"]}
          rating={data[6]["rating"]}
          review={data[6]["reviews"]}
        />
        <Dao
          key={8}
          image={data[7]["logo"]}
          name={data[7]["name"]}
          rating={data[7]["rating"]}
          review={data[7]["reviews"]}
        />
        <Dao
          key={9}
          image={data[8]["logo"]}
          name={data[8]["name"]}
          rating={data[8]["rating"]}
          review={data[8]["reviews"]}
        />
        <Dao
          key={10}
          image={data[9]["logo"]}
          name={data[9]["name"]}
          rating={data[9]["rating"]}
          review={data[9]["reviews"]}
        />
      </section>
      <Footer />
    </div>
  );
}
