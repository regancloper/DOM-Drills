// initial setup of the list
let numitems = 0;
let list = document.createElement('ol');
let listitems = document.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.className = "h1";
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.className = "h2";
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");
    h3.className = "h3";
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");
    h4.className = "h4";
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");
    h5.className = "h5";
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");
    h6.className = "h6";
    h6.appendChild(h6Text);
    div.appendChild(h6);

    document.body.appendChild(div);

    // adds click listener to change heading colors
    let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(function (heading) {
        heading.addEventListener("dblclick", itemClicked);
    });

    // controls the addition of items to a list
    list.textContent = "List:";
    document.body.appendChild(list);
    let button = document.querySelector('button');
    button.addEventListener("click", addListItem);
    
});

// assigns random color to a heading that is clicked
function itemClicked(e) {
    let colors = ["magenta", "darkgoldenrod", "darkgrey", "mediumseagreen", "peachpuff", "navy", "brown", "salmon"];
    let randomcolor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.color = randomcolor;
}

// adds item to list
function addListItem() {
    let item = document.createElement('li');
    let itemtext = document.createTextNode("This is list item " + (numitems + 1));
    item.appendChild(itemtext);
    list.appendChild(item);
    document.body.appendChild(list);
    listitems = document.querySelectorAll('li');
    reviseListListener();
    numitems++;
}

// listens for a list item being clicked or double-clicked
function reviseListListener() {
    for (let i = 0; i < listitems.length; i++) {
        listitems[i].addEventListener("click", itemClicked);
        listitems[i].addEventListener("dblclick", removeItem);
    }
}

// removes a double-clicked item from the list
function removeItem(e) {
    e.target.remove();
    listitems = document.querySelectorAll('li');
}
