import { useEffect, useState } from "react"
import { RainCanvas } from "../RainCanvas/RainCanvas.jsx"
import { LinksPanel } from "../LinksPanel/LinksPanel.jsx"
import { SearchBar } from "../SearchBar/SearchBar.jsx"
import { Hideable } from "../Hideable/Hideable.jsx"
import { SettingsIcon } from "../SettingsIcon/SettingsIcon.jsx"
import { SettingsModal } from "../SettingsModal/SettingsModal.jsx"
import "./App.css"

import CONFIG from "../../../config.json"

export function App() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const handleKeyDown = () => {
        setIsSearchVisible(true)
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
    }, [])

    return (
        <>
            <RainCanvas />
            <main>
                <Hideable shown={isSearchVisible}>\
                    <SearchBar />
                </Hideable>
                <Hideable shown={!isSearchVisible}>
                    <LinksPanel links={CONFIG.links}/>
                </Hideable>
            </main>
            <footer>
                <SettingsIcon setIsOpen={setIsSettingsOpen}/>
            </footer>
            <Hideable shown={isSettingsOpen}><SettingsModal setIsOpen={setIsSettingsOpen}/></Hideable>
        </>
    )
}