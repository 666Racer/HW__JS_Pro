/*Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)*/

const musicCollection = [{
        title: 'Sgt. Pepper’s Lonely Hearts Club Band',
        artist: 'The Beatles',
        year: 1967
    },
    {
        title: 'Exile on Main St',
        artist: 'The Rolling Stones',
        year: 1972
    },
    {
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        year: 1973
    }
];


musicCollection[Symbol.iterator] = function() {
    return {
        current: 0, //this.from,
        last: this.length, //this.to,
        next() {
            return this.current < this.last ? {
                done: false, //done - аналог флага, когда завершать
                value: musicCollection[this.current++]
            } : { done: true };
        }
    };
};

for (let album of musicCollection) {
    // console.log(album);
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}