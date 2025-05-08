import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>();

  const licenseTypes = [
    "Enterprise Software",
    "Creative/Design Tools",
    "Development Tools",
    "Cloud Services",
    "Security Solutions",
    "Productivity Software",
    "Other"
  ];

  const onSubmit = (data: FormData) => {
    // In a real application, this would send data to a backend
    console.log(data);
    // Simulate network delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setFormSubmitted(true);
        resolve();
      }, 800);
    });
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
              Ready to Sell Your Licenses?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Fill out the form and our team will get back to you within 24 hours with a valuation
              and next steps.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    No obligation to sell
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Free license valuation
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Secure and confidential process
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0 lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {formSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg shadow-md">
                <svg className="h-12 w-12 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-medium text-green-800 dark:text-green-200 text-center">Thank you for your submission!</h3>
                <p className="mt-2 text-green-700 dark:text-green-300 text-center">
                  We've received your information and will contact you shortly with a valuation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 gap-y-5 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        autoComplete="name"
                        className={`py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm rounded-md ${
                          errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                        } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        {...register('email', { 
                          required: 'Email is required', 
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        id="email"
                        autoComplete="email"
                        className={`py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm rounded-md ${
                          errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                        } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        {...register('company', { required: 'Company is required' })}
                        type="text"
                        id="company"
                        autoComplete="organization"
                        className={`py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm rounded-md ${
                          errors.company ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                        } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.company.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      License Type
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('licenseType', { required: 'Please select a license type' })}
                        id="licenseType"
                        className={`py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm rounded-md ${
                          errors.licenseType ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                        } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      >
                        <option value="">Select a type</option>
                        {licenseTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.licenseType && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.licenseType.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        rows={4}
                        className={`py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm rounded-md ${
                          errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                        } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex justify-center items-center py-2 sm:py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Get a Quote"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;