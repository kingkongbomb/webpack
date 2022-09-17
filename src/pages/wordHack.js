import { Container, Input } from "@mui/material";
import { useEffect, useState } from "react";

export default function WordHack() {
  const [allWords, setAllWords] = useState([]);
  const [wordMap, setWordMap] = useState({});
  const [renderWords, setRenderWords] = useState([]);
  const [ans, setAns] = useState([]);
  const [charMap, setCharMap] = useState({});
  const [helpWords, setHelpWords] = useState("");

  const initWordList = async () => {
    const res = await fetch("./resources/enWords10k.txt");
    const data = await res.text();
    const dataArr = data.split("\r\n");
    setAllWords(dataArr);
    grpWordsByLength(dataArr);
  };

  useEffect(() => {
    initWordList();
  }, []);

  const grpWordsByLength = (words) => {
    const map = {};

    for (let x = 0; x < words.length; x++) {
      const word = words[x];
      const length = word.length;
      if (map[length] === undefined) {
        map[length] = [word];
      } else {
        map[length].push(word);
      }
    }

    setWordMap(map);
  };

  const getWords = (e) => {
    const length = parseInt(e.target.value) || 0;
    setRenderWords(wordMap[length] || []);
    setAns(Array(parseInt(length || 0)).fill(""));
  };

  const inputChar = (val, idx) => {
    let tempCharMap = { ...charMap };
    tempCharMap[idx] = val;
    setCharMap(tempCharMap);
    let tempAns = [...ans];
    tempAns[idx] = val;
    setAns(tempAns);
  };

  // Pass in an array of words
  // Returns an array of words that are valid
  // Check validity - there should not be a word NOT found in helpWords
  function filterHelper(words, helpWords) {
    const result = words.filter((word) => {
      let match = true;
      word.split("").forEach((char) => {
        if (helpWords.includes(char) === false) {
          match = false;
        }
      });
      return match;
    });

    return result;
  }

  const RenderList = () => {
    return filterHelper(renderWords, helpWords)
      .filter((word) => {
        let toShow = true;

        Object.keys(charMap).forEach((key) => {
          if (charMap[key] !== word[key] && charMap[key] !== "") {
            toShow = false;
          }
        });
        return toShow;
      })
      .map((word) => <div key={word}>{word}</div>);
  };

  return (
    <Container>
      <Input
        placeholder="Possible Words"
        value={helpWords}
        onChange={(e) => {
          setCharMap({}); //Clear charMap
          setHelpWords(e.target.value.toLowerCase());
        }}
      />
      <Input
        placeholder="Word Length"
        onChange={(e) => {
          setCharMap({}); //Clear charMap
          getWords(e);
        }}
      />
      <div style={{ display: "flex", gap: 20 }}>
        {ans.map((char, idx) => (
          <Input
            key={idx}
            value={char}
            onChange={(e) => inputChar(e.target.value, idx)}
          />
        ))}
      </div>
      <RenderList />
    </Container>
  );
}
