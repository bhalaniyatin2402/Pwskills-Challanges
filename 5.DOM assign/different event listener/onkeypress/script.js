const showKey = document.getElementById('showkey')
const input = document.getElementById('input')

input.addEventListener('keypress', (e) => {
    showKey.innerText = 'you have just pressed  ' + e.key
    showKey.style.color = 'pink'
})