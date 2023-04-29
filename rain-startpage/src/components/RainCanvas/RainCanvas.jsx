import { useEffect, useRef } from "react"
import { randomNormal, randomPick } from "./random"
import "./RainCanvas.css"

// The number of colors have to match the length of the drop
const DROP_LENGTH = 10
const COLORS = {
    grey: [
        "#111111","#121212","#131313","#141414","#151515",
        "#171717","#191919","#1b1b1b","#1e1e1e","#222222",
    ],
    yellow: [
        "#222015","#332f1a","#443e1e","#554c22","#665b26",
        "#776a2b","#88792f","#998833","#bba63c","#ffe14d",        
    ],
    cyan: [
        "#152121","#193030","#1c4040","#204f4f","#245f5f",
        "#286e6e","#2c7e7e","#2f8d8d","#37acac","#46eaea",
    ],
    magenta: [
        "#201521","#2e1930","#3d1c40","#4b204f","#5a245f",
        "#68286e","#772c7e","#852f8d","#a237ac","#dc46ea",
        
    ]
}


export function RainCanvas({ width, height, pixelSize = 10, fallSpeed = 65, fadeSpeed = 2 } = {}) {
    const canvasRef = useRef(null)

    const spawnDrop = (xPixel, yPixel, size, color, ctx) => {
        const x = xPixel * size
        const y = yPixel * size
    
        for (let tide = 0; tide < DROP_LENGTH; tide++) {
            ctx.fillStyle = color[tide]
            ctx.fillRect(x, y + (size * (tide - DROP_LENGTH + 1)), size, size)
            // x and y mark the coords of the lightest pixel of the drop
        }
    }
    
    const spanwWave = (wave, fadeSpeed, ctx) => {
        for (let col = 0; col < wave.drops.length; col++) {
            const drop = wave.drops[col]
            const restingTides = drop.end - drop.altitude
    
            if (drop.render) {
                if (restingTides < fadeSpeed) {
                    const fadeFactor = 1 / (fadeSpeed + 1)
                    ctx.globalAlpha = fadeFactor * (1 + restingTides)
                }
                spawnDrop(col, drop.altitude, drop.size, drop.color, ctx)
                ctx.globalAlpha = 1
            }
    
            drop.altitude++        
            if (drop.altitude > drop.end) {
                const altitude = wave.generateAltitude()
    
                drop.altitude = altitude > 0 ? 0 : altitude
                drop.end = wave.generateEnd()
                drop.render = randomPick(wave.quantity)
            }            
        }
    }
    
    const spawnRain = ({wavesGenerators, fadeSpeed, fallSpeed, pixelSize, ctx}) => {
        const nColumns = Math.floor(ctx.canvas.width / pixelSize)
    
        const waves = Array.from(wavesGenerators, elem => ({
            generateAltitude: elem.generateAltitude,
            generateEnd: elem.generateEnd,
            quantity: elem.quantity,
            drops: Array.from(Array(nColumns), () => ({
                altitude: elem.generateAltitude(),
                end: elem.generateEnd(),
                color: elem.color,
                size: pixelSize,
                render: randomPick(elem.quantity),
            }))
        }))
    
        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
            for (let waveIdx = 0; waveIdx < waves.length; waveIdx++) {
                spanwWave(waves[waveIdx], fadeSpeed, ctx)
            }
        }, fallSpeed)
    }

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d")

        spawnRain({
            wavesGenerators: [
                {
                    generateAltitude: () => randomNormal({mean: 0, std: 4}),
                    generateEnd: () => randomNormal({mean: 25, std: 4}),
                    quantity: 0.25,
                    color: COLORS.grey,
                },
                {
                    generateAltitude: () => randomNormal({mean: 0, std: 1}),
                    generateEnd: () => randomNormal({mean: 5, std: 3}),
                    quantity: 1,
                    color: COLORS.grey,
                },
                {
                    generateAltitude: () => randomNormal({mean: 0, std: 4}),
                    generateEnd: () => randomNormal({mean: 35, std: 4}),
                    quantity: 0.0007,
                    color: COLORS.yellow,
                },    
                {
                    generateAltitude: () => randomNormal({mean: 0, std: 4}),
                    generateEnd: () => randomNormal({mean: 35, std: 4}),
                    quantity: 0.0007,
                    color: COLORS.cyan,
                },
                {
                    generateAltitude: () => randomNormal({mean: 0, std: 4}),
                    generateEnd: () => randomNormal({mean: 35, std: 4}),
                    quantity: 0.0007,
                    color: COLORS.magenta,
                },            
            ],
            fadeSpeed: fadeSpeed,
            fallSpeed: fallSpeed,
            pixelSize: pixelSize,
            ctx: ctx,
        })

        return () => ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }, [])

    return (
        <canvas ref={canvasRef} className="rain-canvas" width={width} height={height}></canvas>
    )
}