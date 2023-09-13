// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function InfiniteTypingAnimation({ sentences }) {
  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    const currentText = isDeleting
      ? currentSentence.slice(0, charIndex)
      : currentSentence.slice(0, charIndex + 1);

    setDisplayText(currentText);

    const typingSpeed = isDeleting ? 50 : 100; // Adjust typing and deleting speeds here (in milliseconds)
    // eslint-disable-next-line no-unused-vars
    const pauseTime = isDeleting ? 500 : 1000; // Adjust the pause between sentences here (in milliseconds)

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentSentence.length - 1) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }

      setCharIndex((prevIndex) => (isDeleting ? prevIndex - 1 : prevIndex + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, sentenceIndex, sentences, isDeleting]);

  return (
    <div>
      <p>
        {displayText}{" "}
        <span
          className="cursor"
          style={{
            opacity: charIndex === sentences[sentenceIndex].length ? 0 : 1,
            height: "1.5em",
            margin: "-5px", // Adjust the height of the cursor as needed
          }}
        >
          &#124;
        </span>
      </p>
    </div>
  );
}

export default InfiniteTypingAnimation;
