var download = require('downloadjs')

module.exports = (data) => {
	download(data, 'export-result.csv', 'text/csv')
}
