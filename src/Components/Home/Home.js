import React from "react";
import Card from "./Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        YOU WANTED TODO APPS? THIS IS HOW YOU GET TODO APPS
      </h1>
      <h3 className="home-subtitle">JUST KIDDING</h3>
      <div className="home-card-container">
        <Card
          title="You want to make tasks?"
          subtitle="hahahaha"
          description="Well you asked for it and here it is"
          image="/images/generic-splash-card-image.jpg"
        />
        <Card
          title="You want some kind of badly implemented auth?"
          subtitle="hahahaha"
          description="Your wish is my command"
          image="/images/generic-splash-card-image2.jpg"
        />
        <Card
          title="Do you want the ability to log out?!?!"
          subtitle="hahahaha"
          description="WELL YOU GET A LOGOUT BUTTON"
          image="/images/generic-splash-card-image3.jpg"
        />
        <Card
          title="I've run out of things to say"
          subtitle="hahahaha"
          description="But you'll read this sentence anyway"
          image="/images/generic-splash-card-image4.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
