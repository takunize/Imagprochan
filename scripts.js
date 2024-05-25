function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = src.split('/').pop(); // Optional: You can set a custom caption
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
