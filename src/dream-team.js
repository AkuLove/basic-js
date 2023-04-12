const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result;
  let newArr = [];
  let chars = '';

  if (!Array.isArray(members)){ //Проверяем на массив
    return false
  }


  for (let i = 0; i < members.length; i++){ // Убираем пробелы
if (typeof members[i] == 'string'){
  newArr.push(members[i].trim());
}
  }


  if (newArr.length < 1) { // Проверка на пустые строки
    return false
  }


  for (let i = 0; i < newArr.length; i++){ // Создание строки из первых букв
    if (typeof newArr[i] === 'string'){
      chars += newArr[i][0]
    }
  }


  result = chars.split('').sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
  return result.join('').toUpperCase(); // Сортировка в алфавитном порядке, приведение к верхнему регистру
}

module.exports = {
  createDreamTeam
};
