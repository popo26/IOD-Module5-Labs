class Logger {
    constructor(){}

    log(id, value){
        console.log(`Calculator: ID${id}: Result ${value}`)
    }
}

module.exports = Logger;