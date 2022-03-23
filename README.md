# Random quote generator

- clone the repository

```bash
git clone https://github.com/jibi966/quote.git
```
- install packages

```bash
npm install 
```
- Change the code in node_modules/inspirational-quotes/lib/index.js

```bash
    getRandomQuote = () => {
       index = randomInt(0, arr.length) // random index to be used, don't forget to remove the other index variable decalred above the index.js file
       return arr[index].text
    }, 
```
- run the script

```bash
node quote.js
```
