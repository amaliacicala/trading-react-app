import React from "react";
import "./FeaturesCss.css";

import content from "./Text.json";

export default function Features() {
  return (
    <>
      {content.map((item) => (
        <div className={item.id % 2 == 0 ? "DivSubClass" : "DivSubClassReverse"}>
          
          <section> <h1> {item.title}</h1>{item.text}</section>
          <img src={item.img}></img>
        </div>
      ))}
    </>
  );
}
