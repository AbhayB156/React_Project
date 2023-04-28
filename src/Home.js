import { useState } from 'react';
import matchlist from './matchlist';
const Home = () => {
    const [matches, getRecent] = useState([
        { title: 'Matches Today', body: 'SRH vs CSK', venue: 'Chennai', matchno: 32},
        { title: 'Upcoming', body: 'MI vs RR', venue: 'Jaipur', matchno: 33},
        { title: 'Next Week', body: 'RCB vs DC', venue: 'Delhi', matchno: 34}
    ]);
    return ( 
        <div className="Home">
            <matchlist matches={matches} title="Let the Game Begin!"/>
        </div>
     );
}
 
export default Home;