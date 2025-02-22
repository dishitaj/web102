import './App.css';
import Calendar from './components/Calendar'
import Event from './components/Event'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago</h1>
      <h2>Welcome to Chicago team! Check out this calendar to get know the city and see all the sights during your stay</h2>
      <Calendar />
      <Event />
      
    </div>
  )
}

export default App