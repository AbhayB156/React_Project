import { useState } from "react";
import ImgLiveTV from './ImgLive.jpg';
const LiveTV = () => {
    const Livelink = "https://www.jiocinema.com/sports/lsg-vs-pbks/3724428"
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
        <img src={ImgLiveTV} alt="Live" width="200" height="150" style={{ border: '1px solid black' }} />
        <p><button onClick={handleClick} style={{ backgroundColor: 'Red' }}>Go Live </button></p>
        <a href={Livelink}> Live </a></div>
     );
}
 
export default LiveTV;