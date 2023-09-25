'use strict';

const itemsList = document.querySelector('.items');
const items = document.querySelectorAll('.item');
console.log(items);
const propsLists = document.querySelectorAll('.props__list');
const ads = document.querySelector('.ads');
const propsItemsEs6 = document.querySelectorAll('.props__item_two');
const propsItemsJs = document.querySelectorAll('.props__item_four');
const propsItemsObj = document.getElementsByClassName('props__item_three');
const propsItemsAsync = document.getElementsByClassName('props__item_five');


items[4].before(items[0]);

propsItemsJs[2].after(propsItemsJs[5]);

propsLists[3].append(propsItemsObj[0]);
propsLists[3].append(propsItemsObj[1]);
propsLists[3].append(propsItemsObj[2]);
propsLists[3].append(propsItemsObj[3]);
propsLists[3].append(propsItemsObj[4]);
propsLists[3].append(propsItemsObj[5]);
propsLists[3].append(propsItemsObj[6]);

propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);
propsLists[4].append(propsItemsAsync[0]);

propsItemsEs6[7].after(propsItemsEs6[8]);
propsItemsEs6[8].after(propsItemsEs6[9]);

ads.remove();
