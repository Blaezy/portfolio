import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const Contact = () => {
  const sectionRef = useRef(null);

  const scrollToTop = (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".contact-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(".contact-heading", { opacity: 0, y: 24, duration: 0.6, ease: "power2.out" }, "-=0.25")
        .from(".contact-description", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .from(".contact-email", { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3")
        .from(".contact-social", { opacity: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.2");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='relative overflow-hidden bg-[#03030a] bg-cover bg-center bg-no-repeat px-6 pb-10 pt-28 lg:px-10 lg:pt-36'
      style={{
        backgroundImage: "url('/space.jpg')",
      }}
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(3,3,10,0.75) 0%, rgba(3,3,10,0.9) 55%, rgba(3,3,10,0.97) 100%)",
        }}
      />

      <div className='pointer-events-none absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px]' />
      <div className='pointer-events-none absolute right-[-10%] bottom-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[150px]' />

      <svg
        className='pointer-events-none absolute left-[8%] top-[12%] h-40 w-64 -scale-x-100 opacity-60'
        viewBox='0 0 260 160'
        fill='none'
      >
        <path d='M10 140C80 40 160 10 250 20' stroke='url(#contact-streak)' strokeWidth='1.5' strokeLinecap='round' />
        <circle cx='250' cy='20' r='2.5' fill='#c4b5fd' />
        <defs>
          <linearGradient id='contact-streak' x1='10' y1='140' x2='250' y2='20'>
            <stop offset='0' stopColor='#c4b5fd' stopOpacity='0' />
            <stop offset='1' stopColor='#c4b5fd' stopOpacity='0.8' />
          </linearGradient>
        </defs>
      </svg>

      <div className='relative mx-auto max-w-2xl text-center'>
        <p className='contact-eyebrow mb-6 text-xs font-medium tracking-[0.3em] text-white/35'>LET'S CONNECT</p>

        <h2 className='contact-heading text-4xl font-semibold leading-[1.15] text-white sm:text-5xl'>
          Have an idea? Let's build it.
        </h2>

        <p className='contact-description mx-auto mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-base'>
          Whether it's a project, an opportunity, or just a conversation about development — my inbox is always open.
        </p>

        <div className='mt-10'>
          <a
            href='mailto:ankitkumarsingh22dev@gmail.com'
            className='contact-email group inline-flex items-center gap-2 border-b border-white/15 pb-1 text-base text-white/85 transition-colors duration-300 hover:border-violet-400/60 hover:text-white sm:text-lg'
          >
            ankitkumarsingh22dev@gmail.com
            <ArrowUpRight
              size={16}
              className='text-white/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400'
            />
          </a>
        </div>

        <div className='mt-12 flex items-center justify-center gap-6 text-sm text-white/35'>
          <a
            href='https://github.com/Blaezy'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-social transition-colors hover:text-white'
          >
            GitHub
          </a>

          <span className='h-1 w-1 rounded-full bg-white/15' />

          <a
            href='https://www.linkedin.com/in/ankitkumarsingh-blaezy'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-social transition-colors hover:text-white'
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer className='relative mx-auto mt-28 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/25 sm:flex-row'>
        <p>© {new Date().getFullYear()} Ankit Kumar Singh</p>

        <p className='font-mono'>Designed &amp; built with React · GSAP</p>

        <a
          href='#home'
          onClick={scrollToTop}
          className='group flex items-center gap-2 transition-colors hover:text-white'
        >
          Back to top
          <span className='transition-transform duration-300 group-hover:-translate-y-1'>↑</span>
        </a>
      </footer>
    </section>
  );
};

export default Contact;