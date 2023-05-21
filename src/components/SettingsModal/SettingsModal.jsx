import { useState } from "react"
import "./SettingsModal.css"

export function SettingsModal({ setIsOpen }) {
    const [selectedTab, setSelectedTab] = useState(0)

    const closeModal = () => setIsOpen(false)

    const tabs = ["Settings", "Links", "About"]

    return (
        <>
            <div className="modal-background" onClick={closeModal}></div>
            <section className="modal">
                <nav className="settings-nav">
                    <ul>
                        {
                            tabs.map((elem, idx) => (
                                <li key={idx}>
                                    <div
                                        className={`settings-tab ${selectedTab == idx && "selected"}`}
                                        onClick={() => setSelectedTab(idx)}
                                    >
                                        {elem}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <article></article>
            </section>
        </>
    )
}