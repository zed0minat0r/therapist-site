# CHANGELOG-AGENT

## 2026-04-25 — Builder (customer surgery cycle)

- Credential swap: LCSW → LPC, "Licensed Clinical Social Worker" → "Licensed Professional Counselor — Psychotherapy and Clinical Supervision" (index.html bio, page title, meta description)
- Phone number: all 7 instances updated 610-585-1373 → 484-441-3108 (meta desc, schema, hero link/text, CTA, contact detail, footer)
- Schema address block removed entirely (streetAddress, addressLocality, addressRegion, postalCode)
- Hero location tagline `<p class="hero__location">` removed
- Contact section: office address detail removed, parking note removed, Google Maps iframe removed
- About photo caption updated (removed "205 N. Monroe St., Media PA")
- Footer tagline updated: "Psychotherapy in Media, PA" → "Psychotherapy and Clinical Supervision"
- Meta description: rewritten to location-agnostic, ages 13-adult, correct phone
- Page title: "Laura Spaulding, LPC | Psychotherapy and Clinical Supervision"
- Pricing fee note: "Sessions from $175" → "Individual sessions $150 — sliding scale slots available. Sessions are typically 50 minutes…"
- Services fee-tel line: removed "In-person in Media, PA" reference
- FAQ insurance answer: rewritten with Simple Practice / superbill / $150 / private pay language
- FAQ session length: removed 80-minute sessions reference; added groups note
- Ages throughout: 7+ → 13+ (hero sub, individual therapy row, stat block)
- Testimonials section (trust-strip): entire HTML section removed
- Testimonials CSS: all .trust-strip and .trust-q selectors removed from style.css (main block + mobile responsive blocks + reduced-motion line)
- Testimonials JS: initTestimonialScroll() function removed from main.js; call removed from init()
- Bio expanded: added paragraph on school settings / outpatient counseling experience
- Bio credential note added: "PA PreK-12 Certified School Counselor"
- Supervision copy: updated to "Individual and Group Supervision for licensure"
- Group therapy: updated desc to adults + parenting support focus, ongoing schedule language
- Carl Rogers second quote added: "The good life is a process, not a state of being. It is a direction, not a destination." — placed as transitional block above CTA section, matching approach__quote styling
- Psychology Today placeholder link added in contact details with TODO comment for real URL
- AUDIT.md: surgery landing note appended
- PLAN.md: created and committed ahead of execution (per PLAN.md)

2026-04-25 15:00 builder — customer surgery 11-item content/credential/location/pricing overhaul landed (per PLAN.md)
