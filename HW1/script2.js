/*Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.*/

const cooks = new Map();
cooks
    .set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

const orderList = new Map();
const orderForCooks = new Map();

function newOrder(clientName, order) {
    return orderList.set({ client: clientName },
        order.split(",")
    );
}

newOrder("Алексей", "Пицца - Пепперони, Десерт - Тирамису");
newOrder("Мария", "Суши - Калифорния, Пицца - Маргарита");
newOrder("Ирина", "Десерт - Чизкейк");

function giveOrderToKitchen() {
    const orders = orderList.values();
    for (const order of orders) {
        for (const dish of order) {
            if (dish.includes("Пицца")) {
                orderForCooks.set("Виктор", dish);
            } else if (dish.includes("Суши")) {
                orderForCooks.set("Ольга", dish);
            } else if (dish.includes("Десерт"))
                orderForCooks.set("Дмитрий", dish);
        }
        return orderList, orderForCooks;
    }
}

console.log(giveOrderToKitchen());