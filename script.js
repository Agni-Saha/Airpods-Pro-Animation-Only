/*
https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/
*/

const html = document.documentElement,
    canvas = document.querySelector(".airpods_scroll"),
    context = canvas.getContext('2d'),
    frameCount = 140 //origanilly should be 148

const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

//preloading the images to make even smoother animation
const preloadImages = () => {
    for (let i = 0; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(1)
    }
}

canvas.height = 770
canvas.width = 1158

const img = new Image()
img.src = currentFrame(1)

//first time loading
img.onload = function () {
    context.drawImage(img, 0, 0)
}

//updating image when we scroll
const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0)
}

//event happening when we scroll, basically use the updateImage()
window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop //how much have we scrolled from top
    const maxScroll = html.scrollHeight - window.innerHeight //how much can we scroll
    const scrollFractions = scrollTop / maxScroll
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFractions * frameCount))

    requestAnimationFrame(() => updateImage(frameIndex + 1))
})

preloadImages()