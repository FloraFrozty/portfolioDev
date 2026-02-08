import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Twitch, Send, MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-baseline-last justify-center w-full bg-[url(/home/IMG_7166.PNG)] bg-center bg-cover">
        <div className="grid gap-y-4 pb-16 text-center">
          <div className="md:flex">
            <h1 className="text-6xl font-medium">FLORA</h1>
            <h1 className="text-6xl font-medium">FROZTY</h1>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link href="https://www.facebook.com/florafrozty">
              <Facebook className="hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://x.com/florafrozty">
              <Twitter className="hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.twitch.tv/itzflorafrozty">
              <Twitch className="hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://t.me/florafrozty">
              <Send className="hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/florafrozty?igsh=ZnkyNDNkOHFoNGhv">
              <Instagram className="hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative md:flex min-h-screen p-8 md:p-16 md:gap-x-8 items-start justify-center bg-[#F0EEE9]">
        <div className="md:w-1/3 md:sticky md:top-8 items-baseline justify-center pb-8">
          <div className="relative xl:w-80 h-auto aspect-square">
            <Image
            className="object-cover rounded-2xl" 
            src="/home/IMG_7162.PNG" alt="" fill unoptimized />
          </div>
          <div className="grid gap-y-2 py-4 text-sm/5 lg:text-base/5 md:text-md/5">
            <div className="pb-4">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold xl:font-medium text-black">FloraFrozty💜✨</h1>
              <p className="text-xs text-black">Alias: Frozty / เด็กแดกหนม</p>
            </div>
            <span className="flex flex-wrap w-full space-x-2 gap-y-2 pb-4">
                <p className="text-black px-4 py-1 bg-amber-300 rounded-2xl">Artist</p>
                <p className="text-black px-4 py-1 bg-orange-300 rounded-2xl">Foodie!</p>
                <p className="text-black px-4 py-1 bg-rose-300 rounded-2xl">Drummer</p>
                <p className="text-black px-4 py-1 bg-violet-300 rounded-2xl">Designer</p>
                <p className="text-black px-4 py-1 bg-sky-300 rounded-2xl">Gamer</p>
                <p className="text-black px-4 py-1 bg-teal-300 rounded-2xl">Asthetics</p>
            </span>
            <div className="pb-4">
              <p className="text-black">Me like eating. Will literally go to almost any buffets if got invited. (Not w/ strangers ofc, so text me first lmao)</p>
              <p className="text-black">I speak TH/EN, and I don't bite so just hit me. I mean feel free to DM lmao</p>
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
          <div className="flex items-start space-x-4 pb-4">
            <Link href="https://www.facebook.com/florafrozty">
              <Facebook className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://x.com/florafrozty">
              <Twitter className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.twitch.tv/itzflorafrozty">
              <Twitch className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://t.me/florafrozty">
              <Send className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/florafrozty?igsh=ZnkyNDNkOHFoNGhv">
              <Instagram className="text-black hover:scale-110 hover:text-neutral-400 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="md:w-2/3 items-baseline justify-center">
          <div className="grid gap-y-4 pb-8">
            <h4 className="text-sm font-semibold text-black">ARTS & COMMISSIONS 🎨</h4>
            <p className="text-black text-xs">* Shaded icon, or portrait. Price ranges from $35+, varying on character designs.</p>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-2/3 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7130.PNG" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7103.PNG" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7069.PNG" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7145.PNG" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7120.PNG" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/IMG_7127.PNG" alt="" fill />
              </div>
            </div>
          </div>
          <div className="grid gap-y-4 pb-8">
            <h4 className="text-sm font-semibold text-black">SHIKISHI 🖌️</h4>
            <p className="text-black text-xs">* Shaded icon, or portrait. Price ranges from $45+, varying on character designs.</p>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/kkami.png" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/boreum.png" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/soul.png" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/marble.png" alt="" fill />
              </div>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="relative w-1/2 h-auto aspect-square">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/luky.png" alt="" fill />
              </div>
              <div className="relative w-1/2 h-auto">
                <Image
                className="object-cover rounded-2xl" 
                src="/home/shikishi/jerry.png" alt="" fill />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-neutral-500">All coded & designed by me!</p>
        </div>
      </div>
    </div>
  );
}
