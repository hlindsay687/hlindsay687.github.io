# Dr. Rubin Neurosurgery Website

## Project Overview

A premium, patient-focused marketing website for Dr. Rubin, a neurosurgeon serving the Denver metro area. The site is designed to build trust, clearly communicate services, and convert visitors into appointment requests.

## Site Goals

1. **Build Trust** - Convey expertise, professionalism, and compassionate care through design and content
2. **Educate Patients** - Clearly explain conditions treated and services offered in patient-friendly language
3. **Drive Conversions** - Make it easy for patients to request appointments from any point on the page
4. **Local SEO** - Target Denver metro area searches for neurosurgical care
5. **Accessibility** - Ensure the site is usable by all patients regardless of ability

## Design Decisions

### Technology Stack
- **Static HTML/CSS/JS** - Simple, fast, no framework overhead for a marketing site
- **No build tools required** - Files can be served directly or deployed to any static host
- **Minimal JavaScript** - Only for mobile menu toggle, smooth scroll, and form interactions

### Visual Design
- **Color Palette**:
  - Primary: Deep Navy (#1a365d) - Trust, professionalism
  - Secondary: Slate (#475569) - Supporting text
  - Accent: Surgical Teal (#0d9488) - CTAs, highlights
  - Background: White (#ffffff), Soft Gray (#f8fafc)
  - Text: Dark Slate (#1e293b)
  
- **Typography**:
  - Headings: Inter (clean, modern, medical-appropriate)
  - Body: Inter (highly legible at all sizes)
  
- **Spacing**: 8px base unit, generous whitespace for calm aesthetic

### Site Structure
Single-page design with sections:
1. Header (sticky navigation)
2. Hero (main value proposition)
3. Trust Bar (credentials, affiliations)
4. Conditions Treated
5. Services
6. About Dr. Rubin
7. Patient Journey
8. Why Choose Dr. Rubin
9. Testimonials
10. FAQ
11. Location & Contact
12. Footer

## Content Guidelines

- Use patient-friendly language, avoid excessive medical jargon
- No unverifiable outcome claims or guarantees
- Include clear emergency disclaimers
- Forms marked as non-HIPAA-secure inquiry forms
- Conservative testimonial wording

## Database Schema

No database is used for this static marketing site. The appointment request form will need to be connected to an external form handler or backend service for actual submissions.

## Service Area

Denver metro area including:
- Denver
- Aurora
- Lakewood
- Centennial
- Boulder
- Surrounding communities

## File Structure

```
/
├── index.html          # Main single-page site
├── styles.css          # All styles
├── script.js           # Minimal JavaScript
├── Rubin.md           # Project documentation (this file)
└── assets/            # Images (to be added)
    └── (placeholder for future images)
```

## Future Enhancements

- Blog/patient resources section
- Dedicated condition-specific landing pages
- Online patient portal integration
- Multi-language support
- Video content integration

## Changelog

- **2026-06-29**: Initial project setup and documentation
