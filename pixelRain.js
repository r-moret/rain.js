const ctx = document.getElementById("canvas").getContext("2d")

const COLORS = {
    grey: [
        "#111111","#121212","#131313","#141414","#151515",
        "#171717","#191919","#1b1b1b","#1e1e1e","#222222",
    ]
}

const RECT_SIZE = 10

const spawnDrop = (x, y, size, color, ctx) => {
    const DROP_LENGTH = 10
    for (let tide = 0; tide < DROP_LENGTH; tide++) {
        ctx.fillStyle = color[tide]
        ctx.fillRect(x, y + (size * tide), size, size)
    }
}

spawnDrop(0, 40, RECT_SIZE, COLORS.grey, ctx)