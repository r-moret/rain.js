import { LinkItem } from "../LinkItem/LinkItem.jsx"
import "./LinksPanel.css"

export function LinksPanel() {

    const elements = [
        {letter: "d", title: "Discord"},
        {letter: "c", title: "ChatGPT"},
        {letter: "s", title: "Slack"},
        {letter: "y", title: "YouTube"},
        {letter: "a", title: "Calendar"},
        {letter: "g", title: "Gmail"},
        {letter: "o", title: "Outlook"},
        {letter: "t", title: "Twitch"},
        {letter: "n", title: "Settings"},
        {letter: "d", title: "Discord"},
        {letter: "c", title: "ChatGPT"},
        {letter: "s", title: "Slack"},
        {letter: "y", title: "YouTube"},
        {letter: "a", title: "Calendar"},
        {letter: "g", title: "Gmail"},
        {letter: "o", title: "Outlook"},
        {letter: "t", title: "Twitch"},
        {letter: "n", title: "Settings"},   
        {letter: "y", title: "YouTube"},
        {letter: "a", title: "Calendar"},
        {letter: "g", title: "Gmail"},
        {letter: "o", title: "Outlook"},
        {letter: "t", title: "Twitch"},
        {letter: "n", title: "Settings"},                
    ]

    return (
        <div className="linkspanel">
            <ul className="linkspanel-panel">
                {
                    elements.map((elem, i) => {
                        return <LinkItem key={i} letter={elem.letter} title={elem.title}/>
                    })
                }
            </ul>
        </div>
    )
}