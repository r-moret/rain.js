import { LinkItem } from "../LinkItem/LinkItem.jsx"
import "./LinksPanel.css"

export function LinksPanel() {

    const elements = [
        {letter: "d", title: "Discord", link: "https://discord.com/"},
        {letter: "c", title: "ChatGPT", link: "https://chat.openai.com/"},
        {letter: "s", title: "Slack", link: "#"},
        {letter: "y", title: "YouTube", link: "#"},
        {letter: "a", title: "Calendar", link: "#"},
        {letter: "g", title: "Gmail", link: "#"},
        {letter: "o", title: "Outlook", link: "#"},
        {letter: "t", title: "Twitch", link: "#"},
        {letter: "n", title: "Settings", link: "#"},
        {letter: "d", title: "Discord", link: "#"},
        {letter: "c", title: "ChatGPT", link: "#"},
        {letter: "s", title: "Slack", link: "#"},
        {letter: "y", title: "YouTube", link: "#"},
        {letter: "a", title: "Calendar", link: "#"},
        {letter: "g", title: "Gmail", link: "#"},
        {letter: "o", title: "Outlook", link: "#"},
        {letter: "t", title: "Twitch", link: "#"},
        {letter: "n", title: "Settings", link: "#"},
        {letter: "y", title: "YouTube", link: "#"},
        {letter: "a", title: "Calendar", link: "#"},
        {letter: "g", title: "Gmail", link: "#"},
        {letter: "o", title: "Outlook", link: "#"},
        {letter: "t", title: "Twitch", link: "#"},
        {letter: "n", title: "Settings", link: "#"},
    ]

    return (
        <div className="linkspanel">
            <ul className="linkspanel-panel">
                {
                    elements.map((elem, i) => {
                        return <LinkItem key={i} letter={elem.letter} title={elem.title} link={elem.link}/>
                    })
                }
            </ul>
        </div>
    )
}