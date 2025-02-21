export default function Dice(props){
    const styles= {
        backgroundColor : props.isHeld ? "#59E391" : "white"
    }
    return(
            <button style={styles} 
                    onClick={props.hold}
                    aria-pressed={props.isHeld}
                    aria-label={`die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            >
                {props.value}</button>
    )
}