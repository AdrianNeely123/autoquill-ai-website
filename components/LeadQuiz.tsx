import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, ArrowRight, Sparkles, Calculator, Phone, 
  ChevronLeft, Zap, Target, Clock, CheckCircle,
  DollarSign, Users, TrendingUp
} from 'lucide-react';
import type { Page } from '../types';

interface LeadQuizProps {
  onNavigate: (page: Page) => void;
  onClose: () => void;
}

type QuizStage = 'intro' | 'q1' | 'q2' | 'result';
type BusinessStage = 'exploring' | 'comparing' | 'ready' | null;
type MainPain = 'missed-calls' | 'cost' | 'quality' | null;

interface QuizResult {
  title: string;
  description: string;
  cta: string;
  action: () => void;
  icon: React.ElementType;
  color: string;
}

export const LeadQuiz: React.FC<LeadQuizProps> = ({ onNavigate, onClose }) => {
  const [stage, setStage] = useState<QuizStage>('intro');
  const [businessStage, setBusinessStage] = useState<BusinessStage>(null);
  const [mainPain, setMainPain] = useState<MainPain>(null);

  const getResult = (): QuizResult => {
    // Logic to determine the best lead magnet based on answers
    
    // Exploring + any pain = ROI Calculator (show them the problem)
    if (businessStage === 'exploring') {
      return {
        title: "Start with Your ROI Report",
        description: "Let's calculate exactly how much revenue you're losing to missed calls. This personalized report will show you the real cost of your current setup.",
        cta: "Calculate My Lost Revenue",
        action: () => {
          onClose();
          setTimeout(() => {
            const element = document.getElementById('roi-calculator');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        },
        icon: Calculator,
        color: 'from-blue-500 to-cyan-500'
      };
    }
    
    // Comparing + cost concern = ROI Calculator
    if (businessStage === 'comparing' && mainPain === 'cost') {
      return {
        title: "See the Numbers First",
        description: "Smart move comparing options! Our ROI calculator will show you exactly what AI reception costs vs. human receptionists, answering services, and doing nothing.",
        cta: "Compare the Costs",
        action: () => {
          onClose();
          setTimeout(() => {
            const element = document.getElementById('roi-calculator');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        },
        icon: DollarSign,
        color: 'from-green-500 to-emerald-500'
      };
    }
    
    // Comparing + missed calls or quality = Mystery Call Audit
    if (businessStage === 'comparing' && (mainPain === 'missed-calls' || mainPain === 'quality')) {
      return {
        title: "Get Your Free Mystery Call Audit",
        description: "We'll call your business like a real customer and give you a detailed report on what callers actually experience. See exactly where you're losing leads.",
        cta: "Audit My Phone Experience",
        action: () => {
          onClose();
          setTimeout(() => {
            const element = document.getElementById('phone-audit');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        },
        icon: Phone,
        color: 'from-orange-500 to-amber-500'
      };
    }
    
    // Ready = Free Agent (they're ready to try)
    if (businessStage === 'ready') {
      return {
        title: "Get Your Free AI Agent",
        description: "Perfect! You're ready to experience AI reception firsthand. We'll set up a free FAQ agent for your business—no credit card, no commitment.",
        cta: "Claim My Free Agent",
        action: () => {
          onClose();
          onNavigate('free-agent');
        },
        icon: Sparkles,
        color: 'from-accent to-purple-500'
      };
    }
    
    // Default fallback = Free Agent
    return {
      title: "Try It Free",
      description: "The best way to understand AI reception is to experience it. Get a free FAQ agent set up for your business in minutes.",
      cta: "Get Started Free",
      action: () => {
        onClose();
        onNavigate('free-agent');
      },
      icon: Sparkles,
      color: 'from-accent to-purple-500'
    };
  };

  const handleQ1Answer = (answer: BusinessStage) => {
    setBusinessStage(answer);
    if (answer === 'ready') {
      // Skip Q2, go straight to result
      setStage('result');
    } else {
      setStage('q2');
    }
  };

  const handleQ2Answer = (answer: MainPain) => {
    setMainPain(answer);
    setStage('result');
  };

  const goBack = () => {
    if (stage === 'q2') setStage('q1');
    else if (stage === 'result' && businessStage !== 'ready') setStage('q2');
    else if (stage === 'result' && businessStage === 'ready') setStage('q1');
    else if (stage === 'q1') setStage('intro');
  };

  const result = getResult();
  const ResultIcon = result.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-title"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-gray-50 border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-500"
            initial={{ width: '0%' }}
            animate={{ 
              width: stage === 'intro' ? '0%' : 
                     stage === 'q1' ? '33%' : 
                     stage === 'q2' ? '66%' : '100%' 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-600 hover:text-gray-900 transition-colors z-10"
          aria-label="Close quiz"
        >
          ×
        </button>

        {/* Back button */}
        {stage !== 'intro' && (
          <button
            onClick={goBack}
            className="absolute top-4 left-4 flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors z-10"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        )}

        <div className="p-8 pt-12">
          <AnimatePresence mode="wait">
            {/* Intro */}
            {stage === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-600/10 flex items-center justify-center">
                  <Target size={32} className="text-accent" />
                </div>
                
                <h3 id="quiz-title" className="text-2xl font-bold text-gray-900 mb-3">
                  Let's Find Your Perfect Starting Point
                </h3>
                
                <p className="text-gray-600 mb-8">
                  Answer 2 quick questions and we'll recommend the best way for you to get started with AI reception.
                </p>

                <div className="flex items-center justify-center gap-6 mb-8 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>30 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} />
                    <span>Personalized result</span>
                  </div>
                </div>

                <button
                  onClick={() => setStage('q1')}
                  className="w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  Let's Go
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Question 1: Where are you in your journey? */}
            {stage === 'q1' && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                  Question 1 of 2
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Where are you in your AI reception journey?
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={() => handleQ1Answer('exploring')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <HelpCircle size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Just exploring</p>
                        <p className="text-sm text-gray-600">I'm curious about AI reception but haven't decided if it's right for me</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleQ1Answer('comparing')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                        <TrendingUp size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Comparing options</p>
                        <p className="text-sm text-gray-600">I know I need a solution, but I'm evaluating different approaches</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleQ1Answer('ready')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <Zap size={20} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Ready to try it</p>
                        <p className="text-sm text-gray-600">I want to see AI reception in action for my business</p>
                      </div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Question 2: What's your main concern? */}
            {stage === 'q2' && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                  Question 2 of 2
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  What's your biggest phone challenge right now?
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={() => handleQ2Answer('missed-calls')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                        <Phone size={20} className="text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Missing too many calls</p>
                        <p className="text-sm text-gray-600">Calls go to voicemail when I'm busy, after hours, or on weekends</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleQ2Answer('cost')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <DollarSign size={20} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Reception costs too much</p>
                        <p className="text-sm text-gray-600">Hiring staff or using an answering service is expensive</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleQ2Answer('quality')}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 border border-gray-200 hover:border-accent/30 rounded-xl text-left transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                        <Users size={20} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Inconsistent caller experience</p>
                        <p className="text-sm text-gray-600">Different people answer differently, or callers wait too long</p>
                      </div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Result */}
            {stage === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${result.color} flex items-center justify-center`}>
                  <ResultIcon size={32} className="text-gray-900" />
                </div>

                <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                  Your Recommended Starting Point
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {result.title}
                </h3>
                
                <p className="text-gray-600 mb-8">
                  {result.description}
                </p>

                <button
                  onClick={result.action}
                  className={`w-full px-6 py-4 bg-gradient-to-r ${result.color} hover:opacity-90 text-gray-900 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg`}
                >
                  {result.cta}
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-xs text-neutral-500">
                  Or <button onClick={onClose} className="text-accent hover:underline">skip and explore on your own</button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

