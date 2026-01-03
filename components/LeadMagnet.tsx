import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Loader2, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface LeadMagnetContent {
  title: string;
  subtitle: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
  bonusTip: string;
}

const leadMagnetContent: Record<string, LeadMagnetContent> = {
  dentists: {
    title: '7 Questions Your Front Desk Should Never Miss',
    subtitle: 'The Dental Practice Call Checklist',
    description: 'These 7 questions turn phone inquiries into booked patients. Most practices miss at least 3 of them.',
    items: [
      {
        title: '1. "Is this your first time calling us?"',
        description: 'New patients need different handling than existing ones. New patients should be prioritized and given extra attention—they\'re evaluating you against competitors.',
      },
      {
        title: '2. "What prompted your call today?"',
        description: 'Understanding urgency helps prioritize. A chipped tooth from yesterday is different from a toothache that\'s been bothering them for months. Emergencies = same-day appointments.',
      },
      {
        title: '3. "Do you have dental insurance?"',
        description: 'Ask early, not at checkout. Collect insurance info upfront so you can verify benefits before they arrive. Reduces no-shows and billing surprises.',
      },
      {
        title: '4. "What times generally work best for you?"',
        description: 'Don\'t just offer one slot. Give 2-3 options across different days/times. "Would Tuesday at 2pm or Thursday at 10am work better?" increases booking rates by 40%.',
      },
      {
        title: '5. "Have you seen a dentist in the last 6 months?"',
        description: 'Patients who haven\'t been seen recently may need more comprehensive exams. This helps schedule appropriate appointment length and set expectations.',
      },
      {
        title: '6. "How did you hear about us?"',
        description: 'Track your marketing ROI. Google? Referral? Instagram? This data is gold for knowing where to spend your marketing budget.',
      },
      {
        title: '7. "Can I get your cell phone for appointment reminders?"',
        description: 'SMS reminders reduce no-shows by 38%. Always ask for cell specifically—landlines can\'t receive texts.',
      },
    ],
    bonusTip: 'Pro tip: Train your front desk to smile while talking on the phone. Callers can literally hear the difference in your voice. It increases booking rates by up to 15%.',
  },
  hvac: {
    title: 'Emergency Call Handling Scripts',
    subtitle: 'The HVAC Dispatcher\'s Playbook',
    description: 'Handle emergency calls like a pro. These scripts help you qualify jobs, dispatch faster, and capture more revenue.',
    items: [
      {
        title: '1. The Emergency Qualifier',
        description: '"I understand this is urgent. To get a technician to you as fast as possible, I need to ask a few quick questions. Is your system completely not working, or is it running but not cooling/heating properly?" This determines true emergency vs. service call.',
      },
      {
        title: '2. The Safety Check',
        description: '"Do you smell gas, see smoke, or hear any unusual sounds like hissing or banging?" Always ask this first for liability and safety. If yes, advise them to leave the home and call 911 if gas smell.',
      },
      {
        title: '3. The Equipment ID',
        description: '"Can you tell me the brand of your unit? There\'s usually a label on the front panel." Knowing the brand helps your tech bring the right parts and gives accurate ETAs.',
      },
      {
        title: '4. The Age Question',
        description: '"Do you know approximately how old your system is?" Units 15+ years old may need replacement discussion. Under 10 years = likely repair. This sets customer expectations.',
      },
      {
        title: '5. The Dispatch Script',
        description: '"I have a technician available who can be there between [TIME WINDOW]. The diagnostic fee is $XX, which is waived if you proceed with repairs. Does that work for you?"',
      },
      {
        title: '6. The Callback Capture',
        description: '"If we can\'t reach you when the tech is on the way, what\'s the best number to text? And is there a gate code or anything our tech should know about accessing your property?"',
      },
      {
        title: '7. The Confirmation Close',
        description: '"Perfect, you\'re all set. You\'ll receive a text confirmation shortly with your tech\'s name and photo. Is there anything else I can help you with today?"',
      },
    ],
    bonusTip: 'Pro tip: During peak season, offer a "callback list" for non-emergencies. "We\'re fully booked today, but I can put you first on tomorrow\'s list and call you as soon as a slot opens." This captures leads you\'d otherwise lose.',
  },
  plumbers: {
    title: 'The Plumber\'s Call Capture Checklist',
    subtitle: '5 Questions That Double Your Booking Rate',
    description: 'Stop losing jobs to voicemail. These 5 questions help you qualify leads, set expectations, and book more jobs—even when you\'re under a sink.',
    items: [
      {
        title: '1. "What\'s happening right now?"',
        description: 'Let them describe the problem in their own words. Listen for keywords: "flooding," "won\'t stop," "sewage smell" = emergency. "Slow drain," "dripping" = can schedule. Match urgency to response.',
      },
      {
        title: '2. "Is the water currently shut off?"',
        description: 'For leaks and floods, this is critical. If they say no, walk them through shutting off the main. This prevents further damage AND shows you\'re helpful before you even arrive.',
      },
      {
        title: '3. "Is this a house, condo, or apartment?"',
        description: 'Apartments/condos may need HOA approval or have restrictions. Houses give you more flexibility. This also hints at job complexity—older houses often mean older pipes.',
      },
      {
        title: '4. "Have you had plumbing work done on this before?"',
        description: 'Previous repairs = potential warranty issues or recurring problems. "Yeah, someone fixed this last year" tells you to look for shoddy work. "Never had issues" = likely straightforward job.',
      },
      {
        title: '5. "What\'s your timeline—do you need this today?"',
        description: 'Don\'t assume urgency. Some people are planning ahead. "My toilet runs but it\'s not urgent" = can schedule for slower days. Let them tell you their priority level.',
      },
    ],
    bonusTip: 'Pro tip: Always give a 2-hour arrival window, not an exact time. "I\'ll be there between 2-4pm" is realistic. "I\'ll be there at 3pm" sets you up to disappoint when the previous job runs long.',
  },
  medspa: {
    title: 'Med Spa Inquiry Response Templates',
    subtitle: 'Luxury Scripts That Convert',
    description: 'Your clients expect premium service from the first interaction. These response templates help you sound polished, answer treatment questions confidently, and book more consultations.',
    items: [
      {
        title: '1. The Warm Welcome',
        description: '"Thank you for calling [Spa Name], this is [Name]. How may I help you today?" Pause and listen. Don\'t rush. Premium service means making them feel unhurried.',
      },
      {
        title: '2. The Treatment Inquiry Response',
        description: '"Great question about [treatment]. Many of our clients come to us for exactly that. The best way to determine if it\'s right for you is a complimentary consultation with one of our providers. They\'ll assess your goals and create a personalized treatment plan. Would you like me to schedule that for you?"',
      },
      {
        title: '3. The Pricing Question Handler',
        description: '"[Treatment] typically ranges from $X to $Y depending on the treatment area and number of sessions needed. Most clients see optimal results with [X] sessions. Our consultations are complimentary, and we can give you an exact quote after assessing your specific needs. What day works best for you to come in?"',
      },
      {
        title: '4. The New Client Welcome',
        description: '"Welcome! Since this is your first visit, I\'ll send you our new client forms to complete before your appointment—it saves time when you arrive. We also have a special offer for new clients: [offer]. Can I get your email to send that over?"',
      },
      {
        title: '5. The Deposit Collection Script',
        description: '"To reserve your consultation with [Provider], we do collect a $[X] deposit that\'s applied to any treatment you book. This ensures we can hold that time exclusively for you. I can take that over the phone now, or you can pay when you arrive. Which would you prefer?"',
      },
      {
        title: '6. The Follow-Up Booking',
        description: '"Based on your treatment plan, your next session should be in [X] weeks. I have availability on [date] at [time] or [date] at [time]. Which works better for your schedule?" Always book the next appointment before they leave.',
      },
      {
        title: '7. The Objection Handler',
        description: '"I completely understand wanting to think about it. Many of our clients felt the same way before their consultation. Would it help if I sent you some before-and-after photos of similar treatments? And I can tentatively hold a consultation spot for you—no obligation—while you decide."',
      },
    ],
    bonusTip: 'Pro tip: Use the client\'s name at least twice during the call. "Sarah, I think you\'ll love the results" feels more personal than generic responses. It signals premium, personalized service.',
  },
  lawyers: {
    title: 'Legal Intake Best Practices',
    subtitle: 'The Law Firm\'s First Call Playbook',
    description: 'The first call determines whether a potential client hires you or your competitor. These intake best practices help you qualify cases, build trust, and schedule more consultations.',
    items: [
      {
        title: '1. The Professional Greeting',
        description: '"Thank you for calling [Firm Name], this is [Name]. How may I direct your call?" For intake: "I\'d be happy to help you get started. May I ask what type of legal matter you\'re calling about?"',
      },
      {
        title: '2. The Matter Type Qualifier',
        description: 'Determine if it\'s a case type you handle BEFORE going deeper. "We focus on [practice areas]. It sounds like your matter involves [X]—is that correct?" If outside your scope, have referral partners ready.',
      },
      {
        title: '3. The Conflict Check Setup',
        description: '"Before we discuss details, I need to collect some information for our conflict check. Can you tell me the names of all parties involved?" Get: opposing party names, any companies involved, incident location. Run conflicts BEFORE the consultation.',
      },
      {
        title: '4. The Timeline Question',
        description: '"When did this incident occur?" or "When did you first become aware of this issue?" Statute of limitations matters. If they\'re close to a deadline, escalate urgency.',
      },
      {
        title: '5. The Urgency Detector',
        description: '"Is there a court date, deadline, or hearing coming up that we should know about?" Pending deadlines require immediate attorney attention. Don\'t let these sit in the intake queue.',
      },
      {
        title: '6. The Consultation Scheduling Script',
        description: '"Based on what you\'ve shared, I\'d like to schedule a consultation with one of our attorneys who specializes in [practice area]. We have availability [date/time] or [date/time]. The consultation fee is $[X], which is credited toward your retainer if you decide to proceed. Which time works for you?"',
      },
      {
        title: '7. The Document Request',
        description: '"To make the most of your consultation, please bring any documents related to your case—contracts, correspondence, police reports, medical records, etc. I\'ll send you a confirmation email with a checklist and our office location."',
      },
    ],
    bonusTip: 'Pro tip: Never give legal advice during intake. Use phrases like "The attorney will be able to advise you on that" or "That\'s exactly the kind of question to discuss in your consultation." This protects the firm and maintains the value of the paid consultation.',
  },
};

interface LeadMagnetProps {
  industry: string;
  onClose?: () => void;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ industry, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'form' | 'loading' | 'content'>('form');
  const content = leadMagnetContent[industry];

  if (!content) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Send to backend
    try {
      await fetch('https://adrianworksapce.app.n8n.cloud/webhook/website-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          type: 'lead-magnet-download',
          industry,
          leadMagnet: content.title 
        })
      });
    } catch (error) {
      console.error('Submission failed', error);
    }
    
    // Show content regardless of API success
    setTimeout(() => setStatus('content'), 500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-3xl">
        
        {status === 'form' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <FileText size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Free Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              {content.description}
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto bg-neutral-900/50 border border-white/10 rounded-2xl p-8">
              <h2 className="text-lg font-bold text-white mb-2">
                Get Instant Access
              </h2>
              <p className="text-sm text-neutral-400 mb-6">
                Enter your email and we'll show you the guide immediately.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Download size={18} />
                  Get the Guide
                </button>
              </form>

              <p className="text-xs text-neutral-500 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Preview of what they'll get */}
            <div className="mt-12 text-left">
              <p className="text-sm text-neutral-500 mb-4 text-center">What's inside:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.items.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-neutral-900/30 border border-white/5 rounded-lg">
                    <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-300">{item.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-neutral-500 mt-4">
                + {content.items.length - 4} more...
              </p>
            </div>
          </motion.div>
        )}

        {status === 'loading' && (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 size={48} className="text-accent animate-spin mb-4" />
            <p className="text-neutral-400">Preparing your guide...</p>
          </div>
        )}

        {status === 'content' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm font-medium text-green-400">Access Granted</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {content.title}
              </h1>
              <p className="text-lg text-accent">{content.subtitle}</p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {content.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/40 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}

              {/* Bonus Tip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: content.items.length * 0.1 }}
                className="bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <Sparkles size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Bonus Tip</h3>
                    <p className="text-neutral-200 leading-relaxed">{content.bonusTip}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center bg-neutral-900/50 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Want to automate all of this?
              </h3>
              <p className="text-neutral-400 mb-6">
                Autoquill AI handles these conversations 24/7—so you never miss a lead.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => window.location.hash = '/free-agent'}
                  className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg flex items-center gap-2 transition-all"
                >
                  Get Your Free AI Agent
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => window.open('https://calendly.com/adrian-autoquillai/30min', '_blank')}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

