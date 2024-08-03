/*Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.*/

const initialData = [
    {
    product: "Apple iPhone 13",
    reviews: [
        {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
        },
        {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
        },
        ],
    },
    {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
        {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
        },
    ],
    },
    {
    product: "Sony PlayStation 5",
    reviews: [
        {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
        },
    ],
    },
];

const reviewSendInputEl = document.querySelector(".reviews__send__input");
const reviewSendBtnEl = document.querySelector(".reviews__send__button");
const reviewsBox = document.querySelector(".reviews__box");

function loadInitialData(reviews) {
  reviews.map((el) => {
    const reviewsArr = el.reviews;
    reviewsArr.map((e) => {
      reviewsBox.insertAdjacentHTML("beforeend", `<li>${e.text}</li>`);
    });
  });
}

loadInitialData(initialData);

reviewSendBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const inputReview = reviewSendInputEl.value;
  if (inputReview.length < 10 || inputReview.length > 500) {
    reviewSendInputEl.value = "";
    throw new Error(
      alert("Length of a review must be between 10 and 500 symbols.")
    );
  } else {
    reviewsBox.insertAdjacentHTML("beforeend", `<li>${inputReview}</li>`);
  }
  reviewSendInputEl.value = "";
});