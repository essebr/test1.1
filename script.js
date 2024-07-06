const header=document.querySelector("header");
const scroll_btn=document.querySelector("#scroll");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 10);
    scroll_btn.classList.toggle("active",window.scrollY > 50);
});

// // awarded
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://hapi-books.p.rapidapi.com/top/2021');
// xhr.setRequestHeader('x-rapidapi-key', 'fec6413180mshfcbe065ba7cfe85p1e3d61jsn1647ff627775');
// xhr.setRequestHeader('x-rapidapi-host', 'hapi-books.p.rapidapi.com');

// xhr.send(data);
// // info
// const data2 = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://hapi-books.p.rapidapi.com/book/56597885');
// xhr.setRequestHeader('x-rapidapi-key', 'fec6413180mshfcbe065ba7cfe85p1e3d61jsn1647ff627775');
// xhr.setRequestHeader('x-rapidapi-host', 'hapi-books.p.rapidapi.com');

// xhr.send(data);