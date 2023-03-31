//№1
//const categories = document.getElementById('categories');
//console.log(`У списку ${categories.children.length} категорії`);
//
//const items = categories.children;
//
//for (const item of items) {
//   console.log(item.firstElementChild.textContent);
//   console.log(item.lastElementChild.children.length);
//}

//№2
//const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
//];
//
//const ingredient = ingredients.map((El) => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = El
//   return itemEl
//})
//
//console.log(ingredient);
//
//const listEl = document.querySelector('#ingredients');
//console.log(listEl);
//
//listEl.append(...ingredient);

//№3
//const images = [
//   {
//      url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'White and Black Long Fur Cat',
//   },
//   {
//      url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//      url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Group of Horses Running',
//   },
//];
//
//const gallery = document.querySelector('#gallery');
//const imagesEl = images.map((image) => {
//   return `<li><img src="${image.url}" alt="${image.alt}"></li>`
//}).join('');
//
//gallery.insertAdjacentHTML('afterbegin', imagesEl);