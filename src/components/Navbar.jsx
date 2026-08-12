import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".nav-link", {
        y: -15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      });
    },
    { scope: navRef },
  );

  useGSAP(
    () => {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -15, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" },
        );

        gsap.from(".mobile-link", {
          opacity: 0,
          x: -15,
          duration: 0.3,
          stagger: 0.06,
          delay: 0.1,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [isOpen] },
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 h-20 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/15 bg-[#020208]/95 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg"
          : "border-b border-transparent bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-center px-6 lg:px-10'>
        <div className='hidden items-center md:flex'>
          <div className='flex items-center gap-12'>
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link relative pb-1 text-[17px] font-normal transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/90 hover:text-white"
                  } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-violet-500 after:shadow-[0_0_8px_#8b5cf6] after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          ) : (
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              <path d='M4 6h16' />
              <path d='M4 12h16' />
              <path d='M4 18h16' />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className='mx-5 mt-2 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl md:hidden'
        >
          <div className='flex flex-col gap-5'>
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-link w-fit pb-0.5 transition-colors ${
                    isActive
                      ? "text-white underline decoration-violet-500 decoration-2 underline-offset-4"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
