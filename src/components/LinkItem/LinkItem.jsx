import "./LinkItem.css"

export function LinkItem({ letter, title, link }) {
    return (
        <li className="linkitem">
            <a href={link} className="linkitem-container">
                <span className="linkitem-letter">{letter}</span>
                <span className="linkitem-title">{title}</span>
            </a>
        </li>
    )
}