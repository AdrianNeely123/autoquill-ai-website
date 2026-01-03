import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Play, Pause, Volume2, PhoneCall, Headphones, ArrowRight } from 'lucide-react';

interface CallSample {
  id: string;
  title: string;
  industry: string;
  duration: string;
  description: string;
  // In production, these would be actual audio URLs
  audioUrl: string;
}

const callSamples: CallSample[] = [
  {
    id: 'dental-booking',
    title: 'Dental Appointment Booking',
    industry: 'Dental Practice',
    duration: '1:24',
    description: 'AI books a cleaning appointment, checks insurance, and sends confirmation',
    audioUrl: '/audio/dental-sample.mp3',
  },
  {
    id: 'hvac-emergency',
    title: 'HVAC Emergency Dispatch',
    industry: 'HVAC Company',
    duration: '0:58',
    description: 'AI identifies AC emergency and dispatches technician immediately',
    audioUrl: '/audio/hvac-sample.mp3',
  },
  {
    id: 'plumber-quote',
    title: 'Plumber Service Quote',
    industry: 'Plumbing Business',
    duration: '1:12',
    description: 'AI qualifies the job, gives estimate, and schedules service call',
    audioUrl: '/audio/plumber-sample.mp3',
  },
  {
    id: 'medspa-consult',
    title: 'Med Spa Consultation',
    industry: 'Med Spa',
    duration: '1:45',
    description: 'AI answers Botox questions, books consultation, collects deposit',
    audioUrl: '/audio/medspa-sample.mp3',
  },
];

export const HearItLive: React.FC = () => {
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Demo phone number - replace with actual number
  const demoPhoneNumber = '+1 (555) 123-4567';
  const demoPhoneNumberRaw = '+15551234567';

  const handlePlaySample = (sampleId: string) => {
    if (activeAudio === sampleId && isPlaying) {
      // Pause current
      setIsPlaying(false);
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      // Play new or resume
      setActiveAudio(sampleId);
      setIsPlaying(true);
      setProgress(0);
      
      // Simulate audio progress (replace with actual audio in production)
      if (progressInterval.current) clearInterval(progressInterval.current);
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            if (progressInterval.current) clearInterval(progressInterval.current);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  return (
    <section 
      id="hear-it-live"
      className="py-24 bg-neutral-950 relative overflow-hidden"
      aria-labelledby="hear-it-live-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Headphones size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Hear It For Yourself</span>
          </motion.div>

          <motion.h2
            id="hear-it-live-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Don't Take Our Word For It. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Listen For Yourself.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            The #1 question we get: "Does it actually sound real?" 
            <br />
            <strong className="text-white">Judge for yourself.</strong> Listen to real AI calls or call our demo line right now.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Call Our Demo Line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 border-2 border-accent/30 rounded-2xl p-8 h-full">
              {/* Pulse ring effect */}
              <div className="absolute top-8 right-8">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <PhoneCall size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Call Our AI Right Now</h3>
                  <p className="text-sm text-neutral-400">Experience it firsthand</p>
                </div>
              </div>

              <p className="text-neutral-300 mb-6 leading-relaxed">
                Call our demo line and pretend you're a customer. Ask about appointments, pricing, hours—anything. 
                <span className="text-white font-medium"> See how natural it sounds.</span>
              </p>

              {/* Phone Number Display */}
              <div className="bg-neutral-950/50 border border-white/10 rounded-xl p-6 mb-6">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Demo Line</p>
                <a 
                  href={`tel:${demoPhoneNumberRaw}`}
                  className="text-3xl md:text-4xl font-bold text-white hover:text-accent transition-colors"
                >
                  {demoPhoneNumber}
                </a>
                <p className="text-xs text-neutral-500 mt-2">Available 24/7 • No signup required</p>
              </div>

              {/* Call button for mobile */}
              <a
                href={`tel:${demoPhoneNumberRaw}`}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                <Phone size={20} />
                Call Now (It's Free)
              </a>

              <p className="text-xs text-neutral-500 text-center mt-4">
                💡 Try asking: "Do you have any appointments tomorrow?" or "What are your hours?"
              </p>
            </div>
          </motion.div>

          {/* Right: Audio Samples */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <Volume2 size={20} className="text-accent" />
              <h3 className="text-lg font-semibold text-white">Or Listen to Real Calls</h3>
            </div>

            {callSamples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-neutral-900/50 border rounded-xl p-4 cursor-pointer transition-all hover:bg-neutral-900/80 ${
                  activeAudio === sample.id 
                    ? 'border-accent/50 bg-accent/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => handlePlaySample(sample.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Play Button */}
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      activeAudio === sample.id && isPlaying
                        ? 'bg-accent text-white'
                        : 'bg-white/10 text-white hover:bg-accent/20'
                    }`}
                    aria-label={activeAudio === sample.id && isPlaying ? 'Pause' : 'Play'}
                  >
                    {activeAudio === sample.id && isPlaying ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} className="ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-white truncate">{sample.title}</h4>
                      <span className="text-xs text-neutral-500 ml-2">{sample.duration}</span>
                    </div>
                    <p className="text-xs text-accent mb-1">{sample.industry}</p>
                    <p className="text-xs text-neutral-400 line-clamp-2">{sample.description}</p>

                    {/* Progress bar */}
                    {activeAudio === sample.id && (
                      <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA after samples */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4 border-t border-white/10 mt-6"
            >
              <p className="text-sm text-neutral-400 mb-4">
                Convinced? Get your own AI agent—<span className="text-white">completely free.</span>
              </p>
              <button
                onClick={() => window.location.hash = '/free-agent'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all group"
              >
                Get Your Free Agent
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-1">&lt;500ms</div>
            <div className="text-xs text-neutral-400">Response Time</div>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-1">97%</div>
            <div className="text-xs text-neutral-400">Can't Tell It's AI</div>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-xs text-neutral-400">Voice Options</div>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-xs text-neutral-400">Always Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

