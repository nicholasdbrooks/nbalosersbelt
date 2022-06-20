import 'dotenv/config';
import * as loser from './loser_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());


/**
 * Retrieve the losers corresponding to the season provided in the URL.
 */
app.get('/losers/:season', (req, res) => {
    const season = req.params.season;
    loser.findLosersBySeason(season)
        .then(losers => {
            if (losers !== null) {
                res.json(losers);
            } else {
                res.status(404).json({Error: 'Invalid Season'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request Failed'});
        });
});

app.get('/losers/teams/:season', (req, res) => {
    const season = req.params.season;
    loser.teamsBySeason(season)
        .then(teams => {
            if (teams !== null) {
                res.json(teams);
            } else {
                res.status(404).json({Error: 'Invalid Input'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request Failed'});
        });
});

app.get('/hexcodes', (req, res) => {
    loser.teamHexCodes()
        .then(teams => {
            if (teams !== null) {
                res.json(teams);
            } else {
                res.status(404).json({Error: 'Invalid Input'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request Failed'});
        });
});

app.get('/currentteam', (req, res) => {
    loser.currentTeam()
        .then(team => {
            if (team !== null) {
                res.json(team);
            } else {
                res.status(404).json({Error: 'Invalid Input'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request Failed'});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});