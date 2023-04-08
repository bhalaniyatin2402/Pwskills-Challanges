const heading = document.getElementById('heading')
const btn = document.getElementById('btn') 

btn.addEventListener('click', () => {
    if (heading.textContent === 'The most affordable learning platform') {
        heading.textContent = 'PW Skills'
    } else {
        heading.textContent = 'The most affordable learning platform'
    }
})
