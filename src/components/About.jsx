import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";
import { SiReact, SiTailwindcss, SiRedux, SiTypescript, SiJavascript, SiGit } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stackItems = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiRedux, name: "Redux Toolkit", color: "#764abb" },
  { icon: SiTypescript, name: "TypeScript", color: "#3179c7" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];

const About = () => {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".about-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".about-heading",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".about-description",
          {
            opacity: 0,
            y: 25,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".about-quote",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".about-stat",
          {
            opacity: 0,
            y: 25,
            stagger: 0.12,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".about-card",
          {
            opacity: 0,
            x: 60,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .from(
          ".orbit-item",
          {
            opacity: 0,
            scale: 0.5,
            stagger: 0.08,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
        onUpdate: function () {
          const current = this.targets()[0]._gsap.rotation;
          gsap.set(".orbit-icon-inner", { rotation: -current });
        },
      });
    },
    { scope: cardRef },
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      x: relX * 18,
      y: relY * 18,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id='about'
      className='relative overflow-hidden bg-[#03030a] bg-cover bg-center bg-no-repeat px-6 py-28 lg:px-10 lg:py-36'
      style={{
        backgroundImage: "url('../../public/space.jpg')",
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#03030a]/95 via-[#03030a]/90 to-[#03030a]/75' />

      <div className='pointer-events-none absolute left-[-15%] top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]' />

      <div className='relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
        <div>
          <p className='about-eyebrow mb-5 flex items-center gap-3 text-sm font-medium tracking-[0.25em] text-violet-400'>
            <span className='h-px w-8 bg-violet-500' />
            ABOUT ME
          </p>

          <h2 className='about-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl'>
            Hi, I'm
            <br />
            <span className='bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent'>
              Ankit Kumar Singh
            </span>
          </h2>

          <p className='about-description mt-6 flex flex-wrap items-center gap-3 text-base text-white/70 sm:text-lg'>
            Frontend Developer
            <span className='h-4 w-px bg-white/20' />
            Learning Full Stack
          </p>

          <p className='about-description mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg'>
            I'm a frontend developer studying full-stack development, currently building projects and sharpening my
            problem-solving through DSA practice.
          </p>

          <div className='about-quote relative mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-7'>
            <Quote size={28} className='mb-3 text-violet-400/60' fill='currentColor' />
            <p className='text-base leading-8 text-white/70 sm:text-lg'>
              The more I build, the more I realize{" "}
              <span className='text-violet-300'>how much more there is to learn</span> — and that's exactly why I keep
              going.
            </p>
          </div>

          <div className='mt-10 grid max-w-xl grid-cols-3 gap-4'>
            <div className='about-stat border-l border-white/10 pl-4'>
              <div className='text-2xl font-bold text-white'>10+</div>
              <p className='mt-1 text-xs text-white/40 sm:text-sm'>Projects Built</p>
            </div>

            <div className='about-stat border-l border-white/10 pl-4'>
              <div className='text-2xl font-bold text-white'>∞</div>
              <p className='mt-1 text-xs text-white/40 sm:text-sm'>Things To Learn</p>
            </div>

            <div className='about-stat border-l border-white/10 pl-4'>
              <div className='text-2xl font-bold text-white'>1</div>
              <p className='mt-1 text-xs text-white/40 sm:text-sm'>Hungry Learner</p>
            </div>
          </div>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='about-card relative flex h-105 items-center justify-center'
        >
          <div className='pointer-events-none absolute inset-0 rounded-full bg-violet-600/10 blur-3xl' />

          <div className='pointer-events-none absolute h-57.5 w-57.5 rounded-full border border-white/6' />
          <div className='pointer-events-none absolute h-85 w-85 rounded-full border border-white/5' />

          <div className='relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-violet-400/30 bg-[#08080f]/95 shadow-[0_0_45px_rgba(139,92,246,0.3)] backdrop-blur-xl'>
            <span className='font-mono text-[10px] tracking-[0.2em] text-violet-300'>STACK</span>
          </div>

          <div ref={ringRef} className='pointer-events-none absolute inset-0'>
            {stackItems.map((item, i) => {
              const angle = (360 / stackItems.length) * i;
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className='orbit-item pointer-events-auto absolute left-1/2 top-1/2'
                  style={{ transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)` }}
                >
                  <div
                    className='orbit-icon-inner group flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-[#08080f]/95 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:scale-110'
                    style={{ color: item.color }}
                  >
                    <Icon size={24} />
                    <span className='pointer-events-none absolute -bottom-7 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 font-mono text-[10px] text-white/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                      {item.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
