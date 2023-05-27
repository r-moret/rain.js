import { useEffect, useState } from "react"
import { RainCanvas } from "../RainCanvas/RainCanvas.jsx"
import { LinksPanel } from "../LinksPanel/LinksPanel.jsx"
import { SearchBar } from "../SearchBar/SearchBar.jsx"
import { Hideable } from "../Hideable/Hideable.jsx"
import { SettingsIcon } from "../SettingsIcon/SettingsIcon.jsx"
import { SettingsModal } from "../SettingsModal/SettingsModal.jsx"
import { Datetime } from "../Datetime/Datetime.jsx"
import "./App.css"


export function App() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [settings, setSettings] = useState(() => {
        const settingsFromStorage = window.localStorage.getItem("settings")

        if (settingsFromStorage) {
            return JSON.parse(settingsFromStorage)
        }
        return {links: []}
    })

    const saveSettings = (settings) => {
        setSettings(settings)
        window.localStorage.setItem("settings", JSON.stringify(settings))
    }

    const handleKeyDown = () => {
        if (!isSettingsOpen) {
            setIsSearchVisible(true)
        }
    }

    const handleInput = (e) => {
        if (!e.target.value) {
            setIsSearchVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("input", handleInput)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("input", handleInput)
        }
    }, [isSettingsOpen]) // Each time the settings are opened/closed the listener functions 
                         // are readded with the new value of the state (visible/not visible)

    return (
        <>
            <RainCanvas />
            <main>
                <Hideable shown={isSearchVisible}>
                    <SearchBar />
                </Hideable>
                <Hideable shown={!isSearchVisible}>
                    <LinksPanel links={settings.links}/>
                </Hideable>
            </main>
            <footer>
                <div className="footer-left">
                    <Hideable shown={false}>...</Hideable>
                </div>
                <div className="footer-center">
                    <Hideable shown={true}>
                        <Datetime 
                            showDate={true}
                            timeFormat="12h"
                            showSeconds={false}
                        />
                    </Hideable>
                </div>
                <div className="footer-right">
                    <SettingsIcon setIsOpen={setIsSettingsOpen}/>
                </div>
            </footer>
            <Hideable shown={isSettingsOpen}>
                <SettingsModal 
                    setIsOpen={setIsSettingsOpen} 
                    settings={settings} 
                    saveSettings={saveSettings} 
                />
            </Hideable>
        </>
    )
}