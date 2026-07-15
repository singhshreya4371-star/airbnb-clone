import { useState } from "react";

function Mood() {
  const [mood, setMood] = useState("😊 Happy");

  return (
    <div>
      <h2>Current Mood: {mood}</h2>

      <button onClick={() => setMood("😎 Excited")}>
        Change Mood
      </button>
    </div>
  );
}

export default Mood;