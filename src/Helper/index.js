const Helper = {
    PokemonId: function(id) {
        return '#' + ('000' + id).substr(-3)
    },
    UppercaseByDelimeter: function(text, delimeter) {
        return text.toLowerCase().split(delimeter).map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    },
    CountCatch: function (id) {
        let database = JSON.parse(localStorage.getItem('database'))
        if (!database) {
            return 0
        }
        return database.filter(pokemon => pokemon.id == id).length
    }
}

export default Helper
