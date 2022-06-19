const quotes = [
    {
    quote: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    author: "Mark Twain"
    },
    {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
    },
    {
    quote: "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstein"
    },
    {
    quote: "If you start from nothing, it is very difficult to get anywhere.",
    author: "Gerhard Herzberg"
    },
    {
    quote: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller"
    }
]


const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;