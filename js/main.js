// 1. Функция для проверки максимальной длины строки
const checkLengthComment = function(comment, maxValue) {
  const count = comment.length;
  if (count <= maxValue) {
    return true;
  } else {
    return false;
  }
};

checkLengthComment('Хочу программировать на JS', 140);

// 2. Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

function getRandomInt(min, max) {
  if (max <= min) {
    return false;
  }

  if (min < 0) {
    return false;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(7,15);
