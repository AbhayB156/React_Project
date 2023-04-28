const matchlist = (prop) => {
    const matches = props.matches;
    const title = props.title;
    // console.log(matches.props);
    return ( 
        <div>{matches.map((match) => (
            <div className="match-preview" key={match.matchno}>
                <h3>{match.title}</h3>
                <p>{ match.body }</p>
                <p>Location: { match.venue }</p>
                </div>
        ))}</div>
     );
}
 
export default matchlist;