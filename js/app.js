"use strict";

let people = [
    {                                              
        nafn: 'Ari',                               
        skor: 54,
    },
    {
        nafn: 'Kristinn',
        skor: 71,
    },
    {
        nafn: 'Hannes',
        skor: 12,
    },
    {
        nafn: 'Paul',
        skor: 42,
    },
    {
        nafn: 'Andri',
        skor: 66,
    }
];

let rows = [];
let min = document.getElementById('value-min');
let max = document.getElementById('value-max');
let list = document.getElementById('container');

function makeRows() {
    people.forEach(function(person) {
        let row = document.createElement('li');
        let rowNafn = document.createElement('ul');
        let rowSkor = document.createElement('ul');

        rowNafn.textContent = person.nafn;
        rowSkor.textContent = person.skor;
        row.appendChild(rowNafn); 
        row.appendChild(rowSkor);
        rows.push({ 
            person: person,
            element: row
        });
    });
}

function appendRows() {
    let ul = document.createElement('ul');
    rows.forEach(function(row) {
        ul.appendChild(row.element);
    });
    list.appendChild(ul);
}

function update(min, max) {
    rows.forEach(function(row) {
        if (row.person.skor >= min && row.person.skor <= max) {
        row.element.removeAttribute("hidden");
        } else {
        row.element.setAttribute("hidden", "");
        }
    });
}

var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [20, 60],
    handles: 2,
    connect: true,
    range: {
        'min': 0,
        'max': 100
    },
    format: {
        to: function(value){return Math.floor(value);},
        from: function(value){return value;}
    },
    margin: 10
});

slider.noUiSlider.on("update", function() {
    const values = slider.noUiSlider.get();
    min.value = values[0];
    max.value = values[1];
    update(min.value, max.value);
});

makeRows();
appendRows();
update(min.value, max.value);