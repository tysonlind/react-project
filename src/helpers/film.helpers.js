
/**
 * returns a filtered array of movies
 * @param {Array} list 
 * @param {string} director 
 * @returns {Array} filteredList 
 */

export function filterFilmsByDirector(list, searchDirector){
    return list.filter(item => item.director == searchDirector);
}

/**
 * gets the list of directors filtered from the total api json object
 * @param {Array} list (array)
 * @param {Array} prop (property of object to get)
 * @returns {Array} list of directors
 */

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];
}