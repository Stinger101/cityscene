
function scaleApp() {
    var t = window.innerWidth
        , e = window.innerHeight
        , i = 3200
        , s = 1190
        , n = i / s
        , a = t / e;
    var scaleFactor = a >= n ? .99 * e / s : .99 * t / i
    document.getElementsByClassName('main')[0].style.transform="scale("+scaleFactor+")"
    console.log(scaleFactor)
}
document.addEventListener("DOMContentLoaded",()=>{
    scaleApp();
    window.addEventListener("resize", scaleApp);
})