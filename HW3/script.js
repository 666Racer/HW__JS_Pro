/*Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).*/

//inputs
const productEl = document.querySelector(".input__product");
const reviewEl = document.querySelector(".input__review");
//buttons
const addBtnEl = document.querySelector(".button__add");
const delBtnEl = document.querySelector(".button__delete");
//reviews on page
const reviewsBox = document.querySelector(".reviews__box");
/*//id generator
function idGenerator() {
    let id = 0;
    return function () {
      id += 1;
      return id;
    };
}
  
const reviewId = createIdGenerator();
const reviewsIds = [];*/

//listeners
/*delBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.length > 0){
        localStorage.removeItem('');
        alert('Text from locale storage was deleted');
    }
    else {
        alert('Nothing to delete in local storage');
    }
});*/

addBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    //adding to local storage
    const productName = productEl.value;
    const productReview = reviewEl.value;
    if (productName !== '' && productReview !== '') {
        let reviews = JSON.parse(localStorage.getItem(productName));
        if (reviews === null) {
            reviews = [];
        }
        reviews.push(productReview);
        localStorage.setItem(productName, JSON.stringify(reviews));
    } else {
        alert('All fields should be filled');
    }
    productEl.value = "";
    reviewEl.value = "";
    //show on page
    const listProducts = document.querySelector(".reviews__box");

      for (let i = 0; i < localStorage.length; i++) {
        let productName = localStorage.key(i);
        let reviewSet = JSON.parse(localStorage.getItem(productName));

        //add productsList
        const divProduct = document.createElement("div");
        listProducts.insertAdjacentElement("beforeend", divProduct);
        divProduct.insertAdjacentHTML(
          "beforeend",
          `<h2>${productName}</h2>`
        );

        //add review block for a determined product
        const divReviews = document.createElement("div");
        divProduct.insertAdjacentElement("beforeend", divReviews);

        //filling reviews
        reviewSet.forEach((element) => {
          const newReview = document.createElement("div");
          divReviews.insertAdjacentElement("beforeend", newReview);

          const reviewText = document.createElement("span");
          reviewText.textContent = element;
          newReview.insertAdjacentElement("beforeend", reviewText);

          //add delete button
          newReview.insertAdjacentElement(
            "beforeend",
            deleteReviewBtn(reviewText, reviewSet, productName)
          );
        });
      }

      //function for delete button wuth listener
      function deleteReviewBtn(textReview, setReview, product) {
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete review";

        delBtn.addEventListener("click", () => {
          if (setReview.length > 1) {
            let indexItem = setReview.findIndex(
              (element) => element === textReview.textContent
            );
            setReview.splice(indexItem, 1);
            localStorage.setItem(product, JSON.stringify(setReview));
          } else {
            localStorage.removeItem(product);
            delBtn.parentElement.parentElement.parentElement.remove();
          }
          textReview.parentElement.remove();
          delBtn.remove();
        });
        return delBtn;
      }
    //showing on page
    /*let reviewtoAdd = localStorage.getItem(JSON.stringify(productName));
    if (reviewtoAdd != null) {
        reviewsBox.insertAdjacentHTML("beforeend",
        `<h2 class="reviews__box__product">${productName}</h2>
        <p class="reviews__box__review>${productReview}</p>
        <button class="button__delete">Delete review</button>
        `
        )
    } else {
        alert('Нечего загружать из локального хранилища');
    }*/
});

