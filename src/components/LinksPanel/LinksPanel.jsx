import { LinkItem } from "../LinkItem/LinkItem.jsx"
import "./LinksPanel.css"

export function LinksPanel({ links }) {
    return (
        <div className="linkspanel">
            <ul className="linkspanel-panel">
                {
                    links.map((elem, i) => {
                        return <LinkItem key={i} title={elem.title} link={elem.link}/>
                    })
                }
            </ul>
        </div>
    )
}