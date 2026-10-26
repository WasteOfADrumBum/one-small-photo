const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const retiredApi = require('../server/middleware/retiredApi');

test('all retired data requests stop with 410 and never continue', () => {
  for (const method of ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']) {
    let status, body;
    const res = { status(code) { status = code; return this; }, json(value) { body = value; } };
    retiredApi({ method }, res, () => assert.fail('must never reach a database route'));
    assert.equal(status, 410);
    assert.deepEqual(body, { error: 'This legacy API has been retired.' });
  }
});
test('both private-data route mounts use the retirement guard', () => {
  const source = fs.readFileSync(path.join(__dirname, '../server/server.js'), 'utf8');
  for (const route of ['inbox', 'cms']) {
    assert.ok(source.includes(`app.use('/api/${route}', require('./middleware/retiredApi'))`));
    assert.ok(!source.includes(`require('./routes/${route}Routes')`));
  }
});
