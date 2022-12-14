import React, { useState } from "react";
import "./styles.css";

const emojiData = {
  "๐": "Smiling",
  "๐ณ": "surprised",
  "๐": "sad",
  "โค๏ธ": "love",
  "๐": "expressionless",
  "๐": "waving",
  "๐": "clapping",
  "๐": "ok",
  "๐ช": "sleepy",
  "๐ด": "sleeping",
  "๐ฅฑ": "yawning",
  "๐ฃ": "tired",
  "๐": "neutral",
  "๐ค": "hugging",
  "๐งจ": "firecracker"
  /** add some more to show how the app now expands when there's new data */
};

var emojis = Object.keys(emojiData);
console.log(emojis);

export default function App() {
  var [emojiMeaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput === undefined) {
      setMeaning("We don't have this emoji in our database.");
    } else {
      setMeaning(emojiData[userInput]);
    }
  }

  function emojiClickedHandler(emojiSelected) {
    setMeaning(emojiData[emojiSelected]);
  }

  return (
    <div className="App">
      <nav>
        <h1>Fun with Emojis</h1>
      </nav>

      <header className={"center-conatiner"}>
        <input
          className={"txt-input"}
          placeholder={"Enter emoji here to see its meaning"}
          onChange={emojiInputHandler}
        />

        <h3>Meaning : {emojiMeaning}</h3>

        <h2>Emojis in our database</h2>
        {emojis.map(function (emojiSelected) {
          return (
            <span
              onClick={() => emojiClickedHandler(emojiSelected)}
              key={emojiSelected}
              style={{ cursor: "pointer" }}
            >
              {emojiSelected}
            </span>
          );
        })}
      </header>
    </div>
  );
}
