// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(number) {
  let value = number;
  function increment() {
    return ++value;
  }
  function decrement() {
    return --value;
  }
  function firstValue() {
    return number;
  }
  return { increment, decrement, firstValue };
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.firstValue());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(elem, neededClassName) {
  if (elem.classList.contains(neededClassName)) {
    return elem;
  }
  for (let i = 0; i < elem.target.length; i++) {
    const element = findElementByClass(elem.target[i], neededClassName);
    if (element) {
      return element;
    }
  }
}
const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
