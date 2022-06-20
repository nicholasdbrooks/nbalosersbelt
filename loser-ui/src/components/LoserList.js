import React from 'react';
import Loser from './Loser';

function LoserList({ losers }) {
    return (
        <table id='losersTable'>
            <thead>
                <tr>
                    <th>Loser</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Next</th>
                </tr>
            </thead>
            <tbody>
                {losers.map((loser, i) => <Loser loser={loser}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default LoserList;