const heading = document.getElementById('heading')
const btn = document.getElementById('btn') 

btn.addEventListener('click', () => {
    const headingOne = 'The most affordable learning platform'
    const headingTwo = 'PW Skills'
    if (heading.textContent === headingOne) {
        heading.textContent = headingTwo
    } else {
        heading.textContent = headingOne
    }
})
