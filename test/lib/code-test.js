describe('csv exporter', () => {
	var subject, downloadCSV
	beforeEach(() => {
		downloadCSV = td.replace('../../lib/dependency')
		subject     = require('../../lib/code.js')
	})

	describe('downloading csv', () => {
		it('works', () => {
			subject()()
			td.verify(downloadCSV('goats'))
		})
	});
});
