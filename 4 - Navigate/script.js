// Task 1
const section = document.querySelector('section')
console.log(section.children[3].lastElementChild) 
const a = section.children[3].lastElementChild
const b = section.children[3].firstElementChild
b.insertAdjacentElement("beforebegin", a)

// // Task 2
const secondsection = document.querySelector('main section:nth-of-type(2)')
const thirdsection = document.querySelector('main section:nth-of-type(3)')
const h2fromsecondsection = secondsection.querySelector('h2')
const h2fromthirdsection = thirdsection.querySelector('h2')
secondsection.prepend(h2fromthirdsection)
thirdsection.prepend(h2fromsecondsection)

// Task 3
const lastsection = document.querySelector('section:last-of-type');
lastsection.remove();