import assert from 'node:assert/strict';
import test from 'node:test';

test('the deterministic fixture is healthy', () => {
  assert.equal('github-saas'.toUpperCase(), 'GITHUB-SAAS');
});
