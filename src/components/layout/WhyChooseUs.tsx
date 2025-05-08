import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BanknotesIcon, 
  ClockIcon,
  DocumentCheckIcon 
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      name: 'Secure Transactions',
      description: 'Our platform uses enterprise-grade encryption and secure payment gateways to protect your financial data.',
      icon: ShieldCheckIcon,
    },
    {
      id: 2,
      name: 'Best Market Value',
      description: 'Our AI-powered pricing algorithm ensures you receive the maximum value for your software licenses.',
      icon: BanknotesIcon,
    },
    {
      id: 3,
      name: 'Fast Processing',
      description: 'Most transactions are completed within 48 hours, with payment directly deposited to your account.',
      icon: ClockIcon,
    },
    {
      id: 4,
      name: 'Legal Compliance',
      description: 'Our legal team ensures all transactions comply with software licensing regulations and transfer laws.',
      icon: DocumentCheckIcon,
    },
  ];

  return (
    <section id="whychooseus" className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p 
            className="mt-2 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The trusted platform for businesses looking to recover value from unused software
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-md bg-primary-100 dark:bg-primary-900 p-2 w-12 h-12 mb-4 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{feature.name}</h3>
              <p className="mt-1 text-base text-gray-600 dark:text-gray-300 flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;