import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Flipcards from "./components/Flipcards";
import { render } from "react-dom";

function App() {
  var [text, setText] = useState("click next");
  var [answerText, setAnswerText] = useState("");
  var [difficultyText, setDifficulty] = useState("");
  var [stateText, setStateText] = useState("flip-card-inner");
  var index = 0;
  var stateCount = 0;

  //difficulty ranking
  /*
  red = most difficult
  blue = medium
  green = easy
  */

  const flashcards = [
    {
      description: "Matches 1 or more of the preceding character.",
      answer: "+",
      difficulty: "LightGreen",
    },
    {
      description:
        "Preceding character is optional. Matches 0 or 1 occurrence.",
      answer: "?",
      difficulty: "LightGreen",
    },
    {
      description: "Matches the beginning of a string.",
      answer: "^",
      difficulty: "LightGreen",
    },
    {
      description:
        "Matches any single lowercase character from the character class.",
      answer: "[a-z]",
      difficulty: "LightPink",
    },
    {
      description:
        "Matches one or more of any of the lowercase characters in the set.",
      answer: "[a-z]+",
      difficulty: "LightBlue",
    },
    {
      description: "Matches the end of the string.",
      answer: "$",
      difficulty: "LightGreen",
    },
    {
      description: "Matches any character, except for line breaks",
      answer: ".",
      difficulty: "LightBlue",
    },
    {
      description: "Matches any single digit",
      answer: "\\d",
      difficulty: "LightPink",
    },
    {
      description: "Matches any word character (alphanumeric & underscore).",
      answer: "\\w",
      difficulty: "LightBlue",
    },
    {
      description: "Matches Any space",
      answer: "\\s",
      difficulty: "LightPink",
    },
    {
      description:
        "When inside of a character class, the ^ means NOT; in this case, match anything that is NOT a lowercase letter.",
      answer: "[^a-z]",
      difficulty: "LightPink",
    },
  ];
  const nextCard = () => {
    index = Math.floor(Math.random() * flashcards.length);

    setText((text = flashcards[index].description));
    setAnswerText((answerText = flashcards[index].answer));
    setDifficulty((difficultyText = flashcards[index].difficulty));
    console.log(text);
    console.log(answerText);
    console.log(difficultyText);
  };
  const flip = () => {
    stateCount++;
    if (stateCount % 2 == 0) {
      setStateText("flip-card-inner");
    } else {
      setStateText("flip-card-inner-flipped");
    }
    console.log(stateText);
  };

  return (
    <>
      <h1>Learning Regular Expressions</h1>
      <h2>
        This flashcard game will help you learn the language of regular
        expressions!
        <br />
        Number of cards: {flashcards.length}
      </h2>
      <div
        className={stateText}
        onClick={flip}
        style={{ backgroundColor: difficultyText }}
      >
        {stateText == "flip-card-inner" ? (
          <Flipcards description={text} />
        ) : (
          <Flipcards answer={answerText} />
        )}
      </div>
      <div className="button-container">
        <button onClick={nextCard}>next</button>
      </div>
    </>
  );
}
//<Flipcards description={text} answer={answerText} />
// <Flipcards description={text} answer={answerText} />
/*
<div className="flipcard">
        <p>{text}</p>
      </div>
      <div className="backcard">
        <p>{answerText}</p>
      </div>
      */

export default App;
