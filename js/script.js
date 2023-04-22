//  select and cache the <main>element in a variable named mainEl.

const mainEl = document.querySelector('main');

// assign a string that uses the CSS var() function 

mainEl.style.backgroundColor = 'var(--main-bg)';


// set the contect of mainEl to <h1> to sei rocks 
mainEl.innerHTML = "SEI ROCKS!";

// setting class to mainEl
mainEl.classList.add('flex-ctr')

