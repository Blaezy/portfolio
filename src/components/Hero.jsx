import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowUpRight, Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-frame", {
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-label",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".hero-name span",
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero-learning",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
          },
          "-=0.2",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3",
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3",
        )
        .from(
          ".social-rail",
          {
            opacity: 0,
            x: 30,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".scroll-indicator",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.3",
        );

      gsap.to(".scroll-dot", {
        y: 20,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id='home'
      className='relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#020208] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "url('../../public/space.jpg')",
      }}
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
        }}
      />
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50' />

      <div className='relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-20 text-center'>
        <p className='hero-label mb-6 text-sm font-medium tracking-[0.22em] text-violet-400 sm:text-base'>
          FRONTEND DEVELOPER
        </p>

        <h1 className='hero-name text-6xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[5.5rem]'>
          <span className='block'>ANKIT KUMAR SINGH</span>
        </h1>

        <div className='hero-learning mt-8 flex items-center justify-center gap-3'>
          <div className='flex h-9 w-9 items-center justify-center rounded-md border border-violet-500/60 bg-black/30 text-violet-400'>
            <Terminal size={16} strokeWidth={2.25} />
          </div>

          <p className='text-base text-white/80 sm:text-lg'>Learning Full Stack Development</p>
        </div>

        <div className='hero-line mt-4 h-px w-full max-w-md bg-gradient-to-r from-transparent via-violet-400/70 to-transparent' />

        <p className='hero-description mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg'>
          A <span className='text-violet-400'>hungry learner</span> who loves building interactive, responsive and
          meaningful web experiences.
        </p>

        <div className='hero-buttons mt-8 flex flex-wrap items-center justify-center gap-8'>
          <a
            href='#projects'
            className='group flex items-center gap-4 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]'
          >
            Explore My Work
            <ArrowRight size={20} className='transition-transform duration-300 group-hover:translate-x-1' />
          </a>

          <a
            href='mailto:ankitkumarsingh22dev@gmail.com'
            className='group flex items-center gap-2 border-b border-dashed border-violet-400 pb-1 text-base text-white/85 transition-colors hover:text-violet-300'
          >
            Let's Connect
            <ArrowUpRight
              size={17}
              className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
            />
          </a>
        </div>
      </div>

      <div className='social-rail absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex'>
        <a
          href='https://github.com/Blaezy'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-white transition-all duration-300 hover:scale-110 hover:text-violet-400'
        >
          <FaGithub size={24} />
        </a>

        <div className='h-7 w-px bg-white/30' />

        <a
          href='https://www.linkedin.com/in/ankitkumarsingh-blaezy'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-white transition-all duration-300 hover:scale-110 hover:text-violet-400'
        >
          <FaLinkedin size={24} />
        </a>

        <div className='h-7 w-px bg-white/30' />

        <a
          href='mailto:ankitkumarsingh22dev@gmail.com'
          aria-label='Email'
          className='text-white transition-all duration-300 hover:scale-110 hover:text-violet-400'
        >
          <Mail size={24} strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
