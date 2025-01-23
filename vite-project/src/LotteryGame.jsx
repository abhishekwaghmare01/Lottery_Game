import { useState } from "react";
import "./Lottery.css";
import { generateRandomNumber, sum } from "./helper";


export default function LotteryGame(){
    let [ticket, setTicket] = useState(generateRandomNumber(3));

    let isWinning = sum(ticket) === 15;

    let buyTicket = () =>{
        setTicket(generateRandomNumber(3));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Generate Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}