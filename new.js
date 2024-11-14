// Отправка нового комментария на сервер
function addComment() {
    const commentText = document.getElementById("commentInput").value.trim();
    if (!commentText) return;

    fetch("https://your-server.com/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: commentText })
    })
    .then(response => response.json())
    .then(() => {
        displayComments();  // Обновить комментарии на странице
        document.getElementById("commentInput").value = "";  // Очистить поле ввода
    })
    .catch(error => console.error("Ошибка при добавлении комментария:", error));
}

// Получение комментариев с сервера и отображение
function displayComments() {
    fetch("https://your-server.com/api/comments")
    .then(response => response.json())
    .then(comments => {
        const commentsContainer = document.getElementById("commentsContainer");
        commentsContainer.innerHTML = "";
        comments.forEach(comment => {
            const commentCard = document.createElement("div");
            commentCard.className = "comment-card";
            commentCard.textContent = comment.text;
            commentsContainer.appendChild(commentCard);
        });
    })
    .catch(error => console.error("Ошибка при загрузке комментариев:", error));
}

window.onload = displayComments;  // Загружаем комментарии при загрузке страницы
