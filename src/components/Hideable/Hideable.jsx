/* Component useful to abstract conditional rendering and smooth disappearance 
 * animation of the actual component we want to make hideable.
 */
export function Hideable({ children, shown }) {
    const style = {
        opacity: shown ? "1" : "0",
        transition: "all 0.4s",
    }

    return (
        <span style={style}>
            {shown && children}
        </span>
    )
}