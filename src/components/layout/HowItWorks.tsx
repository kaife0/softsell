import { motion } from 'framer-motion';
import { 
  ArrowUpTrayIcon, 
  CalculatorIcon, 
  BanknotesIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Upload License',
      description: 'Provide details about your software licenses through our secure portal.',
      icon: ArrowUpTrayIcon,
    },
    {
      id: 2,
      title: 'Get Valuation',
      description: 'Our AI-powered system analyzes market value and provides an instant valuation.',
      icon: CalculatorIcon,
    },
    {
      id: 3,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment within 48 hours through your preferred method.',
      icon: BanknotesIcon,
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container py-16">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Turn your unused software licenses into cash in three simple steps
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 sm:p-8 shadow-md text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              
              {/* Add arrow between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-1/2 z-20 justify-center items-center w-12 h-12">
                  <svg className="h-8 w-8 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              
              {/* Mobile step indicator */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-4">
                  <svg className="h-8 w-8 text-gray-400 dark:text-gray-500 rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;