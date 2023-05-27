import { useEffect, useState } from "react"
import "./Datetime.css"

export function Datetime({ showDate, timeFormat, showSeconds }) {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const dateText = date.toLocaleDateString("en-US", {
        weekday: "long",  
        month: "short", 
        day: "numeric",
    })
    const timeText = date.toLocaleTimeString("en-us", {
        hour12: timeFormat == "12h",
        hour: "numeric",
        minute: "numeric",
        second: showSeconds ? "2-digit" : undefined,
    })

    let datetimeText = `${timeText}`
    if (showDate) {
        datetimeText = `${timeText} - ${dateText}`
    }

    return (
        <div className="datetime-container">
            <p className="datetime-text">{datetimeText}</p>
        </div>
    )
}