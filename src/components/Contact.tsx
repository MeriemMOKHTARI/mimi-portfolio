
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Your City, Country", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in tech, cybersecurity, or AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300 resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30"
            >
              <h3 className="text-xl font-bold text-white mb-3">Let's Work Together</h3>
              <p className="text-gray-300">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
