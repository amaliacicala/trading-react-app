import React from "react";
import "./FeaturesCss.css";
import data from "../../locales/features/Text";

export function Features() {
  return (
    <section id="features">
      {data.map((item) => (
        <div key={item.id} className={item.id % 2 === 0 ? "DivSubClassReverse" : "DivSubClass"} id="contenitor">

          <section className="FeaturesStyle"> <h1> {item.title}</h1>{item.text}</section>
          <img alt="" src={item.img}></img>
        </div>
      ))}
    </section>
  );
}
