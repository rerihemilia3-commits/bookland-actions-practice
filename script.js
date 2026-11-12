const bookButton = document.getElementById("bookButton");
const result = document.getElementById("result");

const books = [
    "Сегодня отличный день для новой истории!",
    "Попробуй открыть для себя новый жанр!",
    "Каждая книга — это новое путешествие!"
];

bookButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * books.length);

    result.textContent = books[randomIndex];
    result.style.color = "#405d47";
});

console.log("BookLand project is ready!");