import React from "react";
import { Accordion } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutPage() {
    return (
        <div className="page">
            <h2>What is this? Where am I? What's going on here?</h2>
            <br />
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header className="accordionheader">What is the Loser's Belt?</Accordion.Header>
                        <Accordion.Body className="accordionbody">The Loser's Belt is a concept that was conceived by college football fans. The team that lost the first ever CFB game was awarded the Loser's Belt, and had
                    to keep the belt until they beat a team, at which point the belt is transferred to that team. We have applied this concept to the NBA. Starting from the first 
                    BAA game in 1946 up until today, the NBA Loser's Belt tracks the progression of the belt throughout the years and allows you to breakdown the path of the belt
                    and see season-by-season belt statistics.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2><br />Rules of the Belt</h2>
            <Accordion defaultActiveKey='0' className="accord">
                <Accordion.Item eventKey='1'>
                    <Accordion.Header className="accordionheader">Rule 1: Teams must be in the NBA to have the belt  </Accordion.Header>
                    <Accordion.Body className="accordionbody">Pretty self explanatory. Otherwise, the Pittsburgh Ironmen would have held the belt since 1947, and this site
                        would be much less interesting.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="accordionheader">Rule 2: Defunct belt holder? Back up the timeline we go  </Accordion.Header>
                    <Accordion.Body className="accordionbody">If the belt holder is no longer in the league, that team keeps the belt until the start of the next season. At that point, the belt is passed back along the
                        timeline to the next team who still exists. For example, the Pittsburgh Ironmen, who became defunct following
                        the 1946-1947 season, kept the belt until the start of the 1947-1948 season. The Ironmen received the belt from the Detroit Falcons. 
                        But the Falcons also ceased to exist following the season. So we go
                        back up the timeline to the team that gave the belt to the Falcons, the Providence Steamrollers, who did play in the 1947-1948 season.  Therefore, the belt
                        is given to the Providence Steamrollers to start the 1947-1948 season.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="accordionheader">Rule 3: It only matters who ends the day with the belt</Accordion.Header>
                    <Accordion.Body className="accordionbody">Like boxing championship belts, it doesn't matter who starts the day with the belt; only who ends the day with the belt. For example, if the Blazers
                        receive the belt on January 1, and give it to the Pacers on January 2, the Blazers held the belt for 1 day: January 1. The Pacers belt reign begins
                        on January 2.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='accordionheader'>Rule 4: Offseason days count towards the previous season's total</Accordion.Header>
                    <Accordion.Body className="accordionbody">Ah yes, the offseason. The time that all basketball fans hate (but also kinda love, thanks free agency!). How do we deal with the offseason?
                        If a team is unfortunate enough to end the season with the belt, they keep the belt until the start of the next season. The days that they 
                        accumulate count towards their total days of the prior season. For example, the Detroit Pistons ended the 1993-1994 season with the belt.
                        All of the days until Opening Night of the 1994-1995 season counted towards the Pistons' '93-94 total. Does this artificially inflate some 
                        teams belt numbers? Absolutely. Do we care? Not even a little bit.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className="accordionheader">Rule 5: New year, new me</Accordion.Header>
                    <Accordion.Body className="accordionbody">When Opening Night is here, a new season has officially begun. Therefore, the belt holder's prior season reign has officially concluded. Thus, the 
                        belt must be passed from the belt holder to.... the belt holder. (What? Huh? Are you out of your mind!?!) Settle down young ones, let me explain.
                        If we look back on the '93-94 Pistons, they received the belt on 04/20/1994, and the next season began on 11/04/1994. That span was counted towards 
                        their '93-94 total. But since we are now in a new season, we must start counting fresh. Therefore, the '93-94 Pistons passed the belt to the '94-95 Pistons,
                        so their reign could begin anew on 11/04/1994. Essentially, think of every year as having all new teams. We must pass the belt from the previous season to 
                        the current season, and this passing of the belt takes place on every Opening Night.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header className="accordionheader">Rule 6: If the game matters, it counts</Accordion.Header>
                    <Accordion.Body className="accordionbody">We here at the NBA Loser's Belt believe that if the game matters, then any belt passes should count. Get out of here with that weak preseason BS, no 
                        thanks. Psh, no one cares that your summer league team won a game. Playoffs though? Ooh that's the good stuff right there. We count all playoff games
                        towards belt passes.</Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h2><br />Special Cases</h2>
            <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why do some teams gain and lose the belt on the same day?</Accordion.Header>
                    <Accordion.Body>When transitioning from one season to the next, the belt is passed to the current year's team on Opening Night (see Rule 5). If the belt holder wins on
                        Opening Night, then they both gained and lost the belt on the same day. This counts as holding the belt for 0 days.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>List of non-standard belt passes</Accordion.Header>
                    <Accordion.Body>1946-1947/1947-1948: Pittsburgh Ironmen -&#62; Detroit Falcons -&#62; Providence Steamrollers<br />
                        1948-1949/1949-1950: Providence Steamrollers -&#62; Fort Wayne Pistons<br />
                        1949-1950/1950-1951: Denver Nuggets -&#62; Minneapolis Lakers<br />
                        1950-1951/1951-1952: Washington Capitols -&#62; Fort Wayne Pistons<br />
                        1953-1954/1954-1955: Baltimore Bullets -&#62; Milwaukee Hawks (see The 1954-1955 Baltimore Bullets)<br />
                        1962-1963/1963-1964: Chicago Zephyrs -&#62; New York Knicks<br />
                        NOTE: Does not include any team name changes/relocations (e.g. Buffalo Braves became the San Diego Clippers in '77-78)
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>The 1954-1955 Baltimore Bullets</Accordion.Header>
                    <Accordion.Body>In the 1954-1955 season, the Baltimore Bullets played 14 games before disbanding. The official records do not include any games or statistics from the 
                        Bullets, so we ignore them in the '54-55 season as well. The Bullets held the belt following the '53-54 season, so the belt was given to the Milwaukee Hawks
                        to start the '54-55 season (the Hawks were the last team to hold the belt in the '53-54 season prior to the Bullets - see Rule 2).
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p><br /> <br/><br/></p>
        </div>
    )
}

export default AboutPage;