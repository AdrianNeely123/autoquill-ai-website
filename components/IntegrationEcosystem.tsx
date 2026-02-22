import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Database, Users, MessageSquare, Zap } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import ScrollReveal from './ui/ScrollReveal';

interface Integration {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const integrations: Integration[] = [
  {
    name: 'Calendly',
    description: 'Auto-book appointments',
    icon: Calendar,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'HubSpot',
    description: 'Sync contacts & deals',
    icon: Database,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Google Calendar',
    description: 'Check availability',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Salesforce',
    description: 'Update CRM records',
    icon: Users,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Slack',
    description: 'Instant notifications',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Zapier',
    description: 'Connect 5000+ apps',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }
];

interface CustomIntegration {
  name: string;
  description: string;
  color: string;
}

interface IntegrationEcosystemProps {
  integrations?: CustomIntegration[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export const IntegrationEcosystem: React.FC<IntegrationEcosystemProps> = ({
  integrations: customIntegrations,
  sectionTitle,
  sectionSubtitle
}) => {
  const resolvedIntegrations: Integration[] = customIntegrations
    ? customIntegrations.map(ci => ({
        name: ci.name,
        description: ci.description,
        icon: Zap,
        color: ci.color
      }))
    : integrations;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {sectionTitle || 'Connects to Your Entire Stack'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {sectionSubtitle || 'Seamlessly integrate with the tools you already use'}
            </p>
          </div>
        </ScrollReveal>

        {/* Central Hub */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mb-12">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Central node */}
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">AutoQuill AI</h3>
                    <p className="text-purple-100 text-sm">Central Hub</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resolvedIntegrations.map((integration, index) => {
            const Icon = integration.icon;

            return (
              <ScrollReveal key={integration.name} delay={300 + index * 100}>
                <SpotlightCard className="h-full">
                  <motion.div
                    className="p-6 h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Connected indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${integration.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Animated connection status */}
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                        <span className="text-xs text-green-500 font-medium">Connected</span>
                      </div>
                    </div>

                    {/* Integration info */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {integration.name}
                      </h4>
                      <p className="text-gray-600">
                        {integration.description}
                      </p>
                    </div>

                    {/* Data flow indicator */}
                    <motion.div
                      className="mt-4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                      style={{
                        backgroundSize: '200% 100%'
                      }}
                    />
                  </motion.div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={800}>
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              Plus hundreds more through Zapier and Make.com integrations
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntegrationEcosystem;
