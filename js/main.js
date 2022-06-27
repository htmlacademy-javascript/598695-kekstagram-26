// // 1. Функция для проверки максимальной длины строки
// const checkLengthComment = function(comment, maxValue) {
//   const count = comment.length;
//   if (count <= maxValue) {
//     return true;
//   } else {
//     return false;
//   }
// };

// checkLengthComment('Хочу программировать на JS', 140);

// // 2. Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

const DESCRIPTION_ = [
  'Пальмы',
  'Облака',
  'Море',
  'Пляж',
  'Коктейли',
  'Гостиница',
  'Горы',
  'Вид из окна',
  'Шведский стол',
  'Бассейн',
  'Вид с террасы',
  'Конная прогулка',
  'Прогулка на катере',
  'Волны',
  'Соломенная шляпа',
  'Аквапарк',
  'Ресторан',
  'Вечерняя прогулка',
  'Лунный свет',
  'Шезлонг и я',
  'Рай',
  'Отдыхай как я',
  'Работай как мой муж',
  'Веселись как наш ребенок',
  'Жизнь прекрасна!',
];

const MESSAGE_ = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME_ = [
  'Константин',
  'Валентин',
  'Вениамин',
  'Драгомир',
  'Елисей',
  'Виталий',
];

// Генерация случайного числа
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного индекса
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Функция по созданию Сообщения
const createComment = () => ({
  id: getRandomPositiveInteger(1, 200),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_),
  name: getRandomArrayElement(NAME_),
}
);

// Создание массива фоток
const arrayPhotos = [];

// console.log(arrayPhotos);

// Функция по созданию объекта
const createPhoto = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from({length:getRandomPositiveInteger(1,10)},createComment),
});

for (let i = 1; i <= 25; i++) {
  arrayPhotos.push(createPhoto(i));
}
