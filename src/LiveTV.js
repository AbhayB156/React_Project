import { useState } from "react";

const LiveTV = () => {
    const Livelink = "https://www.jiocinema.com/sports/kkr-vs-rcb/3716146"
    const [timeleft, setTime] = useState('Time to Live');
    const date = new Date();
    const handleClick = () => {
        console.log('play the live');
        setTime((19-date.getHours()) + ":" + (50-date.getMinutes()) + ':' + (60-date.getSeconds()));
    }
    return ( 
        <div className="livetv"> 
        <h2>Live Today</h2>
        <p>Time Left: {timeleft}</p>
        <p><button onClick={handleClick}>Go Live </button></p>
        <a href={Livelink}> Live </a></div>
     );
}
 
export default LiveTV;