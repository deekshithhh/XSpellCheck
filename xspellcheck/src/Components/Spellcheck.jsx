import React, { useState, useEffect } from "react";

export default function Xspellcheck() {
  const [text, setText] = useState("");
  const [suggestedword, setSuggestedword] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const handlechange = (e) => {
    const newtext = e.target.value;
    setText(newtext);
    // console.log(newtext, "New");
    const words = newtext.split(" ");
    // console.log(words, "Words");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      //   console.log(correctedWord, word, "correctedword");
      return correctedWord || word;
    });
    const correctedText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index],
    );
    setSuggestedword(firstCorrection);
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        placeholder="Enter text..."
        onChange={handlechange}
      ></textarea>
      {suggestedword && <div>Did you mean: {suggestedword}?</div>}
    </div>
  );
}
