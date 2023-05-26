import "./SettingsLinks.css"

const SVG_ADD = (
    <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459.325 459.325"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193 c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181 c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267 V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282 C441.339,189.487,459.308,207.471,459.319,229.668z"></path> </g> </g></svg>
)

const SVG_CONFIRM = (
    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94 "></polygon> </g></svg>
)

const SVG_DELETE = (
    <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>    
)

export function SettingsLinks({ settings, setSettings}) {

    const handleFormChange = (index, e) => {
        const modifiedField = e.target.name

        setSettings(prevSettings => {
            const newLinks = prevSettings.links
            newLinks[index][modifiedField] = e.target.value

            return {...prevSettings, links: newLinks}
        })
    }

    return (
        <div className="settings-links-panel">
            <div className="settings-links-list">   
                {
                    settings.links.map((item, idx) => (
                        <div key={idx} className="settings-links-item">
                            <input 
                                className="settings-links-input-letter" 
                                type="text" 
                                value={item.letter} 
                                name="letter" 
                                placeholder="Letter" 
                                maxLength="1" 
                                onChange={(e) => handleFormChange(idx, e)}
                            />
                            <input 
                                className="settings-links-input-title" 
                                type="text" 
                                value={item.title} 
                                name="title" 
                                placeholder="Name" 
                                maxLength="15"
                                onChange={(e) => handleFormChange(idx, e)}
                            />
                            <input 
                                className="settings-links-input-link" 
                                type="text" 
                                value={item.link} 
                                name="link" 
                                placeholder="Link"
                                onChange={(e) => handleFormChange(idx, e)}
                            />
                            <div>{SVG_DELETE}</div>
                        </div>                            
                    ))
                }   
            </div>
            <div className="settings-links-controls">
                <button className="settings-links-add-button">
                    <div>{SVG_ADD}</div>
                    <p>Add link</p>
                </button>                
            </div>
        </div>
    )
}