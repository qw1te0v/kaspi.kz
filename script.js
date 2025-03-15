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
                activeTab.classList.add("exit-left"); // Текущая уходит вправо
                newTab.classList.add("enter-right"); // Новая появляется слева
            } else {
                activeTab.classList.add("exit-right"); // Текущая уходит влево
                newTab.classList.add("enter-left"); // Новая появляется справа
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

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 60) { // Если прокрутка больше 50px
            header.classList.add("shrink"); // Уменьшаем хедер
            header.style.backgroundColor = "#d29b5a"; // Меняем цвет фона
            header.style.color = "#fff"; // Меняем цвет текста
        } else {
            header.classList.remove("shrink"); // Возвращаем обратно
            header.style.backgroundColor = "#d29b5a"; // Возвращаем исходный цвет фона
            header.style.color = "#ffffff"; // Возвращаем исходный цвет текста
        }
    });
});

function changeActive(clickedItem) {
    // Убираем класс active1 у всех элементов
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active1'));

    // Добавляем класс active1 к нажатому элементу
    clickedItem.classList.add('active1');

    // Здесь можно добавить логику для изменения локации
    if (clickedItem.textContent.includes("Главная")) {
        window.location.href = "index.html"; // Замените на нужный URL
    }

}