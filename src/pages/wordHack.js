import { Container, Input } from "@mui/material";
import { useEffect, useState } from "react";

export default function WordHack() {
  const [allWords, setAllWords] = useState([]);
  const [wordMap, setWordMap] = useState({});
  const [renderWords, setRenderWords] = useState([]);
  const [ans, setAns] = useState([]);

  const fetchWordList = async () => {
    const res = await fetch("/resources/enWords10k.txt");
    const data = await res.text();
    setAllWords(data.split("\n"));
  };

  useEffect(async () => {
    const res = await fetch("/resources/enWords10k.txt");
    const data = await res.text();
    setAllWords(data.split("\n"));
    grpWordsByLength(data.split("\n"));
  }, []);

  const grpWordsByLength = (words) => {
    const map = {};
    // allWords.forEach((word) => {
    //   const length = word.length;
    //   if (map[length] === undefined) {
    //     map[length] = [word];
    //   } else {
    //     map[length].push(word);
    //   }
    // });
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
    const length = e.target.value;
    setRenderWords(wordMap[length] || []);
    setAns(Array(parseInt(length || 0)).fill(""));
  };

  const [charMap, setCharMap] = useState({});

  const inputChar = (val, idx) => {
    let tempCharMap = { ...charMap };
    tempCharMap[idx] = val;
    setCharMap(tempCharMap);
    let tempAns = [...ans];
    tempAns[idx] = val;
    setAns(tempAns);
  };

  return (
    <Container>
      <Input placeholder="Word Length" onChange={getWords} />
      <div style={{ display: "flex", gap: 20 }}>
        {ans.map((char, idx) => (
          <Input
            value={char}
            onChange={(e) => inputChar(e.target.value, idx)}
          />
        ))}
      </div>
      {renderWords
        .filter((word) => {
          let toShow = true;
          Object.keys(charMap).forEach((key) => {;
            if (charMap[key] !== word[key]) {
              toShow = false;
            }
          });
          return toShow;
        })
        .map((word) => (
          <div key={word}>{word}</div>
        ))}
    </Container>
  );
}
