import './App.css'
import LotteryGame from './LotteryGame'
import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // }

  // let winCondition = (ticket) => {
  //   //All numbers are equal to first number 111, 222, 333
  //   return ticket.every((num)=> num === ticket[0]);
  // }

  let winCondition = (ticket) => {
    //if first number is = to 0
    return ticket[0] === 0;
  }

  return (
    <>
     <LotteryGame n={3} winCondition={winCondition}/>
     
    </>
  )
}

export default App
