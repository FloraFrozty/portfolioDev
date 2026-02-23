'use client';
import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Twitch, Send, MoveUpRight } from "lucide-react";
import { animate, cubicBezier, splitText, stagger, createTimeline, Scope, createScope } from 'animejs';

export default function Home() {

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const splitInstanceRef = useRef<ReturnType<typeof splitText> | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const scrollImgRefs = useRef<HTMLElement[]>([]);

  const addScrollImgRef = (el: HTMLElement | null) => {
    if (!el) return;
    // prevent duplicates on re-render
    if (!scrollImgRefs.current.includes(el)) scrollImgRefs.current.push(el);
  };

  useEffect(() => {
    if (!titleRef.current) return;
    const split = splitText(titleRef.current, {
      chars: { wrap: 'clip' },
    });
    splitInstanceRef.current = split;

    const tl = createTimeline({
      loop: false,
      defaults: {
        ease: cubicBezier(0.25, 1, 0.5, 1),
        duration: 700,
      },
    });

    tl.add(split.chars, {
      y: ['100%', '0%'],
      opacity: [0, 1],
    }, stagger(60))

    .add(
      iconsRef.current?.children ?? [],
      {
        y: ['16px', '0px'],
        opacity: [0, 1],
        scale: [0.9, 1],
      },
      stagger(80)
    )

    .init();

    // Clean up: restore original H1 DOM on unmount
    return () => {
      splitInstanceRef.current?.revert();
      splitInstanceRef.current = null;
    };
  }, []);

  useEffect(() => { 
    const els = scrollImgRefs.current;
    if (!els.length) return;

    // Start hidden (avoid flash)
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px) scale(0.98)';
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;

          // animate once
          animate(el, {
            opacity: [0, 1],
            translateY: ['18px', '0px'],
            scale: [0.98, 1],
            duration: 650,
            ease: cubicBezier(0.25, 1, 0.5, 1),
          });

          io.unobserve(el);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);


  return (
    <div>
      <div className="flex h-screen items-baseline-last justify-center w-full bg-[url(/home/IMG_7166.PNG)] bg-center bg-cover">
        <div className="grid gap-y-4 pb-32 md:pb-16 text-center">
          <div className="md:flex">
            <h1 ref={titleRef} className="text-4xl text-white md:text-6xl font-medium">FLORAFROZTY</h1>
          </div>
          <div ref={iconsRef} className="flex items-center justify-center space-x-4">
            <Link href="https://www.facebook.com/florafrozty" target="_blank">
              <Facebook className="hover:scale-110 hover:text-neutral-400 text-white cursor-pointer" />
            </Link>
            <Link href="https://x.com/florafrozty" target="_blank">
              <Twitter className="hover:scale-110 hover:text-neutral-400 text-white cursor-pointer" />
            </Link>
            <Link href="https://www.twitch.tv/itzflorafrozty" target="_blank">
              <Twitch className="hover:scale-110 hover:text-neutral-400 text-white cursor-pointer" />
            </Link>
            <Link href="https://t.me/florafrozty" target="_blank">
              <Send className="hover:scale-110 hover:text-neutral-400 text-white cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/florafrozty?igsh=ZnkyNDNkOHFoNGhv" target="_blank">
              <Instagram className="hover:scale-110 hover:text-neutral-400 text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative md:flex min-h-screen p-8 md:p-16 md:gap-x-8 items-start justify-center bg-[#F0EEE9]">
        <div className="md:w-1/3 md:sticky md:top-16 items-baseline justify-center pb-8">
          <div className="relative xl:w-80 h-auto aspect-square">
            <Image
            className="object-cover rounded-2xl" 
            src="/home/IMG_7162.PNG" alt="" fill unoptimized />
          </div>
          <div className="grid gap-y-2 py-4 text-sm/5 lg:text-base/5 md:text-md/5">
            <div className="pb-4">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold xl:font-medium text-black">FloraFrozty💜✨</h1>
              <p className="text-xs text-black">Alias: Frozty / เด็กแดกหนม</p>
              <p className="text-xs text-black">OCs: Kato「かと」/ Gaji (가지)</p>
            </div>
            <span className="flex flex-wrap w-full space-x-2 gap-y-2 pb-4">
                <p className="text-black px-4 py-1 bg-amber-300 rounded-2xl">Artist</p>
                <p className="text-black px-4 py-1 bg-orange-300 rounded-2xl">Foodie!</p>
                <p className="text-black px-4 py-1 bg-rose-300 rounded-2xl">Drummer</p>
                <p className="text-black px-4 py-1 bg-violet-300 rounded-2xl">Designer</p>
                <p className="text-black px-4 py-1 bg-sky-300 rounded-2xl">Gaming</p>
                <p className="text-black px-4 py-1 bg-teal-300 rounded-2xl">Asthetics</p>
                <p className="text-black px-4 py-1 bg-green-300 rounded-2xl">BADDIE!</p>
            </span>
            <div className="grid gap-y-2 pb-4">
              <p className="text-black">Haii! My name is Frozty, nice to meet yall!!</p>
              <p className="text-black">I like eating. Will literally go to almost any buffets if got invited. (Not w/ strangers ofc, so text me first lmao)</p>
              <p className="text-black">I am also a Baddie! &gt;3&lt;</p>
              <p className="text-black">I speak TH/EN, and I don't bite so just hit me. I mean feel free to DM xD</p>
            </div>
          </div>
          <div className="flex flex-wrap space-x-4 space-y-2 pb-8">
            <Link href="https://docs.google.com/document/d/1-Ev9VI-2RmE26RWO4Ky3FllsumAzUu3vBh-Nd0naagg/edit?usp=sharing" target="_blank">
              <button className="flex text-teal-600 text-xs font-semibold underline hover:text-teal-800 cursor-pointer">
                COMMISSION INFO<MoveUpRight className="w-3"/>
              </button>
            </Link>
            <Link href="https://trello.com/b/aNozGRmU" target="_blank">
              <button className="flex text-teal-600 text-xs font-semibold underline hover:text-teal-800 cursor-pointer">
                COMMISSION QUEUE (TRELLO)<MoveUpRight className="w-3"/>
              </button>
            </Link>
          </div>
          <div className="flex items-start space-x-4">
            <Link href="https://www.facebook.com/florafrozty" target="_blank">
              <Facebook className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://x.com/florafrozty" target="_blank">
              <Twitter className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.twitch.tv/itzflorafrozty" target="_blank">
              <Twitch className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://t.me/florafrozty" target="_blank">
              <Send className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/florafrozty?igsh=ZnkyNDNkOHFoNGhv" target="_blank">
              <Instagram className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="md:w-2/3 items-baseline justify-center">
          <div className="grid gap-y-4 pb-8">
            <h4 className="text-sm font-semibold text-black">ARTS & COMMISSIONS 🎨</h4>
            <p className="text-black text-xs">* Shaded icon, or portrait. Price ranges from $35+, varying on character designs.</p>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-2/3 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7130.PNG" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7103.PNG" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7069.PNG" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7145.PNG" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/4 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/Untitled_Artwork-2.png" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7120.PNG" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7127.PNG" alt="" fill />
              </div>
            </div>
          </div>
          <hr className="text-black py-2"></hr>
          <div className="grid gap-y-4 pb-8">
            <h4 className="text-sm font-semibold text-black">SHIKISHI 🖌️</h4>
            <p className="text-black text-xs">* Shaded icon, or portrait. Price ranges from $45+, varying on character designs.</p>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/dir.png" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/amber.png" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/kkami.png" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/boreum.png" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/soul.png" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/marble.png" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/luky.png" alt="" fill />
              </div>
              <div ref={addScrollImgRef} className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/jerry.png" alt="" fill />
              </div>
            </div>
          </div>
          <hr className="text-black py-2"></hr>
          <div className="grid gap-y-2 pb-8">
            <h4 className="text-sm font-semibold text-black pb-2">TRAVEL PLANS ✈️</h4>
            <p className="text-black text-xs pb-2">* Lists of furry conventions I plan to attend.</p>
            <div className="relative space-y-2 lg:flex lg:gap-2">
              <div ref={addScrollImgRef} className="flex gap-2 w-full xl:w-1/2 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                    <path fill="#282646" d="M1 11H31V21H1z"></path>
                    <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#992532"></path>
                    <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#992532"></path>
                    <path fill="#fff" d="M1 9H31V12H1z"></path><path fill="#fff" d="M1 20H31V23H1z"></path>
                    <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                    <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                <span>
                  <h5 className="text-black text-xl">Thaitails 2026 ✔️</h5>
                  <p className="text-black text-xs">Bangkok, Thailand</p>
                </span>
              </div>
              <div ref={addScrollImgRef} className="flex gap-2 w-full xl:w-1/2 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                  <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <path transform="rotate(-56.31 8.143 10.762)" d="M5.877 10.384H10.41V11.139000000000001H5.877z"></path><path transform="rotate(-56.31 9.086 11.39)" d="M6.819 11.013H11.352V11.768H6.819z"></path>
                  <path transform="rotate(-56.31 10.028 12.02)" d="M7.762 11.641H12.295V12.396H7.762z"></path><path transform="rotate(-56.31 24.538 20.216)" d="M23.499 19.839H25.576V20.593999999999998H23.499z"></path>
                  <path transform="rotate(-56.31 23.176 22.26)" d="M22.137 21.882H24.215V22.637H22.137z"></path><path transform="rotate(-56.31 23.595 19.588)" d="M22.556 19.21H24.633000000000003V19.965H22.556z"></path>
                  <path transform="rotate(-56.31 22.234 21.632)" d="M21.195 21.253H23.272V22.008H21.195z"></path><path transform="rotate(-56.31 22.653 18.96)" d="M21.614 18.582H23.691000000000003V19.337H21.614z"></path>
                  <path transform="rotate(-56.31 21.29 21.002)" d="M20.252 20.625H22.329V21.38H20.252z"></path><path d="M12.229,13.486c1.389-2.083,4.203-2.646,6.286-1.257s2.646,4.203,1.257,6.286l-7.543-5.029Z" fill="#be3b3e"></path>
                  <path d="M12.229,13.486c-1.389,2.083-.826,4.897,1.257,6.286s4.897,.826,6.286-1.257c.694-1.041,.413-2.449-.629-3.143s-2.449-.413-3.143,.629l-3.771-2.514Z" fill="#1c449c"></path>
                  <circle cx="14.114" cy="14.743" r="2.266" fill="#be3b3e"></circle>
                  <path transform="rotate(-33.69 8.143 21.238)" d="M7.765 18.972H8.52V23.505000000000003H7.765z"></path>
                  <path transform="rotate(-33.69 10.03 19.98)" d="M9.651 17.715H10.406V22.248H9.651z"></path>
                  <path transform="rotate(-33.69 22.915 11.39)" d="M22.537 9.124H23.291999999999998V13.657H22.537z"></path>
                  <path transform="rotate(-33.69 8.405 19.588)" d="M8.027 18.549H8.782V20.625999999999998H8.027z"></path>
                  <path transform="rotate(-33.691 9.767 21.632)" d="M9.389 20.592H10.144V22.668999999999997H9.389z"></path>
                  <path transform="rotate(-33.69 21.29 10.998)" d="M20.913 9.959H21.668V12.036H20.913z"></path>
                  <path transform="rotate(-33.69 22.652 13.04)" d="M22.275 12.002H23.029999999999998V14.079H22.275z"></path>
                  <path transform="rotate(-33.69 23.176 9.741)" d="M22.798 8.702H23.552999999999997V10.779H22.798z"></path>
                  <path transform="rotate(-33.691 24.539 11.783)" d="M24.16 10.745H24.915V12.822H24.16z"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                <span>
                  <h5 className="text-black text-xl">FurstClass APR26 🕖</h5>
                  <p className="text-black text-xs">Seoul, South Korea</p>
                </span>
              </div>
            </div>
            <div className="relative space-y-2 lg:flex lg:gap-4">
              <div ref={addScrollImgRef} className="flex gap-2 w-full xl:w-1/2 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                  <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
                  <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                  <circle cx="16" cy="16" r="6" fill="#ae232f"></circle><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                <span>
                  <h5 className="text-black text-xl">OFFF 2026 🕖</h5>
                  <p className="text-black text-xs">Osaka, Japan</p>
                </span>
              </div>
              <div ref={addScrollImgRef} className="flex gap-2 w-full xl:w-1/2 h-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                  <path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#ea3323"></path>
                  <path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#fff"></path>
                  <path d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path>
                  <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                <span>
                  <h5 className="text-black text-xl">PAWAI 2026 🕖</h5>
                  <p className="text-black text-xs">Bali, Indonesia</p>
                </span>
              </div>
            </div>
          </div>
          <hr className="text-black py-2"></hr>
          <p className="text-center text-xs text-neutral-500">©2026 FLORAFROZTY</p>
        </div>
      </div>
    </div>
  );
}
