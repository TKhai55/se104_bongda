export function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100
    var curTime = 0
    var ScrollCounter = 0
    const y = window.scrollY
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, ScrollCounter, eAmt, start, y)
        curTime += time / 100
        ScrollCounter ++
    }

    window.scrollTo(0, y)
}

function SHS_B (e, sc, eAmt, start, y) {
    e.scrollLeft = eAmt * sc + start
}