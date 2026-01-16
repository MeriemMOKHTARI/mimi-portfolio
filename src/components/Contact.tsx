
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mokhtari.meriem000@gmail.com",
      link: "mailto:mokhtari.meriem000@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 562 337 784",
      link: "tel:+213562337784"
    },//
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Meriem Mokhtari",
      link: "https://www.linkedin.com/in/meriem-mokhtari-577808267/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MeriemMOKHTARI",
      link: "https://github.com/MeriemMOKHTARI"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate to turn your ideas into exceptional digital solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.link}
                      target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                      rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-pink-300 font-semibold">{contact.label}</p>
                        <p className="text-gray-300">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-pink-400/30 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-rose-600/30 rounded-full blur-xl"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always excited to take on new challenges and collaborate on innovative projects. 
                    Whether you need mobile app development, web solutions, cybersecurity consulting, 
                    or AI implementation, I'm here to help bring your vision to life.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">Available for freelance projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">Open to full-time opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">Consulting and technical expertise</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-lg border border-pink-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="w-5 h-5 text-pink-400" />
                      <span className="text-white font-semibold">Based in Algeria</span>
                    </div>
                    <p className="text-gray-300 text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
