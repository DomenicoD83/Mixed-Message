//an object made of array with the string of the sentences?

const mixedMessage = {
    _begin : ['You' , 'Friend', 'Dude' , 'Amigo' , 'Buddy'],
    _middle : ['have to' , 'need to' , 'should' , 'will' , 'eventually'],
    _final : ['count your blessings!' , 'look after yourself.' , 'understand this later.' , 'think about it...' , 'go for it!'],

    get begin () {
        return this._begin;
    },

    get middle () {
        return this._middle;
    },

    get final () {
        return this._final;
    }

    
}

function generateRandom (arr) {
    return arr[Math.floor(Math.random() * 5)];

}

console.log(`${generateRandom(mixedMessage.begin)} ${generateRandom(mixedMessage.middle)} ${generateRandom(mixedMessage.final)}`);





