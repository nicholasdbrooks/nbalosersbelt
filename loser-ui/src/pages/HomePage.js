import React from "react";
import CurrentLoser from '../components/CurrentLoser';

function HomePage() {
    const { team, date } = CurrentLoser();
    return (
        <div className="page">
            <img src="https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png" alt="loserlogo" width='300' height='300'></img>
            <br></br>
            <br></br>
            <h3><br />{team}</h3>
            <p>have held the Loser's Belt since</p>
            <h3>{date}</h3>
        </div>
    );
}

export default HomePage;