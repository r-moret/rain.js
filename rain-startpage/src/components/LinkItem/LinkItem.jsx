import "./LinkItem.css"

export function LinkItem({ letter, title }) {
    return (
        <li className="linkitem">
            <div className="linkitem-container">
                <span className="linkitem-letter">{letter}</span>
                <span className="linkitem-title">{title}</span>
            </div>
        </li>
    )
}