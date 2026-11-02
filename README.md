# Tembisa Animal Rescue - Website Project

## Student Information
Name: Faith Ndlovu  
Student No: ST10528024  
Course: WEDE5020  
GitHub: FaithNdlovu0206/WEDE5020-TAR 
Live site: https://faithndlovu0206.github.io/WEDE5020-TAR/home.html

## Project Overview
Tembisa Animal Rescue (TAR) was founded in 2018 to reduce animal suffering in Tembisa. This website aims to increase adoptions, recruit volunteers, and raise awareness.

## Goals
1. Increase Adoptions
2. Raise Awareness about responsible pet ownership
3. Recruit Volunteers

## Key Features - Part 2 Updates
- Responsive Design: Mobile (320px), Tablet (768px), Desktop (1024px+)
- External CSS: All styling in CSS/style.css
- SEO: Meta tags, alt text, semantic HTML
- Interactive Map: Google Maps embed with fixed API (200 OK)
- Contact Form with validation

## Key Features - Part 3 FINAL Updates (POE)

### 1. Enquiry Page Overhaul - Event Calendar System
- **Previous:** Basic enquiry form only
- **NOW:** 
    - Searchable Event Calendar (8 events)
    - Search bar: Filter by event name / location
    - Category filter: Adoption Drive, Vet Camp, Education
    - Displays: Date, Time, Location, Availability (Available / Limited / Full), Cost (R0 - R150)
    - Donation / Discount modal with secure checkout UI
    - JavaScript auto-fill form when user clicks "Enquire Now"

### 2. Home Page Multimedia Fix
- Fixed autoplay video: Removed `poster="Images/image1.png.jpeg"` (was blocking video)
- Now: `<video autoplay muted loop playsinline controls>` - Autoplays on load per Part 3 requirement

### 3. Adopt Page Interactivity
- Added JavaScript filter: Dogs / Cats / All
- Added adoption fee and availability badges
- From static gallery to dynamic listings

### 4. SEO Implementation (Section 3.1 - Was Missing, Now Fixed)
- Created `robots.txt` in root (User-agent: * Allow: / Sitemap: /sitemap.xml)
- Created `sitemap.xml` with all 7 pages and priorities
- Added unique title tags: e.g., Tembisa Animal Rescue - Adopt Dogs & Cats in Tembisa
- Added meta descriptions and keywords on all pages
- Image SEO: Optimized alt text and descriptive filenames

### 5. JavaScript & Technical
- Added enquiry.js for search, modal, validation
- Page speed: Images compressed <500KB
- Security: HTTPS via GitHub Pages
- 10 Commits total - Final commit: ST10528024 Final fix

## Sitemap
home.html -> about.html, gallery.html, services.html, contact.html, adopt.html, enquiry.html

- home.html
- about.html
- services.html
- gallery.html
- adopt.html
- enquiry.html (Event Calendar)
- contact.html

## Technical Requirements
- HTML5 Semantic tags: header, nav, main, section, footer
- CSS3: Flexbox, Grid, Media Queries
- JavaScript: Vanilla JS for calendar & modal
- Google Maps Embed API
- SEO: robots.txt, sitemap.xml
- Hosting: GitHub Pages (Deploy from main branch /root)
- No 404 errors - All CSS and map requests return 200 OK

## Changelog
| Date | Version | Changes |
| --- | --- | --- |
| 14/08/2026 | v1.0 | Part 1: 5 static HTML pages, no CSS |
| 18/09/2026 | v2.0 | Part 2: Added CSS/style.css, fixed CSS path (removed duplicate), fixed Google Maps embed, added tablet breakpoint 768px-1024px, added responsive nav, validated all links 200 OK, changed colour scheme orange #FF6B35 to green #1a4d2e for brand trust |
| 02/11/2026 | v3.0 FINAL | Part 3: TOTAL enquiry.html overhaul - Added event calendar with search, availability status, cost per event, category filter, donation modal. Fixed home video autoplay (removed poster). Added adopt.html filters. Created robots.txt + sitemap.xml (SEO Section 3.1). Added JS functionality. Optimized images. 10 commits. Ready for POE submission ST10528024 |

## References
Tembisa Animal Rescue (2018) Organisation Overview.

SPCA South Africa (2024) Adoption Guidelines. Available at: https://www.spca.org.za [Accessed 6 August 2026].

Pexels (2026) Free Stock Photos. Available at: https://www.pexels.com

Google Maps Platform (2026) Embed API Documentation.

Mozilla Developer Network (2026) HTML Video Autoplay Guide. Available at: https://developer.mozilla.org [Accessed 02 Nov 2026].

Google Search Central (2026) Robots.txt and Sitemap.xml Documentation. Available at: https://developers.google.com/search [Accessed 02 Nov 2026].
Pexels (2026) Free Stock Photos. Available at: https://www.pexels.com

Google Maps Platform (2026) Embed API Documentation.
