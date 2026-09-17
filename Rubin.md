# Benjamin A. Rubin, MD — Neurosurgery Website

Marketing website for Dr. Benjamin A. Rubin, a board-certified neurosurgeon practicing with
Boulder Neurosurgical and Spine Associates of BCH in Boulder and Longmont, Colorado.

## Goals

1. Convey trust and competence through restraint rather than decoration
2. Explain clearly what Dr. Rubin treats and how he practices
3. Make the referral-and-imaging path obvious so patients arrive prepared
4. Stay easy to navigate on any device
5. Never overstate credentials or promise outcomes

## Verified Practice Information

All content on the site is drawn from the sources listed under "Sources" below. Do not add
credentials, statistics, or testimonials that cannot be verified there.

**Name:** Benjamin A. Rubin, MD, FAANS
**Specialty:** Neurological surgery
**Board certification:** American Board of Neurological Surgery
**Current practice:** Boulder Neurosurgical and Spine Associates of BCH (joined July 2026)

### Education and training

| Stage | Institution | Detail |
| --- | --- | --- |
| Undergraduate | University of Colorado Boulder | BA Psychology, Certificate in Behavioral Neuroscience, 1998–2002 |
| Medical school | Chicago Medical School at Rosalind Franklin University | MD, 2004–2008, Alpha Omega Alpha |
| Internship | NYU Grossman School of Medicine | General Surgery |
| Residency | NYU Grossman School of Medicine | Neurological Surgery, 2008–2015, Chief Resident |

There is **no fellowship** in any public record. Earlier drafts of this site claimed
"fellowship trained"; that claim was removed and must not be reintroduced.

### Career history

- Colorado Brain and Spine Institute, Swedish Medical Center — 2015–2019
- Kaiser Permanente / Colorado Permanente Medical Group, Denver — 2019–2026
- Boulder Neurosurgical and Spine Associates of BCH — 2026–present

### Locations

- **Boulder:** 4743 Arapahoe Ave., Suite 202, Boulder, CO 80303
- **Longmont:** 2101 Ken Pratt Blvd., Suite 104D, Longmont, CO 80501
- **Phone (both):** (303) 938-5700
- **Fax:** (303) 998-0007

### Hospital affiliations

- Boulder Community Foothills Hospital — 4747 Arapahoe Ave., Boulder, CO 80303
- Presbyterian/St. Luke's Medical Center — 1719 E. 19th Ave., Denver, CO 80218
- Sky Ridge Medical Center — 10101 Ridgegate Pkwy., Lone Tree, CO 80124

### Clinical focus

Conditions of the brain, skull, spinal cord, nerves, and vertebral column. Spine: cervical and
lumbar degenerative disease, stenosis, disc herniations, instability, deformity, complex revision
surgery, cord compression, spinal arthritis. Brain: primary tumors, metastases, cerebral
aneurysms, vascular malformations, traumatic brain injury. Also spinal tumors, infections, and
traumatic spinal injuries.

Techniques: open and minimally invasive approaches, robotic-assisted surgery, frameless
stereotactic navigation. Works with a team including physiatry, interventional pain management,
physician assistants, nurses, and medical assistants.

**Access:** most patients need a referral and must complete a minimum set of imaging before the
first appointment.

### Sources

- Kaiser Permanente Colorado clinician profile
- Boulder Community Health (bch.org) neurosurgery service page and MyChart provider profile
- WebMD and Doximity provider profiles
- LinkedIn (benjamin-a-rubin-md-56611354)
- US News Doctors, Healthgrades

## Design Decisions

The first iteration used a dark navy hero, a teal accent, and shadowed cards throughout. It was
replaced because it read as generic and busy. The current design trades decoration for
typography, whitespace, and hairline rules.

### Palette

Warm neutral surfaces with a single cool accent. Warm paper reads as human; the cool blue reads
as clinical and credible.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#fbfaf8` | Page background |
| `--surface` | `#ffffff` | Cards, credential strip, footer |
| `--surface-sunk` | `#f4f2ee` | Alternating section bands |
| `--ink` | `#14242f` | Headings |
| `--text` | `#45575f` | Body copy |
| `--muted` | `#5f7076` | Secondary text (darkened for 4.5:1 contrast) |
| `--brand` | `#2a5d7c` | Links, buttons, accents |
| `--brand-deep` | `#1c4056` | Dark section background, button hover |
| `--line` | `#e3ded6` | Hairline rules |

### Typography

- Headings: Source Serif 4 — a serif signals established expertise and softens the clinical tone
- Body and UI: Inter
- Fluid `clamp()` type scale (`--step--1` through `--step-5`) so sizes adapt without breakpoints
- Body measure capped at `66ch` for readability

### Corner radius

Three steps, assigned by element size so the curvature looks consistent rather than uniform —
a single radius makes large panels look sharp and small controls look bubbly.

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `6px` | Form inputs, selects, status messages |
| `--radius` | `9px` | Buttons, contact rows, emergency notice, skip link |
| `--radius-lg` | `16px` | Portrait frame, inquiry form, location cards |

### Layout principles

- Hairline rules and background bands separate sections instead of shadowed cards
- Left-aligned content with a single sticky header and one primary call to action
- Generous vertical rhythm on an 8px-derived spacing scale
- Breakpoints at 640px (two columns), 900px (full desktop nav and multi-column), 1140px (header
  phone number appears once there is room)

### Accessibility

- Skip link, `:focus-visible` rings, semantic landmarks and heading order
- FAQ uses real buttons with `aria-expanded` / `aria-controls`
- Mobile drawer manages `hidden`, `aria-expanded`, body scroll lock, and Escape to close
- Form errors announced through a `role="status"` live region and focus moved to the first
  incomplete field
- `prefers-reduced-motion` disables transitions and smooth scrolling
- Text contrast verified at 4.5:1 or better

## Section Structure

Single page, ordered around how a patient decides:

1. Header — sticky, six nav links, phone, primary call to action
2. Hero — positioning statement, portrait, two calls to action, referral note
3. Credential strip — board certification, FAANS, NYU training, years in practice
4. About — biography and education/training timeline
5. Conditions treated — spine, brain and skull, nerve and trauma
6. Surgical approach — dark band; techniques and care team
7. New patients — four numbered steps from referral to recovery
8. Locations — Boulder, Longmont, hospital affiliations
9. FAQ — six accordion items
10. Contact — inquiry form, phone, emergency notice
11. Footer — navigation, contact, areas served, medical disclaimer

## Database Schema

None. This is a static site with no database, no server-side code, and no data persistence.

If a datastore is introduced later (for example to store inquiry submissions), document the full
schema in this section, and record every migration here as it is added.

## Outstanding Work

- **Open Graph image URL** — `og:image` and `twitter:image` point at the relative path
  `assets/dr-rubin.png`. Some platforms require an absolute URL, so update both once the domain
  is live
- **Form backend** — `handleSubmit` in `script.js` validates and shows confirmation but posts
  nowhere. Connect it to an approved, HIPAA-appropriate form service before going live
- **Office hours** — exact hours were not publicly listed, so the site says to call. Replace with
  real hours when confirmed
- **Policy pages** — footer disclaimer is in place; privacy and accessibility pages are not
- **Insurance list** — stated generally on purpose; confirm accepted plans with the office

## Files

```
index.html             Single-page site
styles.css             Design tokens and all styles
script.js              Header state, mobile drawer, FAQ, scroll-spy nav, form validation
assets/dr-rubin.png    Hero portrait, 800x800 (square; the hero frame is 1:1 to match)
Rubin.md               This document
```

Local preview: `python3 -m http.server 8080` from the project root.

## Changelog

- **2026-09-17** — Softened corners. Replaced the single 3px radius with a three-step scale
  (6 / 9 / 16px) assigned by element size.
- **2026-09-17** — Added the hero portrait (`assets/dr-rubin.png`), changed the portrait frame
  from 4:5 to 1:1 so the square source is not cropped, removed the placeholder markup and
  styles, and referenced the photo in the Open Graph, Twitter, and Physician schema metadata.
- **2026-09-17** — Full redesign. Replaced the dark, card-heavy layout with a light,
  typography-led design. Replaced all placeholder content with verified credentials, corrected
  the practice to Boulder Neurosurgical and Spine Associates of BCH with real addresses and
  phone numbers, removed the false "fellowship trained" claim and the fabricated testimonials,
  and added referral/imaging guidance and a medical disclaimer.
- **2026-06-29** — Initial project setup and first draft site.
