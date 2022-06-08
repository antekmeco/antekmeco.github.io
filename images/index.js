function openFullscreen() {
    video = document.getElementById('czingczong');
    document.getElementById("czingczong").style.display = "flex";
    document.getElementById("czingczong").play();
    document.getElementById("czingczong").requestFullscreen();
    video.addEventListener('ended', function () {
        console.log("zajebiscie");
        window.location.href = 'http://127.0.0.1:5555/';
    })
}
