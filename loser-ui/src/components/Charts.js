import * as dateMath from 'date-arithmetic';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Charting({teams, losers}) {
    
    let daysArray = [];
    let teamArray = [];
    let hexArray = [];

    for(const team of teams) {
        let total = 0;
        for (const loser of losers) {
            if (team.team === loser.loser) {
                const newstart = new Date(loser.start);
                const newend = new Date(loser.end);
                total += dateMath.diff(newstart, newend, "day", false);
            }
        }
        daysArray.push(total);
        teamArray.push(team.team);
        hexArray.push(team.hex);
    }

    const data = {
        labels: teamArray,
        datasets: [
            {
                label: "Days with the Belt",
                data: daysArray,
                backgroundColor: hexArray,
                borderColor: '#8d99ae',
                borderWidth: 1,
                borderSkipped: false,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Days as Belt Holder",
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
    };

    return (
    <div>
        <Bar data={data} width={'50%'} height={500}  options={options}/>
    </div>);
}

export default Charting;