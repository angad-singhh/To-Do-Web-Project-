let myArray = JSON.parse(localStorage.getItem('to-do-list')) || [];

function addToList() {
    const inputElement = document.querySelector('.input-value');
    const inputElementValue = inputElement.value;

    const inputDate = document.querySelector('.date-values');
    const inputDateValue = inputDate.value;

    myArray.push({
        name: inputElementValue,
        date: inputDateValue
    });

    inputElement.value = '';
    inputDate.value = '';

    localStorage.setItem('to-do-list', JSON.stringify(myArray));

    addListItems();
}

function addListItems() {
    let values = '';
    for (let i = 0; i < myArray.length; i++) {
        const listItem = `
                    <p>${myArray[i].name}</p>
                    <p id="date-id">${myArray[i].date}</p>
                    <button onClick=" 
                        myArray.splice(${i},1);
                        addListItems();
                    ">Delete</button>`;
        values += listItem;
    }
    document.querySelector('.list-values').innerHTML = `${values}`;
}

// Call addListItems initially to load any existing items from local storage
addListItems();