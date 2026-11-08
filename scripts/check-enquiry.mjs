import assert from 'node:assert/strict';

// Negative/anti-spam checks never reach the email sender. Run against a local test server.
const base = process.argv[2] || 'http://127.0.0.1:3002';
async function check(label, values, status, headers = {}) {
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) form.set(key, value);
  const response = await fetch(`${base}/api/enquiry`, { method: 'POST', body: form, headers });
  const body = await response.json();
  assert.equal(response.status, status, `${label}: ${JSON.stringify(body)}`);
}
await check('Missing identity', {}, 400);
await check('Company name is not a spam trap', { company: 'Example organisation', name: 'Test', email: 'invalid' }, 400);
await check('Consent enforced on server', { name: 'Test', email: 'test@example.com' }, 400);
await check('Spam trap', { website: 'spam.example' }, 200);
await check('Cross-site origin', {}, 403, { Origin: 'https://unrelated.example' });
await check('Career needs resume', { name: 'Test', email: 'test@example.com', consent: 'yes', kind: 'career' }, 400);
await check('Length limit', { name: 'x'.repeat(121), email: 'test@example.com' }, 400);
console.log('7 enquiry validation/anti-spam checks passed; no email was sent.');
