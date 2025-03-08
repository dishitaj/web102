import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const flashcards = [
  { question: "What is Gilderoy Lokhart's favorite color?", answer: "Lilac" },
  { question: "Match the four species of dragons that they battle in the Triwizard Tournament", answer: "Swedish Short Snout, Common Welsh Green, Chinese Fireball, Hungarian Horntail"},
  { question: "What planet do Ronan and Bane remark is bright that night in the Forbidden Forest?", answer: "Mars" },
  { question: "What is Fudge's middle name?", answer: "Oswald" },
  { question: "How many knuts to a Sickle? How many Sickles to a Galleon? ", answer: "29 Knuts to a Sickle. 17 Sickles to a Galleon." },
  { question: "What is Dumbledore's full name?", answer: "Albus Percival Wulfric Brian Dumbledore" },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const prevCard = () => {
    setShowAnswer(false);
    const prevIndex = currentCardIndex - 1;
    if (prevIndex < 0) {
      setCurrentCardIndex(flashcards.length - 1);
      return;
    }     
    setCurrentCardIndex(prevIndex)
  }
  const nextCard = () => {
    setShowAnswer(false);
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="app">
      <h1>Ordinary Wizarding Levels (Harry Potter Flashcards)</h1>
      <h4>How well do you know Harry Potter? Test your knowledge here!</h4>
      <h5>Number of cards: {flashcards.length}</h5>
      <Card 
        question={flashcards[currentCardIndex].question} 
        answer={flashcards[currentCardIndex].answer} 
        showAnswer={showAnswer} 
        setShowAnswer={setShowAnswer}
      />
      <button className='prev-button' onClick={prevCard}>Previous Card</button>
      <button className="next-button" onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default App;