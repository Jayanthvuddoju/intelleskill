import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

const ContactForm = ({ isModal = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const roles = [
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Working Professional' },
    { value: 'institution', label: 'Institution' }
  ];

  const handleRoleSelect = (value) => {
    setFormData(prev => ({ ...prev, role: value }));
    setIsRoleOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzik91pu5-9a1S9Hi7GzsgVQQg_2kuVMYpeNiYLj-znwYVg9ocVhq9rD20Ya9z9UUaT/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', role: '', message: '' });
      if (onSuccess) setTimeout(onSuccess, 3000);
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please check your connection.');
    }
  };

  const inputClasses = `w-full bg-white/10 border border-white/10 rounded-xl ${isModal ? 'px-4 py-2.5' : 'px-4 py-3'} outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all font-light text-white placeholder:text-white/20 text-sm md:text-base`;
  const labelClasses = "text-xs md:text-sm font-medium text-slate-300 ml-1";

  return (
    <div className={`${isModal ? '' : 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden'}`}>
      {!isModal && (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        </>
      )}

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-10 flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-slate-400 text-sm max-w-xs mx-auto">
              Thank you for reaching out. We've received your message and will get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className={`relative z-10 ${isModal ? 'space-y-4' : 'space-y-6'}`}
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isModal ? 'gap-4' : 'gap-6'}`}>
              <div className="space-y-1.5">
                <label className={labelClasses}>Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-1.5">
                <label className={labelClasses}>Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${isModal ? 'gap-4' : 'gap-6'}`}>
              <div className="space-y-1.5">
                <label className={labelClasses}>Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 0000000000"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-1.5 relative">
                <label className={labelClasses}>Role</label>
                <button
                  type="button"
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  className={inputClasses + " flex items-center justify-between group"}
                >
                  <span className={formData.role ? 'text-white' : 'text-white/20'}>
                    {formData.role ? roles.find(r => r.value === formData.role)?.label : 'Select your role'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isRoleOpen ? 'rotate-180' : ''} group-hover:text-white/70`} />
                </button>

                <AnimatePresence>
                  {isRoleOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsRoleOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <div className="p-2 space-y-1">
                          {roles.map((role) => (
                            <button
                              key={role.value}
                              type="button"
                              onClick={() => handleRoleSelect(role.value)}
                              className={`w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all ${
                                formData.role === role.value 
                                  ? 'bg-blue-600 text-white' 
                                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              {role.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className={labelClasses}>Message</label>
              <textarea 
                required
                name="message"
                rows={isModal ? "2" : "4"} 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className={inputClasses + " resize-none"}
              ></textarea>
            </div>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-xl border border-red-400/20"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-xs">{errorMessage}</p>
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold ${isModal ? 'py-3 text-base mt-2' : 'py-4 text-lg mt-4'} rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer`}
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
