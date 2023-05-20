import "./SearchBar.css"

export function SearchBar({ setIsSearchVisible }) {
    const SEARCH_QUERY = "https://www.google.com/search?q="

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = Object.fromEntries(new FormData(event.target).entries())
        const search = formData.search

        event.target.reset()
        window.open(`${SEARCH_QUERY}${search}`, "_self")
    }

    const handleChange = (event) => {
        if (!event.target.value) {
            setIsSearchVisible(false)
        }
    }

    return (
        <div className="search-panel">
            <form className="search-form" onSubmit={handleSubmit} autoComplete="off">
                <input type="text" className="search-input" name="search" onChange={handleChange} autoFocus/>
            </form>
            <p className="search-note">press Enter to search</p>
        </div>
    )
}