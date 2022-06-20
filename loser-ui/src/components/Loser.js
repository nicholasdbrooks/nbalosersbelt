import React from 'react';

function Loser({ loser }) {
    let form_start = new Date(loser.start);
    let form_end = new Date(loser.end);
    if (loser.end === '?') {
        form_end = new Date();
    }


    return (
        <tr id='loserRow'>
            <td>{loser.loser}</td>
            <td>{form_start.toDateString()}</td>
            <td>{form_end.toDateString()}</td>
            <td>{loser.next}</td>
        </tr>
    );
}

export default Loser;