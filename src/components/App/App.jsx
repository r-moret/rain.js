import { useEffect, useState } from "react"
import { RainCanvas } from "../RainCanvas/RainCanvas.jsx"
import { LinksPanel } from "../LinksPanel/LinksPanel.jsx"
import { SearchBar } from "../SearchBar/SearchBar.jsx"
import "./App.css"

export function App() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const handleKeyDown = () => {
        setIsSearchVisible(true)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <>
            <RainCanvas />
            {isSearchVisible ? <SearchBar setIsSearchVisible={setIsSearchVisible}/> : <LinksPanel />}
        </>
    )
}