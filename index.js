const genId1 = require('bzks_xid');
const genId2 = require('xyoq_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|gE0QkX3nTe|' + genId2()).digest('base64');
}


module.exports = generateKey;
