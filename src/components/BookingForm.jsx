import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, Phone, User, Mail, Calendar, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { studioConfig } from '../data/studioConfig';

export default function BookingForm({
  initialStyle = '',
  initialBatch = '',
  isModal = false,
  onSuccessClose = null
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    style: initialStyle || 'Western Dance & Freestyle',
    batch: initialBatch || 'Junior Batch (Ages 4 – 12)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentTrainerInfo, setSentTrainerInfo] = useState({ name: '', phone: '', altPhone: '', altName: '', url: '', altUrl: '' });

  // Validate form
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Determine which trainer to route to based on selected style
      const isClassical =
        formData.style.toLowerCase().includes('classical') ||
        formData.style.toLowerCase().includes('bharatanatyam') ||
        formData.style.toLowerCase().includes('aishwarya');

      const primaryPhone = isClassical ? '9941878870' : '8870356852';
      const primaryName = isClassical ? 'Guru Smt. Aishwarya Raja' : 'Master Gopinath.R';
      const altPhone = isClassical ? '8870356852' : '9941878870';
      const altName = isClassical ? 'Master Gopinath.R' : 'Guru Smt. Aishwarya Raja';

      // Comprehensive structured WhatsApp message
      const textPayload =
        `✨ *NEW BATCH ADMISSION ENQUIRY* ✨%0A` +
        `*ON OFF DANCE STUDIO (ODS), Madipakkam*%0A` +
        `----------------------------------------%0A` +
        `👤 *Student Name:* ${encodeURIComponent(formData.name)}%0A` +
        `📱 *Mobile Phone:* ${encodeURIComponent(formData.phone)}%0A` +
        `📧 *Email:* ${encodeURIComponent(formData.email || 'Not Provided')}%0A` +
        `💃 *Dance Style:* ${encodeURIComponent(formData.style)}%0A` +
        `👥 *Batch / Age:* ${encodeURIComponent(formData.batch)}%0A` +
        `📝 *Experience / Notes:* ${encodeURIComponent(formData.message || 'Direct New Admission Request')}%0A` +
        `📍 *Studio Address:* 2/52, Raghava Nagar 9th St, Madipakkam, Chennai - 91%0A` +
        `----------------------------------------%0A` +
        `_Sent via ODS Studio Official Website_`;

      const primaryWhatsappUrl = `https://api.whatsapp.com/send?phone=91${primaryPhone}&text=${textPayload}`;
      const altWhatsappUrl = `https://api.whatsapp.com/send?phone=91${altPhone}&text=${textPayload}`;

      setSentTrainerInfo({
        name: primaryName,
        phone: primaryPhone,
        altPhone: altPhone,
        altName: altName,
        url: primaryWhatsappUrl,
        altUrl: altWhatsappUrl,
      });

      // Dispatch directly to WhatsApp in a new tab without redirecting the user's current page
      try {
        const openedWin = window.open(primaryWhatsappUrl, '_blank', 'noopener,noreferrer');
        if (openedWin) {
          openedWin.focus();
        }
      } catch (err) {
        // Handled silently; button remains on success screen
      }

      // Trigger celebratory confetti on current page
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#EA580C', '#F97316', '#FB923C', '#FFFFFF', '#FED7AA']
        });
      } catch (err) {
        // Fallback
      }

      setIsSuccess(true);
    } catch (error) {
      setErrors({ form: 'Unable to submit right now. Please call 8870356852 directly!' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative w-full ${isModal ? '' : 'max-w-3xl mx-auto'}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl bg-obsidian-900 border border-orange-500/35 p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center"
          >
            <div className="w-18 h-18 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 mb-3">
              Message Sent to Trainer's WhatsApp
            </span>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              Admission Enquiry Dispatched!
            </h3>
            <p className="text-silver-muted text-sm sm:text-base max-w-md font-light leading-relaxed mb-6">
              Thank you, <strong className="text-white">{formData.name}</strong>! Your complete admission details have been delivered to <span className="text-orange-400 font-medium">{sentTrainerInfo.name}</span> (<span className="text-white font-mono">+91 {sentTrainerInfo.phone}</span>).
            </p>

            <div className="bg-obsidian-950 p-5 rounded-2xl border border-silver/10 text-xs font-mono text-silver mb-8 max-w-md w-full text-left space-y-2">
              <div className="flex justify-between border-b border-obsidian-850 pb-1.5">
                <span className="text-silver-muted">Student Name:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-850 pb-1.5">
                <span className="text-silver-muted">Mobile:</span>
                <span className="text-white font-medium">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-850 pb-1.5">
                <span className="text-silver-muted">Style Selected:</span>
                <span className="text-orange-400 font-medium">{formData.style}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-850 pb-1.5">
                <span className="text-silver-muted">Batch:</span>
                <span className="text-white">{formData.batch}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-silver-muted">Studio:</span>
                <span className="text-emerald-400">Madipakkam, Chennai - 91</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={sentTrainerInfo.url}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <span>Re-open WhatsApp Chat</span>
              </a>

              <a
                href={sentTrainerInfo.altUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-obsidian-850 hover:bg-obsidian-800 text-silver hover:text-white border border-silver/15 font-display text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Also Notify {sentTrainerInfo.altName}</span>
              </a>

              {isModal && onSuccessClose && (
                <button
                  onClick={onSuccessClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-obsidian-800 hover:bg-obsidian-750 text-silver font-display text-xs uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-obsidian-900 border border-orange-500/25 p-6 sm:p-10 shadow-2xl flex flex-col gap-5"
          >
            {/* Header info */}
            <div className="border-b border-obsidian-800 pb-4 mb-2">
              <h3 className="font-display font-black text-2xl text-white">
                Reserve Your <span className="text-gradient-orange">Batch Admission</span>
              </h3>
              <p className="text-xs sm:text-sm text-silver-muted mt-1 font-light">
                Direct registration with founding masters. Capped batch sizes to ensure individualized training.
              </p>
            </div>

            {errors.form && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Name & Phone in 2 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                  Full Name <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-silver-muted">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-obsidian-950 border text-white placeholder-silver-muted/40 text-sm focus:outline-none transition-all ${
                      errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-silver/15 focus:border-orange-500'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                  Phone Number (10 digits) <span className="text-orange-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-silver-muted">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 8870356852"
                    maxLength={10}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-obsidian-950 border text-white placeholder-silver-muted/40 text-sm focus:outline-none transition-all ${
                      errors.phone ? 'border-red-500/70 focus:border-red-500' : 'border-silver/15 focus:border-orange-500'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.phone}</p>}
              </div>
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                Email Address (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-silver-muted">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-obsidian-950 border border-silver/15 text-white placeholder-silver-muted/40 text-sm focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
              {errors.email && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>}
            </div>

            {/* Dance Style & Batch Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                  Select Dance Style
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-silver-muted">
                    <Layers className="w-4 h-4" />
                  </div>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-obsidian-950 border border-silver/15 text-silver text-sm focus:outline-none focus:border-orange-500 transition-all cursor-pointer font-sans"
                  >
                    <option value="Western Dance & Freestyle">Western Dance & Freestyle (Lead: Gopinath.R)</option>
                    <option value="Classical Bharatanatyam">Classical Bharatanatyam (Lead: Guru Smt. Aishwarya Raja)</option>
                    <option value="Zumba & Dance Fitness">Zumba & Dance Fitness</option>
                    <option value="Hip-Hop & Urban Street">Hip-Hop & Urban Street</option>
                    <option value="Bollywood & Cinematic">Bollywood & Cinematic</option>
                    <option value="Contemporary & Lyrical">Contemporary & Lyrical</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                  Select Batch / Age Group
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-silver-muted">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <select
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-obsidian-950 border border-silver/15 text-silver text-sm focus:outline-none focus:border-orange-500 transition-all cursor-pointer font-sans"
                  >
                    <option value="Junior Batch (Ages 4 – 12)">Junior Batch (Ages 4 – 12)</option>
                    <option value="Adult Batch (Ages 13 – 35)">Adult Batch (Ages 13 – 35)</option>
                    <option value="Senior Batch (Ages 35+)">Senior Batch (Ages 35+)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message / Goals */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-silver-muted mb-2">
                Prior Dance Experience / Specific Goals (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us if you are a beginner or looking for specific batch timings..."
                className="w-full p-4 rounded-xl bg-obsidian-950 border border-silver/15 text-white placeholder-silver-muted/40 text-sm focus:outline-none focus:border-orange-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-orange-sm hover:shadow-orange-md transition-all disabled:opacity-50 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending to Trainer WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>Confirm Booking & Send to Trainer WhatsApp</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-silver-muted/80 font-mono mt-1">
              Your entire booking details are sent directly to the trainer's WhatsApp without leaving or redirecting your page.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
