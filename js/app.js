// SCROLL EVENT
const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    console.log(scrollContainer)
})