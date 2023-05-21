import "./Settings.css"

const SVG_ICON = (
    <svg 
        className="settings-icon" 
        fill="#000000" 
        viewBox="-8.5 0 32 32" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g 
            id="SVGRepo_bgCarrier" 
            stroke-width="0">
        </g>
        <g 
            id="SVGRepo_tracerCarrier" 
            stroke-linecap="round" 
            stroke-linejoin="round">
        </g>
        <g id="SVGRepo_iconCarrier">
            <title>options</title>
            <path d="M5.88 15h-5.040c-0.48 0-0.84-0.36-0.84-0.84v-5.040c0-0.48 0.36-0.84 0.84-0.84h5.040c0.48 0 0.84 0.36 0.84 0.84v5.040c0 0.44-0.4 0.84-0.84 0.84zM1.68 13.32h3.36v-3.36h-3.36v3.36zM14.6 15h-5.040c-0.48 0-0.84-0.36-0.84-0.84v-5.040c0-0.48 0.36-0.84 0.84-0.84h5.040c0.48 0 0.84 0.36 0.84 0.84v5.040c0 0.44-0.4 0.84-0.84 0.84zM10.4 13.32h3.36v-3.36h-3.36c0 0 0 3.36 0 3.36zM5.88 23.72h-5.040c-0.48 0-0.84-0.36-0.84-0.84v-5.040c0-0.48 0.36-0.84 0.84-0.84h5.040c0.48 0 0.84 0.36 0.84 0.84v5.040c0 0.48-0.4 0.84-0.84 0.84zM1.68 22.040h3.36v-3.36h-3.36v3.36zM14.6 23.72h-5.040c-0.48 0-0.84-0.36-0.84-0.84v-5.040c0-0.48 0.36-0.84 0.84-0.84h5.040c0.48 0 0.84 0.36 0.84 0.84v5.040c0 0.48-0.4 0.84-0.84 0.84zM10.4 22.040h3.36v-3.36h-3.36c0 0 0 3.36 0 3.36z">
            </path>
        </g>
    </svg>      
)

export function Settings() {

    const handleClick = () => {
        alert("Clicked!") // WIP: Modal with configuration options
    }

    return (
        <button className="settings-button" onClick={handleClick}>
            {SVG_ICON}
        </button>
    )
}