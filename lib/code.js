var downloadCSV = require('./dependency')

module.exports = () => (dispatch, getState) => {
	downloadCSV('goats')
}
