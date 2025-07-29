import React from 'react';
import { Briefcase, Truck, Home } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page max-w-5xl mx-auto mt-16 px-6 py-10 rounded-3xl bg-gradient-to-br from-sky-200/10 to-blue-500/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
      <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide drop-shadow-lg">
        About Us
      </h1>

      <p className="text-lg leading-relaxed mb-6 text-white/90 drop-shadow-sm">
        Welcome to <span className="text-yellow-300 font-semibold">Rajni Packers & Movers</span> — your trusted partner for 
        <span className="text-sky-300 font-medium"> seamless, secure, and smooth relocations</span> across India.
      </p>

      <div className="space-y-5">
        <p className="flex items-start gap-3 text-base text-white/85 drop-shadow-sm">
          <Home className="w-6 h-6 text-sky-300 mt-1" />
          <span>
            Whether you're moving your <span className="font-medium text-sky-200">home</span>, <span className="font-medium text-sky-200">office</span>, or personal belongings, we ensure professional handling from start to finish.
          </span>
        </p>

        <p className="flex items-start gap-3 text-base text-white/85 drop-shadow-sm">
          <Truck className="w-6 h-6 text-yellow-300 mt-1" />
          <span>
            Our trained team carefully packs, labels, and transports your items to their destination safely and on time.
          </span>
        </p>

        <p className="flex items-start gap-3 text-base text-white/85 drop-shadow-sm">
          <Briefcase className="w-6 h-6 text-green-300 mt-1" />
          <span>
            With affordable pricing and thousands of happy clients, we’re proud to be a part of your next move — big or small.
          </span>
        </p>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/80 italic text-lg drop-shadow">
        💼 “Your move, our responsibility.” <br />
        🚛 “Relax while we handle the rest.”
      </div>
    </div>
  );
};

export default About;
