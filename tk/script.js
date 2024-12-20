const cards = document.querySelectorAll(".card");
let currentZIndex = 1; // To stack cards correctly

cards.forEach((card) => {
  card.addEventListener("mousedown", (e) => {
    card.style.zIndex = ++currentZIndex; // Bring the card to the top
    const rect = card.getBoundingClientRect();

    let offsetX = e.clientX - rect.left; // Calculate the offset
    let offsetY = e.clientY - rect.top;

    const moveCard = (event) => {
      card.style.left = `${event.clientX - offsetX}px`;
      card.style.top = `${event.clientY - offsetY}px`;
    };

    const stopDragging = () => {
      document.removeEventListener("mousemove", moveCard);
      document.removeEventListener("mouseup", stopDragging);
    };

    document.addEventListener("mousemove", moveCard);
    document.addEventListener("mouseup", stopDragging);
  });
});
