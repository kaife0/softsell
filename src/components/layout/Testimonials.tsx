import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "SoftSell transformed our IT budget constraints into an opportunity. We recovered nearly 80% of our investment on unused enterprise licenses, which funded our cloud migration project.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Nexus Technologies"
    },
    {
      id: 2,
      content: "The valuation process was impressively quick and the payment arrived within 24 hours. SoftSell's platform is intuitive and their customer service team was extremely helpful throughout.",
      author: "Michael Chen",
      role: "IT Director",
      company: "Globalex Solutions"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't take our word for it - hear from the businesses we've helped
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.content}"</blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;