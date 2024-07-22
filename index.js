// 1

function addDelay() {
  return new Promise((resolve) => setTimeout(resolve, 300));
}

async function logWithDelay(text) {
  await addDelay();
  console.log(text);
}

async function logArrayInfo(array) {
  for (const item of array) {
    await logWithDelay(item);
  }

  // Исправил for each на for of так как он может работать с асинхронными функцими

  console.log("Done!");
}

logArrayInfo([1, 2, 3]);

/// 2

function createCats() {
  let cats = [];
  for (let i = 0; i < 10; i++) {
    let cat = function () {
      console.log(`My index is ${i}`);
    };
    cats.push(cat);
  }

  // Переписал while на for

  return cats;
}

let animals = createCats();
animals[5]();

// 3

const tree = {
  value: 3,
  children: [
    {
      value: 1,
      children: [],
    },
    {
      value: 4,
      children: [],
    },
    {
      value: 3,
      children: [
        {
          value: 8,
          children: [
            { value: 2, children: [] },
            { value: 5, children: [] },
          ],
        },
        { value: 0, children: [] },
      ],
    },
  ],
};

function sumValues(obj) {
  let sum = obj.value;

  for (const children of obj.children) {
    sum += sumValues(children);
  }

  return sum;
}

// функция с помощью рекурсии складывает значения всех value у всех веток children

let totalSum = sumValues(tree);

if (totalSum % 2 === 0) {
  alert("Сумма кратна 2");
}

console.log(totalSum);
