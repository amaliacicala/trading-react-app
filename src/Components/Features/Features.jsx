import React from "react";
import "./FeaturesCss.css";
import data from "../../locales/features/Text"


export function Features() {
  return (
    <>
      {data.map((item) => (
        <div className={item.id % 2 == 0 ? "DivSubClass" : "DivSubClassReverse"}>
          
          <section> <h1> {item.title}</h1>{item.text}</section>
          <img src={item.img}></img>
        </div>
      ))}
    </>
  );
}
