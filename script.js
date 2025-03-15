document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    let activeTab = document.querySelector(".tab-content.active");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.classList.contains("active")) return; // Если уже активен, ничего не делаем

            // Убираем активный класс у всех кнопок
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Получаем новую вкладку
            const newTab = document.getElementById(this.dataset.tab);

            // Если текущая вкладка левее новой (новая правее активной)
            if (Array.from(contents).indexOf(newTab) > Array.from(contents).indexOf(activeTab)) {
                activeTab.classList.add("enter-left"); // Текущая уходит вправо
                newTab.classList.add("exit-right"); // Новая появляется слева
            } else {
                activeTab.classList.add("exit-left"); // Текущая уходит влево
                newTab.classList.add("enter-right"); // Новая появляется справа
            }

            // Через 500 мс обновляем активную вкладку
            setTimeout(() => {
                activeTab.classList.remove("active", "exit-right", "exit-left");
                newTab.classList.remove("enter-left", "enter-right");
                newTab.classList.add("active");
                activeTab = newTab; // Обновляем активную вкладку
            }, 500);
        });
    });
});
