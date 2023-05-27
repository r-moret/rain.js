import { useState } from "react"
import { SettingsLinks } from "../SettingsLinks/SettingsLinks.jsx"
import "./SettingsModal.css"

export function SettingsModal({ setIsOpen, settings, saveSettings }) {
    const [selectedTab, setSelectedTab] = useState(0)

    const closeModal = () => setIsOpen(false)

    const tabs = [
        {title: "Settings", component: <></>}, 
        {title: "Links", component: <SettingsLinks settings={settings} saveSettings={saveSettings} />}, 
        {title: "About", component: <></>}, 
    ]

    return (
        <>
            <div className="modal-background" onClick={closeModal}></div>
            <section className="modal">
                <nav className="settings-nav">
                    <ul>
                        {
                            tabs.map((tab, idx) => (
                                <li key={idx}>
                                    <div
                                        className={`settings-tab ${selectedTab == idx && "selected"}`}
                                        onClick={() => setSelectedTab(idx)}
                                    >
                                        {tab.title}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <article className="settings-article">
                    {tabs[selectedTab].component}
                </article>
            </section>
        </>
    )
}