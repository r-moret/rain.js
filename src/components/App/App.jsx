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
            {isSearchVisible ? <SearchBar /> : <LinksPanel />}
        </>
    )
}