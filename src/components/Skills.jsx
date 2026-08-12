import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const rowA = [...skills.slice(0, 6), ...skills.slice(0, 6)];
const rowB = [...skills.slice(6), ...skills.slice(6)];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className='flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur-sm'>
      <div className='flex h-8 w-8 shrink-0 items-center justify-center'>
        <Icon size={20} color={skill.color} />
      </div>
      <span className='whitespace-nowrap text-sm text-white/80'>{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const trackARef = useRef(null);
  const trackBRef = useRef(null);
  const tweensRef = useRef([]);

  useGSAP(
    () => {
      gsap.from(".skills-intro > *", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      const makeLoop = (el, duration) => {
        if (!el) return null;

        return gsap.to(el, {
          xPercent: -50,
          duration,
          ease: "none",
          repeat: -1,
        });
      };

      tweensRef.current = [makeLoop(trackARef.current, 32), makeLoop(trackBRef.current, 40)];
    },
    { scope: sectionRef },
  );

  const pause = () => tweensRef.current.forEach((t) => t?.pause());
  const resume = () => tweensRef.current.forEach((t) => t?.play());

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='relative overflow-hidden bg-[#05050c] bg-cover bg-center bg-no-repeat py-28 lg:py-36'
      style={{
        backgroundImage: "url('../../public/space.jpg')",
      }}
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 30%, rgba(5,5,12,0.55) 0%, rgba(5,5,12,0.85) 55%, rgba(5,5,12,0.97) 100%)",
        }}
      />
      <div className='pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]' />

      <div className='relative mx-auto max-w-6xl px-6 lg:px-10'>
        <div className='skills-intro mx-auto mb-16 max-w-2xl text-center'>
          <p className='mb-5 flex items-center justify-center gap-3 text-sm font-medium tracking-[0.25em] text-violet-400'>
            <span className='h-px w-8 bg-violet-500' />
            MY TOOLKIT
            <span className='h-px w-8 bg-violet-500' />
          </p>

          <h2 className='text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl'>
            Tools I{" "}
            <span className='bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
              actually{" "}
            </span>
            use
          </h2>

          <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-white/45 sm:text-lg'>
            My stack is constantly evolving — these are the technologies I'm using, learning, and building with right
            now.
          </p>
        </div>
      </div>

      <div
        className='relative flex flex-col gap-5'
        onMouseEnter={pause}
        onMouseLeave={resume}
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className='flex w-max gap-4' ref={trackARef}>
          {rowA.map((skill, i) => (
            <SkillCard key={`a-${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
        <div className='flex w-max gap-4' ref={trackBRef}>
          {rowB.map((skill, i) => (
            <SkillCard key={`b-${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      <div className='relative mx-auto mt-16 max-w-6xl px-6 text-center lg:px-10'>
        <p className='font-mono text-xs text-white/25 sm:text-sm'>
          <span className='text-violet-400'>&gt;</span> Always learning. Always building.
          <span className='ml-1 animate-pulse text-violet-400'>_</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;
