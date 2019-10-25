quotes=[
    "I <3 Technica",
    "Go Technica!"
]
last_quote=''
chooseQuote = () => {
    curr_quote = quotes[Math.floor(Math.random()*quotes.length)]
    while (curr_quote == last_quote){
        curr_quote = quotes[Math.floor(Math.random()*quotes.length)]
    }
    last_quote = curr_quote
    return last_quote
}