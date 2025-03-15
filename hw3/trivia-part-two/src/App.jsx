import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const flashcards = [
  { question: "What house at Hogwarts does Harry belong to?", answer: "Gryffindor" },
  { question: "What is the name of Harry Potter's pet owl?", answer: "Hedwig" },
  { question: "Who is the Half-Blood Prince?", answer: "Severus Snape" },
  { question: "What position does Harry play on his Quidditch team?", answer: "Seeker" },
  { question: "What is the spell to disarm an opponent?", answer: "Expelliarmus" },
  { question: "What is Lord Voldemort's real name?", answer: "Tom Riddle" },
  { question: "Who is the headmaster of Hogwarts when Harry first arrives?", answer: "Albus Dumbledore" },
  { question: "What plant does Neville Longbottom use to help in the Battle of Hogwarts?", answer: "Mandrake" }
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
    setUserInput("");
    setFeedback("");
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
    setUserInput("");
    setFeedback("");
  };

  const checkAnswer = () => {
    if (userInput.trim().toLowerCase() === flashcards[currentCardIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="app">
      <h1>Ordinary Wizarding Levels (Harry Potter Flashcards)</h1>
      <h4>How well do you know Harry Potter? Test your knowledge here!</h4>
      <Card 
        question={flashcards[currentCardIndex].question} 
        answer={flashcards[currentCardIndex].answer} 
        showAnswer={showAnswer} 
        setShowAnswer={setShowAnswer}
      />
      <input 
        type="text" 
        className="answer-input" 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Enter your answer..." 
      />
      <button className="submit-button" onClick={checkAnswer}>Submit</button>
      <p className="feedback">{feedback}</p>
      <div className="button-container">
        <button className="prev-button" onClick={prevCard}>Previous</button>
        <button className="next-button" onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
