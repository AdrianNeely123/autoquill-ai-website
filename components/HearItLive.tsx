import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { ScrollReveal } from './ui/ScrollReveal';
import { WaveformVisualizer } from './ui/WaveformVisualizer';
import { ShineButton } from './ui/ShineButton';
import { trackCTAClick, CTA_NAMES } from '../utils/analytics';

interface DemoCard {
  id: string;
  industry: string;
  scenario: string;
  description: string;
  duration: string;
  imageSrc: string;
  audioSrc: string;
}

const demoCards: DemoCard[] = [
  {
    id: 'dental',
    industry: 'Dental Practice',
    scenario: 'Patient Scheduling Call',
    description: 'Friendly AI assistant books cleaning appointment and answers insurance questions',
    duration: '0:42',
    imageSrc: '/images/dental-receptionist.jpg',
    audioSrc: '/audio/dental-demo.mp3',
  },
  {
    id: 'hvac',
    industry: 'HVAC Company',
    scenario: 'Emergency Service Call',
    description: 'Professional AI dispatcher schedules urgent AC repair and collects customer details',
    duration: '0:38',
    imageSrc: '/images/hvac-dispatcher.jpg',
    audioSrc: '/audio/hvac-demo.mp3',
  },
  {
    id: 'plumbing',
    industry: 'Plumbing',
    scenario: 'After-Hours Emergency',
    description: '24/7 AI receptionist handles burst pipe emergency and dispatches on-call plumber',
    duration: '0:51',
    imageSrc: '/images/plumbing-receptionist.jpg',
    audioSrc: '/audio/plumbing-demo.mp3',
  },
  {
    id: 'medspa',
    industry: 'Med Spa',
    scenario: 'Consultation Booking',
    description: 'Knowledgeable AI books Botox consultation and explains treatment options',
    duration: '0:47',
    imageSrc: '/images/medspa-receptionist.jpg',
    audioSrc: '/audio/medspa-demo.mp3',
  },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

interface HearItLiveProps {
  industryFilter?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export const HearItLive: React.FC<HearItLiveProps> = ({ industryFilter, sectionTitle, sectionSubtitle }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Wire up audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setPlayingId(null);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const handlePlayPause = useCallback((card: DemoCard) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playingId === card.id) {
      // Pause current
      audio.pause();
      setPlayingId(null);
    } else {
      // Switch to new card or start playing
      if (audio.src !== window.location.origin + card.audioSrc) {
        audio.src = card.audioSrc;
        audio.load();
        setCurrentTime(0);
        setDuration(0);
      }
      audio.play().catch(() => {
        // Autoplay blocked — user interaction required
      });
      setPlayingId(card.id);
    }
  }, [playingId]);

  const handleCTAClick = () => {
    trackCTAClick(CTA_NAMES.BOOK_CALL, 'hear-it-live-section');
    window.open('https://calendly.com/adrian-autoquillai/30min', '_blank');
  };

  const filteredCards = industryFilter
    ? demoCards.filter(card => card.id === industryFilter)
    : demoCards;
  const isSingleCard = filteredCards.length === 1;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle || 'Hear the Difference'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle || 'Listen to real AI conversations across industries'}
          </p>
        </ScrollReveal>

        {/* Demo Cards Grid */}
        <div className={isSingleCard ? "max-w-xl mx-auto mb-12" : "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"}>
          {filteredCards.map((card, index) => {
            const isPlaying = playingId === card.id;
            const progress = isPlaying && duration > 0 ? (currentTime / duration) * 100 : 0;

            return (
              <ScrollReveal
                key={card.id}
                delay={index * 100}
                direction="up"
              >
                <SpotlightCard className="h-full" spotlightColor="rgba(139, 92, 246, 0.15)">
                  <div className="relative p-6 bg-white rounded-xl border border-gray-200 h-full flex flex-col">
                    {/* Photo & Industry */}
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={card.imageSrc}
                        alt={card.industry}
                        className="w-14 h-14 rounded-full object-cover border-2 border-purple-200 flex-shrink-0"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {card.industry}
                        </h3>
                        <p className="text-sm text-purple-600 font-medium">
                          {card.scenario}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 flex-1">
                      {card.description}
                    </p>

                    {/* Audio Controls */}
                    <div className="space-y-4">
                      {/* Waveform Visualizer */}
                      <div className="bg-gray-100 rounded-lg p-4 border border-gray-200 relative overflow-hidden">
                        <WaveformVisualizer
                          isPlaying={isPlaying}
                          barCount={40}
                          className="h-16"
                        />
                        {/* Progress bar */}
                        {isPlaying && duration > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                            <div
                              className="h-full bg-purple-600 transition-all duration-200"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Play/Pause Button & Duration */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handlePlayPause(card)}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors duration-200 group"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                          )}
                          <span className="font-medium">
                            {isPlaying ? 'Pause' : 'Play'}
                          </span>
                        </button>
                        <span className="text-gray-500 font-mono text-sm">
                          {isPlaying && duration > 0
                            ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                            : card.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400} className="text-center">
          <ShineButton
            onClick={handleCTAClick}
            variant="primary"
            className="text-lg px-8 py-4"
          >
            Want to hear YOUR AI agent? Book a demo.
          </ShineButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HearItLive;
