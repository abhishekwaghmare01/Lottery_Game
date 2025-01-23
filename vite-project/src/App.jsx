import './App.css'
import LotteryGame from './LotteryGame'
import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
     <LotteryGame n={3} winCondition={winCondition}/>
     
    </>
  )
}

export default App
