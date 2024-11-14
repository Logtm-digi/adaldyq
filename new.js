// Функция для добавления комментария
function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentsContainer = document.getElementById("commentsContainer");

    // Получаем текст комментария
    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    // Создаём объект комментария
    const comment = {
        text: commentText,
        likes: 0,
        replies: []
    };

    // Добавляем комментарий в localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    storedComments.push(comment);
    localStorage.setItem('comments', JSON.stringify(storedComments));

    // Выводим комментарий
    displayComments();

    // Очищаем поле ввода
    commentInput.value = "";
}

// Функция для отображения комментариев
function displayComments() {
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = '';  // Очищаем контейнер перед рендером

    // Получаем комментарии из localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    storedComments.forEach((comment, index) => {
        // Создаём элементы для комментария
        const commentCard = document.createElement("div");
        commentCard.className = "comment-card";

        // Контент комментария
        const commentContent = document.createElement("p");
        commentContent.textContent = comment.text;

        // Действия с комментарием (лайк, ответ)
        const commentActions = document.createElement("div");
        commentActions.className = "comment-actions";

        // Лайк кнопка
        const likeButton = document.createElement("button");
        likeButton.textContent = `Лайк (${comment.likes})`;
        likeButton.onclick = () => {
            comment.likes++;
            storedComments[index] = comment;  // Обновляем комментарий в массиве
            localStorage.setItem('comments', JSON.stringify(storedComments));  // Обновляем сохранённые данные
            displayComments();  // Перерисовываем комментарии
        };

        // Кнопка для ответа
        const replyButton = document.createElement("button");
        replyButton.textContent = "Жауап беру";
        replyButton.onclick = () => {
            const replyInput = document.createElement("textarea");
            replyInput.placeholder = "Жауап жазыңыз...";

            const submitReplyButton = document.createElement("button");
            submitReplyButton.textContent = "Жіберу";
            
            submitReplyButton.onclick = () => {
                const replyText = replyInput.value.trim();
                if (replyText) {
                    // Добавляем ответ к текущему комментарию
                    comment.replies.push(replyText);
                    storedComments[index] = comment;  // Обновляем комментарий в массиве
                    localStorage.setItem('comments', JSON.stringify(storedComments));  // Сохраняем изменения
                    displayComments();  // Перерисовываем комментарии
                }
            };

            commentCard.appendChild(replyInput);
            commentCard.appendChild(submitReplyButton);
        };

        // Кнопка удаления
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.onclick = () => {
            // Удаляем комментарий
            storedComments.splice(index, 1);
            localStorage.setItem('comments', JSON.stringify(storedComments));  // Обновляем localStorage
            displayComments();  // Перерисовываем комментарии
        };

        // Добавляем действия к комментарию
        commentActions.appendChild(likeButton);
        commentActions.appendChild(replyButton);
        commentActions.appendChild(deleteButton);  // Добавляем кнопку удаления
        commentCard.appendChild(commentContent);
        commentCard.appendChild(commentActions);

        // Добавляем комментарий в контейнер
        commentsContainer.appendChild(commentCard);

        // Отображаем ответы, если они есть
        comment.replies.forEach(reply => {
            const replyContent = document.createElement("p");
            replyContent.textContent = reply;
            replyContent.style.marginLeft = "20px";
            replyContent.style.fontSize = "14px";
            commentCard.appendChild(replyContent);
        });
    });
}

// Вызываем displayComments при загрузке страницы, чтобы отобразить сохранённые комментарии
window.onload = displayComments;

// Предположим, что это ваш секретный пароль
const adminPassword = "Ulpan";  // Замените на свой пароль

// Функция для очистки комментариев
function clearComments() {
    const passwordInput = document.getElementById("adminPassword").value.trim();

    // Проверка пароля
    if (passwordInput === adminPassword) {
        // Если пароль правильный, удаляем комментарии
        localStorage.removeItem('comments');
        const commentsContainer = document.getElementById("commentsContainer");
        commentsContainer.innerHTML = '';  // Удаляем все комментарии на странице
        alert("Комментарии были успешно удалены!");
    } else {
        // Если пароль неправильный, показываем сообщение об ошибке
        alert("Неверный пароль. Вы не можете удалить комментарии.");
    }
}
// Функция для отображения комментариев
function displayComments() {
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = '';  // Очищаем контейнер перед рендером

    // Получаем комментарии из localStorage
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    storedComments.forEach((comment, index) => {
        // Создаём элементы для комментария
        const commentCard = document.createElement("div");
        commentCard.className = "comment-card";

        // Контент комментария
        const commentContent = document.createElement("p");
        commentContent.textContent = comment.text;

        // Действия с комментарием (лайк, ответ)
        const commentActions = document.createElement("div");
        commentActions.className = "comment-actions";

        // Лайк кнопка
        const likeButton = document.createElement("button");
        likeButton.textContent = `Лайк (${comment.likes})`;
        likeButton.onclick = () => {
            comment.likes++;
            storedComments[index] = comment;  // Обновляем комментарий в массиве
            localStorage.setItem('comments', JSON.stringify(storedComments));  // Обновляем сохранённые данные
            displayComments();  // Перерисовываем комментарии
        };

        // Кнопка для ответа
        const replyButton = document.createElement("button");
        replyButton.textContent = "Жауап беру";
        replyButton.onclick = () => {
            const replyInput = document.createElement("textarea");
            replyInput.placeholder = "Жауап жазыңыз...";

            const submitReplyButton = document.createElement("button");
            submitReplyButton.textContent = "Жіберу";
            
            submitReplyButton.onclick = () => {
                const replyText = replyInput.value.trim();
                if (replyText) {
                    // Добавляем ответ к текущему комментарию
                    comment.replies.push(replyText);
                    storedComments[index] = comment;  // Обновляем комментарий в массиве
                    localStorage.setItem('comments', JSON.stringify(storedComments));  // Сохраняем изменения
                    displayComments();  // Перерисовываем комментарии
                }
            };

            commentCard.appendChild(replyInput);
            commentCard.appendChild(submitReplyButton);
        };

        // Кнопка удаления
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.onclick = () => {
            const passwordInput = prompt("Введите пароль для удаления комментария:");

            if (passwordInput === adminPassword) {
                // Удаляем комментарий, если введён правильный пароль
                storedComments.splice(index, 1);
                localStorage.setItem('comments', JSON.stringify(storedComments));  // Обновляем localStorage
                displayComments();  // Перерисовываем комментарии
                alert("Комментарий был удален.");
            } else {
                alert("Неверный пароль. Удаление не выполнено.");
            }
        };

        // Добавляем действия к комментарию
        commentActions.appendChild(likeButton);
        commentActions.appendChild(replyButton);
        commentActions.appendChild(deleteButton);  // Добавляем кнопку удаления
        commentCard.appendChild(commentContent);
        commentCard.appendChild(commentActions);

        // Добавляем комментарий в контейнер
        commentsContainer.appendChild(commentCard);

        // Отображаем ответы, если они есть
        comment.replies.forEach(reply => {
            const replyContent = document.createElement("p");
            replyContent.textContent = reply;
            replyContent.style.marginLeft = "20px";
            replyContent.style.fontSize = "14px";
            commentCard.appendChild(replyContent);
        });
    });
}
