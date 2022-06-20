import React, { useState } from "react";
import SeasonSelector from "../components/SeasonSelector";
import LoserList from "../components/LoserList";
import Charting from "../components/Charts";
import CurrentLoser from "../components/CurrentLoser";

function BreakdownPage () {

    const { team, date } = CurrentLoser();
    const curseason = '2021-2022';
    const [losers, setLosers] = useState([]);
    const [year, setYear] = useState('0');
    const [teams, setTeams] = useState([]);

    const loadLosers = async (season) => {
        const response = await fetch(`/losers/${season}`);
        const losers = await response.json();
        setLosers(losers);
        if(season === curseason) {
            const curteam = {loser: team, start: date, end: new Date(), next: '?'};
            setLosers(oldLosers => [...oldLosers, curteam]);
        }
    };

    const loadTeams = async (season) => {
        const response = await fetch(`/losers/teams/${season}`);
        const teams = await response.json();
        setTeams(teams);
    };

    const toggleDisplay = () => {
        const disp = document.getElementById('hiddenEls');
        disp.style.visibility = 'visible';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleDisplay();
        loadLosers(year);
        loadTeams(year);
    };

    const handleChange = (e) => {
        setYear(e.target.value);
    };
    
    const bnoo = losers;

    return (
        <div className="page">
            <h4>Select a season to see the path of the belt, plus some stats!</h4>
            <br />
            <form id="seasonSelector" onSubmit={handleSubmit}>
                <select value={year} onChange={handleChange}>
                    <SeasonSelector />
                </select>
                <input type="submit" />
            </form>
            <br></br>
            <div id="hiddenEls">
                <LoserList losers={losers}></LoserList>
                <br></br>
                <div id="barChart" style={{width: '100%', height: 500}}>
                    <Charting teams={teams} losers={bnoo} ></Charting>
                </div>
                <br></br>
            </div>
            
        </div>
    );
}

export default BreakdownPage;