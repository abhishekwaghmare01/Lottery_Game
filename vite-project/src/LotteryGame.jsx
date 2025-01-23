import { useState } from "react";
import "./Lottery.css";
import { generateRandomNumber, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";


export default function LotteryGame({n = 3, winCondition}){
    let [ticket, setTicket] = useState(generateRandomNumber(n));

    let isWinning = winCondition(ticket);

    let buyTicket = () =>{
        setTicket(generateRandomNumber(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
           <Ticket ticket={ticket}/>
           
           <Button action={buyTicket}/>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}