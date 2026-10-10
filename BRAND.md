# Paolo Missagia brand

**Personality: an Italian craftsman with a modern workshop.** A software developer who builds carefully and by hand, and who now works alongside AI agents the way a master works with apprentices: they do more of the cutting, he decides what gets made and checks every joint. The look is classic and quiet, like a well-set Italian book; the modern feeling comes from the tools on the bench, not from decoration. The words are calm, precise and warm.

The site is a *bottega*, a workshop: the place you find Paolo when you search for him, see what he has made, learn how he makes it, and get in touch.

## Who it's for

People searching for Paolo by name: recruiters, hiring managers, potential collaborators, and anyone who clicked a link from GitHub or LinkedIn. They should know within one screen who he is, where he is, what he builds, and how to reach him. Everything else is for those who want to read on.

## Name

- Always **Paolo Missagia** in full in titles, metadata and the hero. "Paolo" on its own in running text.
- The monogram is **PM** in Bodoni Moda, with a vermilion full stop: **PM.** It is the favicon and the mark in the header.
- The domain, `paolomissagia.com`, is written in lowercase and in mono wherever it appears.

## Voice

First person, British English (he lives in Edinburgh), short sentences.

| Do | Don't |
| --- | --- |
| Say plainly what he does: "I build web applications, mostly in TypeScript and React." | Titles and hype: "rockstar", "ninja", "10x", "passionate about clean code" |
| Be concrete about agentic work: what the agent did, what he decided, how it was checked. "biketoride was built with Claude Code in two days; every geometry figure is sourced and tested." | Vague AI claims: "AI-powered", "leveraging cutting-edge LLMs", "the future of coding" |
| Show the work and let it speak: a project, what it does, how it was built | Lists of buzzwords or skill bars ("React ████████░░") |
| Mention Italy and Edinburgh as plain facts, with warmth | Clichés: pizza, mandolins, "la dolce vita", tartan |
| Talk about interests with the same care as the work: opera, classical music, cycling | Generic hobbies to fill space ("I love travelling and coffee") |

Taglines: *Software, made by hand. With good tools.* · *Built with care in Edinburgh.*

### Content rules

- **No em dashes** (the long dash), as on Sonatina. Use a colon, a comma, or a hyphen with spaces ( - ), or rewrite.
- **Dates:** "October 2026"; spans with an en dash: 2019–2022.
- **Names keep their diacritics:** Antonín Dvořák, Città, perché.
- **Italian quotes use guillemets:** «A presto». English quotes use curly quotes.
- **Facts only.** Every claim about experience, employers and projects must be true and current. No invented metrics.

## Italian accents

Italy is part of the identity, not a theme. Use it sparingly and with taste:

- **Section eyebrows in Italian**, small and quiet above the English heading, so the meaning never depends on them:

  | Eyebrow | Heading |
  | --- | --- |
  | *Lavori* | Selected work |
  | *Metodo* | How I build |
  | *Percorso* | Experience |
  | *Fuori orario* | Off the clock |
  | *Contatti* | Get in touch |

- **Colour names** in this file are Italian (Carta, Inchiostro, Vermiglio): the tokens in CSS use them too.
- **Typography from Parma:** headings are set in Bodoni, the typeface of Giambattista Bodoni, printer to the Duke of Parma.
- **The sign-off:** the page ends with «A presto», "see you soon".

Never the tricolour, never a flag emoji, never Italian used where a visitor needs to understand it to act.

## Colour

Paper and ink, with one red. The palette is "printed page": warm paper, near-black ink, and vermilion used the way a printer uses red, for the few things that matter. Every colour in the CSS is one of these tokens. Never add a raw colour.

| Token | Hex | Use |
| --- | --- | --- |
| `--carta` | `#f8f4ec` | Page background |
| `--avorio` | `#fffdf8` | Cards and raised surfaces |
| `--linea` | `#e4dccd` | Hairline rules and borders |
| `--inchiostro` | `#1b1a17` | Text, headings, the monogram |
| `--grafite` | `#5c574f` | Secondary text, captions, mono annotations. AA on Carta (6.5:1) |
| `--vermiglio` | `#b5321c` | The one accent: links, the full stop in **PM.**, the cursor, the active marker. AA on Carta (5.6:1) |

**Night** follows the system setting (`prefers-color-scheme: dark`): the same page, printed in reverse.

| Token | Hex | Use |
| --- | --- | --- |
| `--notte` | `#14130f` | Page background |
| `--notte-alta` | `#1f1d19` | Cards and raised surfaces |
| `--notte-linea` | `#34312b` | Hairline rules and borders |
| text | Carta `#f8f4ec` | Text and headings (16.9:1) |
| `--pietra` | `#a9a196` | Secondary text (7.3:1) |
| `--vermiglio-notte` | `#f0674a` | The accent at night (6.0:1) |

Vermilion stays rare: if more than a few things on a screen are red, none of them stand out.

## Type

Three families, each with one job, all self-hosted via Fontsource:

- **Display: Bodoni Moda** (`--font-display`, `@fontsource-variable/bodoni-moda`). Headings, the name, the monogram. Large (32 px and up), tight tracking, regular or italic weight. The key word of a headline can be italic. Never for body text or below 24 px: Bodoni's hairlines vanish when small.
- **Body: Geist** (`--font-body`, `@fontsource-variable/geist`). Running text and UI, 400 for reading, 500–600 for labels. Shared with Sonatina.
- **Mono: Geist Mono** (`--font-mono`, `@fontsource-variable/geist-mono`). The voice of the tools: margin notes, build logs, the domain, code, dates. Small (13–14 px), in Grafite.

The pairing is the brand in miniature: an eighteenth-century Italian serif for the craft, a contemporary sans for clarity, and a mono for the workshop's machines.

## Signature elements

- **The hero as a title page.** Name in large Bodoni, one line on what he does, one line on where he is, set on generous paper with nothing else competing. A vermilion text cursor blinks after the last line, a nod to the terminal the old site was built around (static with reduced motion).
- **Margin notes.** On wide screens, short mono annotations sit in the left margin beside the text they belong to, like a scholar's notes in an old book or a log from the tools: `built with Claude Code`, `43 commits · 2 days`, `Edinburgh, 55.95° N`. On narrow screens they drop above their paragraph. This is where the agentic work lives visually: quiet, factual, always there.
- **Workshop cards for projects.** Each project is a card with its name in Bodoni, one sentence on what it does, a mono build log (stack, how it was built, time taken), and a link. Each card may show a small swatch of that project's own palette, a craftsman showing different pieces from the same bench.
- **Hairline rules** in Linea between sections, and a short vermilion rule under each eyebrow.
- **Roman numerals** number the sections (I. Lavori, II. Metodo, …), a quiet echo of Sonatina's movement lists.
- **One column, wide margins.** A single reading column of about 65 characters, with the margin notes outside it. No sidebars, no carousels, no parallax.

## Motion

Almost none. Links underline on hover, the cursor blinks, and sections may fade in once as they enter the screen. All motion is off with `prefers-reduced-motion`.

## Imagery

- **No stock photography and no AI-generated images.** The work is the imagery: screenshots of the projects, cropped cleanly, on Avorio cards.
- **A portrait is optional:** if used, a real photograph, black and white or natural colour, never filtered.
- **Icons** are thin line icons in currentColor, for contact links only.

## Interests

Two, because both shaped the work:

- **Opera and classical music**, the reason Sonatina exists.
- **Cycling**, the reason biketoride exists.

Each gets a sentence or two under *Fuori orario*, linked to the project it inspired.

## Facts we use

From Paolo, his CV and his public LinkedIn profile. The site never claims more than this.

- Born in **Italy**, based in **Edinburgh, Scotland, UK**
- **Full Stack Developer, MAPAL Group**, Feb 2024 – present (remote; the company is in Dresden). Angular and Python (Django) on a learning platform with 500,000+ monthly users; LLM-powered chatbot features across several products; 50+ REST endpoints; reviews, mentoring, tests, releases.
- **Software Engineer, Computershare**, Edinburgh, Sep 2022 – Feb 2024. React and Java (Spring Boot) on a client platform for 45,000+ companies; migration from on-premises to Azure with Docker and Kubernetes.
- **BSc (Hons) Computing & IT, The Open University**, 2019–2022
- Professional developer since 2022: say "four years" only while it is true, or better, let the dates speak.
- Languages: Italian (native), English (fluent), German (A2)
- Main stack: TypeScript, React, Angular, Python (Django), Java (Spring Boot), Docker, Kubernetes, AWS, Azure

The phone number stays off the site: email and LinkedIn are the ways in.

The LLM work at MAPAL is the professional side of the agentic story: he ships AI features at work and builds with agents at home. Tell both, plainly.

## Links

LinkedIn, GitHub and email, in that order. LeetCode is dropped: the projects show the work better than puzzle scores.
