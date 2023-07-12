// DOMContentLoaded will load all the DOM components into Javascript file
// Using Unnamed-Arrow function as listener because there are no arguments required
// addEventListener() function listens to any event that occurs in entire DOM
document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    let selectedElement = document.getElementById('elementSelect');
    let selectedColor = document.getElementById('elementColor');
    let userText = document.getElementById('elementText');
    let addButton = document.getElementById('addButton');
    let newElement;

    addButton.addEventListener('click', () => {
        newElement = document.createElement(selectedElement.value);
        newElement.textContent = userText.value;
        newElement.style.color = selectedColor.value;
        let editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.addEventListener('click', () => {
            userText.value = newElement.textContent;
            selectedColor.value = rgbToHex(newElement.style.color);
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            container.removeChild(newElement);
            container.removeChild(editButton);
            container.removeChild(deleteButton);
        });

        container.appendChild(newElement);
        container.appendChild(editButton);
        container.appendChild(deleteButton);
    });


    // Function to convert RGB color value to hexadecimal format
    function rgbToHex(rgbColor) {
        // Split the RGB color value into separate red, green, and blue values
        const rgbValues = rgbColor.substring(4, rgbColor.length - 1).split(',');

        // Convert each RGB value to hexadecimal and concatenate them
        return '#' + rgbValues
            .map((value) => parseInt(value).toString(16).padStart(2, '0'))
            .join('');
    }

});