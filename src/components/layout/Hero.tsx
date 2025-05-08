import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-10 sm:py-16 md:py-20">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Transform Software Assets</span>
              <span className="block text-primary-600 dark:text-primary-400">Into Liquid Capital</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 md:mt-5">
              SoftSell helps businesses recover value from unused software licenses. Our platform makes it easy to assess, list, and sell your digital assets quickly and securely.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="rounded-md shadow">
                <a href="#contact" className="btn-primary flex items-center justify-center w-full px-6 py-3">
                  Sell My Licenses
                </a>
              </div>
              <div className="mt-3 sm:mt-0">
                <a href="#how-it-works" className="btn-secondary flex items-center justify-center w-full px-6 py-3">
                  Learn How
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 lg:mt-0 lg:col-span-5 w-full max-w-md mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center h-48 sm:h-56 md:h-64">
                <div className="text-center text-white px-4">
                  <svg className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-3 sm:mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg sm:text-xl font-bold">Average recovery: 70% of license value</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;