const image = document.querySelector('.Home-image img');

image.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    image.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

image.addEventListener('mouseleave', () => {
    image.style.transform =
        'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
});
function chooseWhatsApp() {
    const choice = confirm("Open WhatsApp App?\n\nPress OK for App\nPress Cancel for WhatsApp Website");

    if (choice) {
        window.location.href = "whatsapp://send?phone=254115676204";
    } else {
        window.open("https://wa.me/254115676204", "_blank");
    }
}
    function chooseWhatsApp() {
      const choice=prompt(
        "How would you like to contact me?\n\n" +
        "1 - Whatsapp App\n" +
        "2 - Whatsapp Website"
      );
      if(choice ==="1") {
        window.location.href = 
        "whatsapp://send?phone=0115676204"
      }
      if(choice ==="2") {
        window.open("https://wa.me/0115676204", "_blank")
      }
    }