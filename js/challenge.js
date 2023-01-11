

// Grab the counter, get the value of the counter object

let countNum = document.querySelector('#counter')
const countNumParsed = parseInt(countNum)


// Add function to the counter, use setInterval
// See the timer increment every second once the page has loaded.

let counter = 0
const isPaused = false
let counterBox = setInterval(timer, 1000);

function timer() {
    counter++
    let numToString = counter.toString()
    countNum.innerHTML = numToString
}


// Manually increment and decrement the counter using the plus and minus buttons.

function incrementCounter() {
    let plus = document.querySelector("#plus")
    plus.addEventListener('click', function () {
        counter++;
        countNum.innerHTML = counter;
})
}

incrementCounter()


function decrementCounter() {
    let minus = document.querySelector('#minus')
    minus.addEventListener('click', () => {
        counter--;
        countNum.innerHTML = counter;
    })
}

decrementCounter()



// Pause button

function pauseButton () {
    let pauseButton = document.querySelector('#pause')
    pauseButton.addEventListener('click', (e) => {
        if (e.target.textContent === ' pause ') {
            clearTimeout(counterBox)
            document.querySelector('#minus').disabled = true;
            document.querySelector('#plus').disabled = true;
            document.querySelector('#heart').disabled = true;
            document.querySelector('#submit').disabled = true;
            document.querySelector('#comment-input').disabled = true;
            document.querySelector('#pause').textContent = `resume`
        } else {
            counterBox = setInterval(timer, 1000)
            document.querySelector('#minus').disabled = false;
            document.querySelector('#plus').disabled = false;
            document.querySelector('#heart').disabled = false;
            document.querySelector('#submit').disabled = false;
            document.querySelector('#comment-input').disabled = false;
            document.querySelector('#pause').textContent = ' pause '
        }
        
    })
}

pauseButton()

function comments () {
        let commentBox = document.querySelector('#comment-form')
        commentBox.addEventListener('submit', (e) => {
            e.preventDefault()
            buildComments(e.target['comment-input'].value)
        })
    }

    comments()

function buildComments(comment) {
    let p = document.createElement('p')
    p.innerHTML = `${comment}`
    document.querySelector('#list').appendChild(p)
}

let likeCounter
let heartClicks = []

function likeNumber() {
    let heart = document.querySelector('#heart')
    heart.addEventListener('click', (e) => {
        let numberCount = counter
        likeCounter = 1
        
        let like = document.createElement('li')
        like.textContent = `${numberCount} has been liked ${likeCounter} times`
        document.querySelector(".likes").append(like)
    })
}
likeNumber()



