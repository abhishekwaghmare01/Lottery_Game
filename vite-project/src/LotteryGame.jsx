import { useState } from "react";
import "./Lottery.css";
import { genticket } from "./helper";

export default function LotteryGame(){
    let [ticket, setTicket] = useState(genticket(3));

    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    )
}