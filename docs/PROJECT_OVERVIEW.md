# SGX VI — Product Case Study

## Context

SGX VI is a live, commercial digital-creation experience that connects a themed user interface to image submissions, payment and result delivery. This document summarizes its **user-facing behavior**, not its private software design.

## User journey

1. **Landing:** Visitors explore the GTA VI-inspired visual experience.
2. **Input:** Visitors can upload one or two images and provide an email address.
3. **Review:** Visitors see a summary of the service and the published price and terms.
4. **Payment:** Mercado Pago handles the checkout experience.
5. **Delivery:** The public site describes image generation beginning after confirmed payment, followed by a result page and email link.

## Technology areas

- **Frontend:** Astro, React and TypeScript
- **Managed backend/data:** Supabase
- **Payments:** Mercado Pago
- **Deployment:** Vercel
- **Published AI provider:** OpenAI
- **Transactional email:** Resend

The frontend choices above are documented project information. Provider roles are also described in the live application's [published privacy policy](https://create.sgodx.com/privacidad). The README includes a responsibility map of the public product flow, rather than a diagram of the private implementation.

## Product and engineering considerations

- Responsive presentation across screen sizes
- Clear input-to-checkout-to-delivery flow
- User communication before payment
- Consistent branding across the experience
- Separation of the public showcase from the production repository

## What this showcase intentionally does not publish

- Private source code, proprietary prompts or image-generation orchestration
- Payment credentials, webhooks, business logic or configuration secrets
- Database schemas, data models, security-sensitive architecture or service keys
- Customer uploads, personally identifying details or payment records
- Third-party artwork or game assets copied from the production site

## Verification and scope

The customer journey described here is drawn from the currently visible public application. This showcase **does not claim** independently audited security, load capacity, conversion rates, or revenue outcomes. Reviewed empty-state interface captures and their provenance are recorded in the [screenshot inventory](../assets/screenshots/README.md). No purchase, image generation or result delivery was exercised to create those captures.

**Live application:** https://create.sgodx.com/
