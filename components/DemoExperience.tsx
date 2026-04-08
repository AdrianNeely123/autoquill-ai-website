import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Sparkles, Phone } from 'lucide-react';
import { LiveCallCounter } from './LiveCallCounter';
import { ScrollReveal } from './ui/ScrollReveal';
import { SpotlightCard } from './ui/SpotlightCard';
import { ShineButton } from './ui/ShineButton';
import { trackCTAClick, trackPhoneClick, trackVideoPlay, CTA_NAMES } from '../utils/analytics';

export const DemoExperience: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);

  // Autoplay when scrolled into view, pause when scrolled away
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          if (!hasTracked) {
            trackVideoPlay('Demo Video Short', 'demo_experience_section');
            setHasTracked(true);
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasTracked]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        if (!hasTracked) {
          trackVideoPlay('Demo Video Short', 'demo_experience_section');
          setHasTracked(true);
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      id="demo-experience"
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-labelledby="demo-experience-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <header className="text-center mb-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-300 mb-6">
              <Play size={16} className="text-purple-700" />
              <span className="text-sm font-medium text-purple-700">See It In Action</span>
            </div>
          </ScrollReveal>

          {/* Live Call Counter */}
          <div className="mb-6 flex justify-center">
            <LiveCallCounter />
          </div>

          <ScrollReveal delay={100}>
            <h2
              id="demo-experience-heading"
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              See Your AI Receptionist in Action
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how our AI handles real calls, books appointments, and manages your business — all from one dashboard.
            </p>
          </ScrollReveal>
        </header>

        {/* Video Player with Browser Frame */}
        <ScrollReveal delay={300}>
          <SpotlightCard className="rounded-2xl max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              {/* Browser Chrome */}
              <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white rounded-md border border-gray-200 text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    autoquillai.com
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative aspect-video bg-gray-900 cursor-pointer" onClick={togglePlay}>
                <video
                  ref={videoRef}
                  src="/demo-video-short.mp4"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play overlay — shown when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-black/60 transition-opacity z-10">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-xl shadow-purple-600/40 hover:scale-110 animate-pulse">
                      <Play size={36} className="ml-1" fill="white" />
                    </div>
                    <span className="mt-3 text-white/80 text-sm font-medium">Click to play demo</span>
                  </div>
                )}

                {/* Bottom Controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                {/* Live Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5 z-10">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                  </span>
                  AI Demo
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={400}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '<500ms', label: 'Response Time' },
              { value: '97%', label: 'Caller Satisfaction (60K+ calls)' },
              { value: '50+', label: 'Voice Options' },
              { value: '24/7', label: 'Always Available' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-700 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={500}>
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Ready to get your own AI receptionist? <strong className="text-gray-900">Live in 48 hours.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ShineButton
                pulse
                className="px-8 py-4 text-lg"
                onClick={() => {
                  trackCTAClick(CTA_NAMES.GET_STARTED, 'demo_experience');
                  window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
                }}
              >
                <Sparkles size={20} />
                Get Started Risk-Free
              </ShineButton>
              <ShineButton
                variant="secondary"
                className="px-8 py-4"
                href="tel:+15139645726"
                onClick={() => trackPhoneClick('demo_experience')}
              >
                <Phone size={20} />
                Call Our Demo: (513) 964-5726
              </ShineButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
