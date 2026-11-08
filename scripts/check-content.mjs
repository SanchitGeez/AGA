import assert from 'node:assert/strict';
import { services, categories } from '../lib/services.ts';
import { getServiceScope } from '../lib/service-content.ts';
import { getServiceGuide } from '../lib/service-guides.ts';
import { upcomingDeadlines, deadlines } from '../lib/deadlines.ts';

assert.equal(new Set(services.map(s => s.slug)).size, services.length);
for (const service of services) {
  assert(categories.some(c => c.id === service.category), service.slug);
  assert(getServiceScope(service.slug).length >= 4, `Missing scope: ${service.slug}`);
  const guide = getServiceGuide(service);
  assert(guide.documents.length >= 3, `Missing documents: ${service.slug}`);
  assert.equal(guide.faqs.length, 3, `Missing FAQs: ${service.slug}`);
  assert(guide.faqs.every(f => f.question && f.answer), service.slug);
  assert(!service.law.includes('§'), service.slug);
}
const codes = upcomingDeadlines(new Date(2026, 10, 8)).map(d => d.code);
assert(codes.indexOf('SEBI Reg 31') < codes.indexOf('RSCA'), 'January 21 must precede January 30');
assert(codes.indexOf('RSCA') < codes.indexOf('SEBI Reg 24A'), 'Quarterly dates must precede next May');
assert.equal(upcomingDeadlines(new Date(2026, 9, 30))[0].code, 'RSCA', 'Today stays in the current year');
assert(!deadlines.find(d => d.code.startsWith('DIR-3')).month, 'KYC is no longer annual');
assert.equal(upcomingDeadlines(new Date(2026, 11, 31)).length, deadlines.length);
console.log(`${services.length} service guides/scopes and recurring-calendar checks passed.`);
