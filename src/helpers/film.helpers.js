
/**
 * returns a filtered array of movies
 * @param {Array} list 
 * @param {string} director 
 * @returns {Array} filteredList 
 */

export function filterFilmsByDirector(list, searchDirector){
    return list.filter(item => item.director === searchDirector);
}

/**
 * gets the list of directors filtered from the total api json object
 * @param {Array} list (array)
 * @param {Array} prop (property of object to get)
 * @returns {Array} list of directors
 */

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop]))];
}


/**
 * 
 * @param {Object} list returns film stats
 * @returns 
 */

export function getFilmStats(list){
const arr = [...list];
    if (arr.length <= 0){
        return {
            sum: 0,
            avg_score: 0,
            total: 0,
            latest: 1600
        }
    }


    const sum = arr.reduce((a, c) => {
        return Number(a) + Number(c.rt_score)}, 0 );

const avg_score = sum / arr.length;
const total = arr.length;

const latest = arr.sort((a, b) => {
    return a.release_date - b.release_date
})[0];

return {
    sum: sum,
    avg_score: avg_score,
    total: total,
    latest: latest.release_date
}

}