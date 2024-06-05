
function Header (props)  {
    return(
        <div className="cricstats">
            <h1>{props.player}</h1>
            <h2>{props.country}</h2>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Header