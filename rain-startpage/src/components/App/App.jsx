import { RainCanvas } from "../RainCanvas/RainCanvas.jsx"
import { LinksPanel } from "../LinksPanel/LinksPanel.jsx"
import { SearchBar } from "../SearchBar/SearchBar.jsx"
import "./App.css"

export function App() {
    return (
        <>
            <RainCanvas />
            {/* <LinksPanel /> */}
            <SearchBar />
        </>
    )
}