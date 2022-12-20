import { Container, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import englishWords from "../resources/enWords10k";

let firstLoad = true;

export default function WordHack() {
  const [wordLength, setWordLength] = useState(0);
  const [validWords, setValidWords] = useState([]);
  const [possibleChars, setPossibleChars] = useState("");

  useEffect(() => {
    if (firstLoad) {
      firstLoad = false;
    } else {
      setValidWords(getWords(possibleChars, wordLength));
    }
  }, [wordLength]);

  function getWords(chars, length) {
    const words = [];
    const combinations = getCombinations(chars, length);
    combinations.forEach((combination) => {
      const word =
        typeof combination === "string" ? combination : combination.join("");
      if (isEnglishWord(word) && !words.includes(word)) {
        words.push(word);
      }
    });
    return words;
  }

  function getCombinations(chars, length) {
    if (length === 1) return chars.split("");
    if (chars.length === length) return [chars];
    const combinations = [];
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      const remainingChars = chars.slice(0, i) + chars.slice(i + 1);
      const subCombinations = getCombinations(remainingChars, length - 1);
      subCombinations.forEach((subCombination) => {
        combinations.push([char].concat(subCombination));
      });
    }
    return combinations;
  }

  function isEnglishWord(word) {
    // Check if the word is in a list of known English words
    if (englishWords.includes(word)) return true;
    // Alternatively, you can use a natural language processing library to check for word validity
    return false;
  }

  const RenderList = () => {
    return validWords.map((word) => <div key={word}>{word}</div>);
  };

  return (
    <Container style={{ paddingTop: 30 }}>
      <TextField
        label="Possible Characters"
        value={possibleChars}
        onChange={(e) => {
          const chars = e.target.value.toLowerCase();
          setPossibleChars(chars);
          setValidWords(getWords(chars, wordLength));
        }}
        onFocus={(e) => e.target.select()}
      />

      <h1 style={{ padding: "30px 0" }}>
        Word length: <b>{wordLength}</b>
      </h1>

      <Slider
        value={wordLength}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
        onChange={(e) => {
          e.target.value > 0 && setWordLength(e.target.value);
        }}
      />

      {/* <form
        style={{ display: "flex", flexWrap: "wrap", gap: 20, margin: "30px 0" }}
      >
        {ans.map((char, idx) => (
          <input
            maxLength={1}
            style={{
              width: 70,
              height: 70,
              textAlign: "center",
              border: "none",
              outline: "none",
              boxShadow: "0px 0px 3px #333",
              fontSize: 40,
            }}
            label=" "
            key={idx}
            value={char}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              inputChar(chars, idx);

              //Focus next input
              const form = e.target.form;
              if (form.elements[idx + 1]) {
                form.elements[idx + 1].focus();
              }
              e.preventDefault();
            }}
          />
        ))}
      </form> */}
      <RenderList />
    </Container>
  );
}
