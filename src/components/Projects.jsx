import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SECTION_BACKGROUND = "/space.jpg";

const tagColors = {
  React: "bg-sky-400",
  "Tailwind CSS": "bg-cyan-400",
  "Node.js": "bg-green-400",
  MongoDB: "bg-emerald-500",
  "Redux Toolkit": "bg-purple-400",
  API: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  LocalStorage: "bg-orange-400",
  CSS: "bg-blue-400",
  HTML: "bg-orange-500",
};

const projects = [
  {
    number: "01",
    title: "PlayStack",
    category: "Game Tracker & Library",
    description: "Track your games, rate them, write reviews and organize your entire game library in one place.",
    tags: ["React", "Redux Toolkit", "API", "JavaScript"],
    image: "/projects/playstack.png",
    live: "https://sheryians-mini-hackathon-playstack.vercel.app/",
    github: "https://github.com/Blaezy/sheryians-mini-hackathon-playstack",
  },
  {
    number: "02",
    title: "Sky-Mart",
    category: "E-Commerce Web Application",
    description:
      "A modern e-commerce platform with product browsing, category filtering, cart management and secure checkout.",
    tags: ["React", "Tailwind CSS", "Api", "JavaScript"],
    image: "/projects/sky-mart.png",
    live: "https://sheryians-sky-mart.vercel.app/",
    github: "https://github.com/Blaezy/sheryians-sky-mart",
  },
  {
    number: "03",
    title: "Basecamp",
    category: "Productivity Web Application",
    description: "An all-in-one productivity app to manage tasks, track goals, plan your day and stay consistent.",
    tags: ["React", "JavaScript", "LocalStorage", "CSS"],
    image: "/projects/basecamp.png",
    live: "https://sheryians-productivity-dashboard.vercel.app/",
    github: "https://github.com/Blaezy/sheryians-productivity-dashboard",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".projects-heading", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.utils.toArray(".project-row").forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        });

        const image = row.querySelector(".project-image");
        row.addEventListener("mouseenter", () => gsap.to(image, { scale: 1.04, duration: 0.6, ease: "power3.out" }));
        row.addEventListener("mouseleave", () => gsap.to(image, { scale: 1, duration: 0.6, ease: "power3.out" }));
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id='projects'
      className='relative overflow-hidden bg-[#03030a] bg-cover bg-center bg-no-repeat px-6 py-28 lg:px-10 lg:py-36'
      style={SECTION_BACKGROUND ? { backgroundImage: `url('${SECTION_BACKGROUND}')` } : undefined}
    >
      {!SECTION_BACKGROUND && (
        <div
          className='pointer-events-none absolute inset-0 opacity-70'
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.9) 100%, transparent), radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(1.5px 1.5px at 80% 45%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(1px 1px at 35% 70%, rgba(255,255,255,0.6) 100%, transparent), radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(1.5px 1.5px at 10% 85%, rgba(255,255,255,0.6) 100%, transparent), radial-gradient(1px 1px at 50% 55%, rgba(255,255,255,0.5) 100%, transparent)",
            backgroundSize: "100% 100%",
          }}
        />
      )}
      <div className='absolute inset-0 bg-[#03030a]/60' />

      <div className='pointer-events-none absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]' />
      <div className='pointer-events-none absolute left-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]' />

      <svg
        className='pointer-events-none absolute right-[8%] top-[8%] h-40 w-64 opacity-60'
        viewBox='0 0 260 160'
        fill='none'
      >
        <path d='M10 140C80 40 160 10 250 20' stroke='url(#streak)' strokeWidth='1.5' strokeLinecap='round' />
        <circle cx='250' cy='20' r='2.5' fill='#c4b5fd' />
        <defs>
          <linearGradient id='streak' x1='10' y1='140' x2='250' y2='20'>
            <stop offset='0' stopColor='#c4b5fd' stopOpacity='0' />
            <stop offset='1' stopColor='#c4b5fd' stopOpacity='0.8' />
          </linearGradient>
        </defs>
      </svg>

      <div className='relative mx-auto max-w-6xl'>
        <div className='projects-heading mb-16'>
          <p className='mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-violet-400'>
            <span className='h-1.5 w-1.5 rounded-full bg-violet-400' />
            MY WORK
          </p>

          <h2 className='bg-gradient-to-r from-white via-violet-300 to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl lg:text-7xl'>
            Projects
          </h2>

          <p className='mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base'>
            A collection of projects I've built to solve real problems, learn new technologies and create meaningful
            experiences.
          </p>
        </div>

        <div className='flex flex-col gap-10'>
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-row group grid items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/30 sm:p-7 lg:grid-cols-2 lg:gap-14 lg:p-8`}
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0c0c15] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className='absolute -left-2 -top-2 z-10 flex h-4 w-4 items-center justify-center'>
                  <span className='absolute h-4 w-4 animate-ping rounded-full bg-violet-400/40' />
                  <span className='relative h-2.5 w-2.5 rounded-full bg-violet-400' />
                </span>

                <img
                  src={project.image}
                  alt={project.title}
                  className='project-image absolute inset-0 h-full w-full object-cover object-top'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#03030a]/40 via-transparent to-transparent' />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className='mb-3 flex items-start justify-between gap-4'>
                  <div>
                    <span className='font-mono text-sm text-violet-400'>{project.number}</span>
                    <h3 className='mt-1 text-2xl font-bold text-white sm:text-3xl'>{project.title}</h3>
                    <p className='mt-1 bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-sm font-medium text-transparent'>
                      {project.category}
                    </p>
                  </div>

                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open ${project.title}`}
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-violet-400/40 hover:text-white'
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <p className='max-w-md text-sm leading-7 text-white/50'>{project.description}</p>

                <div className='mt-5 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55'
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${tagColors[tag] ?? "bg-violet-400"}`} />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className='mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200'
                >
                  Github Repo
                  <ArrowUpRight
                    size={15}
                    className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </a>

                <a
                  href={project.live}
                  className='ml-6 mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200'
                >
                  View Project
                  <ArrowUpRight
                    size={15}
                    className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-16 flex justify-center'>
          <a
            href='https://github.com/Blaezy'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white'
          >
            View more on GitHub
            <ArrowUpRight
              size={17}
              className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
