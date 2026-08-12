# Ankit Kumar Singh — Portfolio

A personal portfolio site for **Ankit Kumar Singh**, a frontend developer learning full-stack development. Built with React and Vite, styled with Tailwind CSS, and animated end-to-end with GSAP (scroll-triggered reveals, marquee loops, orbiting stack card, and more).

🔗 **Live site:** [portfolio-blaezy.vercel.app](https://portfolio-blaezy.vercel.app/)

## Sections

- **Hero** — intro, name, tagline, and quick links to work/contact
- **About** — bio, stats, and an interactive orbiting "stack" card that tilts on mouse move
- **Skills** — an infinite dual-row marquee of tools, pausable on hover
- **Projects** — featured builds: **PlayStack** (game tracker), **Sky-Mart** (e-commerce), **Basecamp** (productivity app)
- **Contact** — ways to get in touch
- **Navbar** — scroll-spy active states, glass blur on scroll, animated mobile menu

## Tech Stack

- **React 19** + **Vite** — UI and dev/build tooling
- **Tailwind CSS 4**
- **GSAP** + `@gsap/react` (`useGSAP`) — timelines, `ScrollTrigger` reveals, infinite marquee, orbit rotation, cursor-tilt effects
- **lucide-react** / **react-icons** — icons
- Deployed on **Vercel**

## GSAP Highlights

- `useGSAP` hook scoped to each section for automatic cleanup
- Staggered entrance timelines (Hero, About, Navbar)
- `ScrollTrigger`-driven reveals with `play reverse play reverse` toggle actions (About, Skills, Projects)
- Infinite marquee loops built with `xPercent` tweens (Skills)
- Continuous rotation + counter-rotating icons for the orbiting stack card (About)
- Mouse-tracked tilt effect on the About card

## Getting Started

```bash
git clone https://github.com/Blaezy/portfolio.git
cd portfolio
npm install
npm run dev
```

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the build
npm run lint        # run ESLint
```

## Connect

- GitHub: [@Blaezy](https://github.com/Blaezy)
- LinkedIn: [ankitkumarsingh-blaezy](https://www.linkedin.com/in/ankitkumarsingh-blaezy)
- Email: ankitkumarsingh22dev@gmail.com