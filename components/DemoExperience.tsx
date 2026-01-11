import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Play, Pause, Volume2, PhoneCall, Headphones, ArrowRight, 
  MessageSquare, Mic, X, CheckCircle, Sparkles
} from 'lucide-react';

import type { Page } from '../types';

interface DemoExperienceProps {
  onNavigate?: (page: Page) => void;
}

interface CallSample {
  id: string;
  title: string;
  industry: string;
  duration: string;
  description: string;
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
];

export const DemoExperience: React.FC<DemoExperienceProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'call' | 'listen' | 'video'>('call');
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Demo phone number
  const demoPhoneNumber = '+1 (513) 845-8466';
  const demoPhoneNumberRaw = '+15138458466';
  
  // Video URL
  const videoUrl = "https://www.youtube.com/embed/7yagw55U_bE";

  const handlePlaySample = (sampleId: string) => {
    if (activeAudio === sampleId && isPlaying) {
      setIsPlaying(false);
      if (progressInterval.current) clearInterval(progressInterval.current);
    } else {
      setActiveAudio(sampleId);
      setIsPlaying(true);
      setProgress(0);
      
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

  const tabs = [
    { id: 'call', label: 'Call Our AI', icon: PhoneCall },
    { id: 'listen', label: 'Listen to Samples', icon: Headphones },
    { id: 'video', label: 'Watch Demo', icon: Play },
  ];

  return (
    <section 
      id="demo-experience"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="demo-experience-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-accent/20 mb-6"
          >
            <Headphones size={16} className="text-purple-700" />
            <span className="text-sm font-medium text-purple-700">Experience It Yourself</span>
          </motion.div>

          <motion.h2
            id="demo-experience-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Don't Take Our Word For It. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Try It Yourself.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            The #1 question we get: "Does it actually sound real?" 
            <strong className="text-white"> Judge for yourself.</strong>
          </motion.p>
        </header>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'call' | 'listen' | 'video')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-accent/20'
                    : 'bg-white/5 text-gray-600 hover:bg-white/10 hover:text-white border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* Call Our AI Tab */}
          {activeTab === 'call' && (
            <motion.div
              key="call"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 border-2 border-accent/30 rounded-2xl p-8 relative overflow-hidden">
                {/* Live indicator */}
                <div className="absolute top-6 right-6">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center">
                    <PhoneCall size={32} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Call Our AI Right Now</h3>
                    <p className="text-gray-600">Experience it firsthand • Available 24/7</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Call our demo line and pretend you're a customer. Ask about appointments, pricing, hours—anything. 
                  <span className="text-white font-medium"> See how natural it sounds.</span>
                </p>

                {/* Phone Number Display */}
                <div className="bg-white/50 border border-gray-200 rounded-xl p-6 mb-6 text-center">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Demo Line</p>
                  <a 
                    href={`tel:${demoPhoneNumberRaw}`}
                    className="text-4xl md:text-5xl font-bold text-white hover:text-purple-700 transition-colors"
                  >
                    {demoPhoneNumber}
                  </a>
                </div>

                {/* Call button */}
                <a
                  href={`tel:${demoPhoneNumberRaw}`}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 hover:bg-purple-600-dark text-white rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  <Phone size={24} />
                  Call Now (It's Free)
                </a>

                <p className="text-sm text-neutral-500 text-center mt-4">
                  💡 Try asking: "Do you have any appointments tomorrow?" or "What are your hours?"
                </p>

                {/* VAPI Widget Note */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-neutral-500 text-center">
                    💬 Prefer to chat? Click the purple button in the bottom right to chat or call our AI instantly →
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Listen to Samples Tab */}
          {activeTab === 'listen' && (
            <motion.div
              key="listen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto space-y-4"
            >
              <div className="flex items-center gap-2 mb-6">
                <Volume2 size={20} className="text-purple-700" />
                <h3 className="text-lg font-semibold text-white">Real AI Call Recordings</h3>
              </div>

              {callSamples.map((sample, index) => (
                <motion.div
                  key={sample.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gray-50/50 border rounded-xl p-4 cursor-pointer transition-all hover:bg-gray-50/80 ${
                    activeAudio === sample.id 
                      ? 'border-accent/50 bg-purple-600/5' 
                      : 'border-gray-200 hover:border-white/20'
                  }`}
                  onClick={() => handlePlaySample(sample.id)}
                >
                  <div className="flex items-start gap-4">
                    <button
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        activeAudio === sample.id && isPlaying
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/10 text-white hover:bg-purple-600/20'
                      }`}
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
                      <p className="text-xs text-purple-700 mb-1">{sample.industry}</p>
                      <p className="text-xs text-gray-600 line-clamp-2">{sample.description}</p>

                      {activeAudio === sample.id && (
                        <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-600 transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Watch Demo Tab */}
          {activeTab === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM1MjUyNTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5EZW1vIFZpZGVvIFRodW1ibmFpbDwvdGV4dD48L3N2Zz4=')] bg-cover bg-center opacity-20" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-32 h-32 bg-purple-600/20 rounded-full animate-ping" />
                      <div className="absolute w-24 h-24 bg-purple-600/30 rounded-full animate-pulse" />
                    </div>

                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-600-dark text-white transition-all hover:scale-110 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                    >
                      <Play size={32} className="ml-1" fill="white" />
                    </button>

                    <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                      2:14
                    </div>

                    <div className="absolute top-6 left-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                      🔊 Real Call Recording
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <iframe
                      src={`${videoUrl}?autoplay=1`}
                      title="Autoquill AI Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black text-white transition-all z-10"
                    >
                      <X size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4 bg-gray-50/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-purple-700 mb-1">&lt;500ms</div>
            <div className="text-xs text-gray-600">Response Time</div>
          </div>
          <div className="p-4 bg-gray-50/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-purple-700 mb-1">97%</div>
            <div className="text-xs text-gray-600">Can't Tell It's AI</div>
          </div>
          <div className="p-4 bg-gray-50/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-purple-700 mb-1">50+</div>
            <div className="text-xs text-gray-600">Voice Options</div>
          </div>
          <div className="p-4 bg-gray-50/30 border border-white/5 rounded-xl">
            <div className="text-2xl font-bold text-purple-700 mb-1">24/7</div>
            <div className="text-xs text-gray-600">Always Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Convinced? Get your own AI agent—<span className="text-white font-semibold">completely free.</span>
          </p>
          <button
            onClick={() => onNavigate?.('free-agent')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-600-dark text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-accent/20 inline-flex items-center gap-2"
          >
            <Sparkles size={18} />
            Get Your Free Agent
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

