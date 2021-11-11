//menu items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "drinks",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "drinks",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "drinks",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

//class 'section-center' is the parent of all the elements
const sectionCenter = document.querySelector(".section-center");
const containerBtn = document.querySelector(".btn-container"); 

//loads items on the page
window.addEventListener("DOMContentLoaded", function() { //DOMContentLoaded is the event when the page loads 
  //dynamically display menu items
  displayMenuItems(menu); 

  //dynamically display buttons

  // //this specfic code returns all the categories of the items in menu, but we want to pull only unique ones. no repeats
  // const categories = menu.map(function(item) { //map() iterates over menu array, and 'categories' contain only the categories in the array
  //   return item.category; 
  // }); 
  //refer to displayButtons function for the unique version

  displayButtons();
 

});





function displayMenuItems(menuItems) {  //takes menu array as parameter
 //use let so we can work out of the code block
 let displayMenu = menuItems.map(function(item) { //the map method loops over array and accesses every item
  return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo">
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
          </article>`;
});
displayMenu = displayMenu.join(""); //this creates one giant string of the html code for all the menu items //we put a "" instead of empty bracket so we dont have the commas separating the items of the array
sectionCenter.innerHTML = displayMenu;  //add the code to our html, displays menu items on the page
};


function displayButtons() {
  const categories = menu.reduce(function(values, item) { //values is the array of unique categories, item is the menu item we're currently iterating over
    if(!values.includes(item.category)) {
      values.push(item.category); 
    }
    return values; 
  }, ["all"]); //we return an array with the initial string 'all' bc we have to manually include it since its not a category in menu
  
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}</button>`   //create html
  })
  .join("");
  containerBtn.innerHTML = categoryBtns;  //display button html

  const filterBtns = document.querySelectorAll(".filter-btn");  //we select the buttons only after creating and adding them on our page, otherwise they wont

    //filter items with buttons
  filterBtns.forEach(function(btn) {   //iterate through all the buttons
    btn.addEventListener("click", function(e) {  
      const category = e.currentTarget.dataset.id //currentTarget means the button we're currently iterating on
      const menuCategory = menu.filter(function(menuItem){
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu); 
      }
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
