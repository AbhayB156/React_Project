import { useState } from "react";
import ImgLiveTV from './ImgLive.jpg';
const LiveTV = () => {
    const Livelink = "https://www.jiocinema.com/sports/lsg-vs-pbks/3724428"
    const [timeleft, setTime] = useState('Time to Live');
    const [matches, getRecent] = useState([
        { title: 'Matches Today', body: 'SRH vs CSK', venue: 'Chennai', matchno: 32},
        { title: 'Upcoming', body: 'MI vs RR', venue: 'Jaipur', matchno: 33},
        { title: 'Next Week', body: 'RCB vs DC', venue: 'Delhi', matchno: 34}
    ]);
    const date = new Date();
    const handleClick = () => {
        console.log('play the live');
        setTime((19-date.getHours()) + ":" + (50-date.getMinutes()) + ':' + (60-date.getSeconds()));
    }
    return ( 
        <div className="livetv">
             
        <h2>Live Today</h2>
        <p>Time Left: {timeleft}</p>
        {/* <img src={ImgLiveTV} alt="Live" width="600" height="450" style={{ border: '1px solid black' }} /> */}
        <p><button onClick={handleClick} style={{ backgroundColor: 'Red' }}>Go Live </button></p>
        <a href={Livelink}> Live </a>
        {matches.map((match) => (
                <div className="match-preview" key={match.matchno}>
                    <h3>{match.title}</h3>
                    <p>{ match.body }</p>
                    <p>Location: { match.venue }</p>
                    </div>
            ))}</div>
        
     );
}
 
export default LiveTV;