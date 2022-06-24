/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extension) {
          console.log(p + a + n + e);
        }
      }
    }
  }
};
