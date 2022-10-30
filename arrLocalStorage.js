let arr = [];
// seleção de elementos

const inputText = document.querySelector('#valor');
const addBtn = document.querySelectorAll('button')[0];
const showBtn = document.querySelectorAll('button')[1];
const clearBtn = document.querySelectorAll('button')[2];
const valores = document.querySelector('#valores');


// functions

function addItem(e) {
  e.preventDefault()
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.meuArr);
  }

  const inputValue = inputText.value;
  if (inputValue) {
    arr.push(inputValue);
    inputText.value = '';
    localStorage.meuArr = JSON.stringify(arr);
    console.log(localStorage.meuArr)
  }

}

function showItems(e) {
  valores.innerHTML = '';
  e.preventDefault()
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.meuArr);
    console.log(arr);

    arr.map((item, i) => {
      const div = document.createElement('div');
      div.innerHTML = `valor ${i} = ${item}`;
      valores.appendChild(div);
    })
  }
}

function clearItems(e) {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr);
}

// events

addBtn.addEventListener('click', addItem);
showBtn.addEventListener('click', showItems);
clearBtn.addEventListener('click', clearItems)