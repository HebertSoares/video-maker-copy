const algorithmia = require('algorithmia')
function robot(content){
    fetchContentFromWikipedia(content)
    //sanitizeContent(content)
    //breakContentIntoSentence(content)
    function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia('API KEY TEMPORARIA ')
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponde = wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponde.get()
        console.log(wikipediaContent)
    }
}

module.exports = robot