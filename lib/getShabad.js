const fetch = require( 'cross-fetch' )
const { API_URL, DEV_API_URL } = require( './consts' )

/**
 * Fetches and returns Shabad via ShabadID from GurbaniNow API
 * @param {(string|number)} shabadId ShabadID of Shabad to request
 * @param {boolean} [devApi=false] Use Development API instead of Production
 * @return {Object} GurbaniNow API Response
 * @example getShabad( 'DMP', true )
 */
function getShabad( shabadId, devApi = false ) {
  let URL = ( devApi ? DEV_API_URL : API_URL )
  URL += `/shabad/${shabadId}`

  return fetch( URL )
    .then( response => response.json() )
}

module.exports = getShabad
