import React, { useState } from "react";
import choices from "../assets/data";


const Main = () => {
    const [result, setResult] = useState({
        compResult: 0,
        playerResult: 0,
    });
    const [winnerMessage, setWinnerMessage] = useState("");
    const [playerChoice, setPlayerChoice] = useState("");
    const [compChoice, setCompChoice] = useState("");

    const handleClick = (playerName, playerSelection) => {
        const compRandomIndex = Math.floor(Math.random() * choices.length);
        const compSelection = choices[compRandomIndex];

        setPlayerChoice(playerName);
        setCompChoice(compSelection.name);

        if (compSelection.name === playerName) {
            setWinnerMessage("Draw");
        } else if (compSelection.beats === playerName) {
            setWinnerMessage("Computer wins");
            setResult(prevResult => ({
                ...prevResult,
                compResult: prevResult.compResult + 1
            }));
        } else {
            setWinnerMessage("Player wins");
            setResult(prevResult => ({
                ...prevResult,
                playerResult: prevResult.playerResult + 1
            }));
        }
    };

    return ( 
        <main>
            <div className="rps-buttons">
                {choices.map((choice, index) => (
                    <button key={index} onClick={() => handleClick(choice.name, choice.beats)}>
                        {choice.name}
                    </button>
                ))}
            </div>
            {winnerMessage && <h2>{winnerMessage}</h2>}
            <div className="choices">
                <h2>Player's Choice: {playerChoice === "" ? "..." : playerChoice}</h2>
                <h2>Computer's Choice: {compChoice  === "" ? "..." : compChoice }</h2>
            </div>
            <div className="results">
                <h2>Player: {result.playerResult}</h2>
                <h2>Computer: {result.compResult}</h2>
            </div>
        </main>
    );
};

export default Main;
