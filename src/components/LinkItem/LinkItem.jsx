import "./LinkItem.css"

export function LinkItem({ title, link }) {
    const firstLetter = title.charAt(0).toLowerCase()
    
    return (
        <li className="linkitem">
            <a href={link} className="linkitem-container">
                <span className="linkitem-letter">{firstLetter}</span>
                <span className="linkitem-title">{title}</span>
            </a>
        </li>
    )
}