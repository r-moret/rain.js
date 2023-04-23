const ctx = document.getElementById("canvas").getContext("2d")

const PIXEL_SIZE = 10
const FALL_SPEED = 50
const COLORS = {
    grey: [
        "#111111","#121212","#131313","#141414","#151515",
        "#171717","#191919","#1b1b1b","#1e1e1e","#222222",
    ]
}

const spawnDrop = (xPixel, yPixel, size, color, ctx) => {
    const DROP_LENGTH = 10
    const x = xPixel * size
    const y = yPixel * size

    for (let tide = 0; tide < DROP_LENGTH; tide++) {
        ctx.fillStyle = color[tide]
        // The x and y mark the coords of the lightest pixel of the drop
        ctx.fillRect(
            x, 
            y + (size * (tide - DROP_LENGTH + 1)), 
            size, 
            size,
        )
    }
}

const spawnRain = (dropLimit, dropSize, fallSpeed, ctx) => {
    const nColumns = Math.floor(ctx.canvas.width / dropSize)
    let drops = Array.from(Array(nColumns), () => ({
        altitude: 0,
        end: dropLimit,
        color: COLORS.grey,
    }))

    setInterval(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        for (let col = 0; col < nColumns; col++) {
            let drop = drops[col]

            if (drop.altitude > drop.end) {
                drop.altitude = 0
                // New end limit
            }

            spawnDrop(col, drop.altitude, dropSize, drop.color, ctx)
            drop.altitude++
        }
    }, fallSpeed)
}

spawnRain(30, PIXEL_SIZE, FALL_SPEED, ctx)