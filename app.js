document.addEventListener("DOMContentLoaded", () => {

    const polaroidImg = document.getElementById("foto-polaroid");

    const fotos = [
        "img/6005858.jpg",
        "img/654862891cf083c1a8d2756816a97b2b.png",
        "img/WhatsApp.jpeg"
    ];

    let index = 0;

    polaroidImg.addEventListener("click", () => {
        polaroidImg.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % fotos.length;
            polaroidImg.src = fotos[index];
            polaroidImg.style.opacity = 1;
        }, 300);
    });

});
