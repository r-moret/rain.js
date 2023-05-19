import "./SearchBar.css"

export function SearchBar() {
    const SEARCH_QUERY = "https://www.google.com/search?q="

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = Object.fromEntries(new FormData(event.target).entries())
        const search = formData.search

        event.target.reset()
        window.open(`${SEARCH_QUERY}${search}`, "_self")
    }

    return (
        <div className="search-panel">
            <form className="search-form" onSubmit={handleSubmit} autoComplete="off">
                <input type="text" className="search-input" name="search"/>
            </form>
            <p className="search-note">press Enter to search</p>
        </div>
    )
}