import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Copy, Check, ExternalLink, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { WindowChrome } from '../ui/WindowChrome';

export const ContactSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const subjectEncoded = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            {t.contact.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card with Copy micro-interaction */}
            <div className="glass-panel p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold">
                <Mail className="w-4 h-4" />
                <span>{t.contact.emailCardTitle}</span>
              </div>
              <p className="font-mono text-sm sm:text-base font-bold text-[var(--text-primary)] mb-4 select-all">
                {profileData.email}
              </p>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleCopyEmail}
                  icon={copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                >
                  {copied ? t.contact.copiedToast : t.contact.copyEmail}
                </Button>

                <Button
                  asAnchor
                  href={`mailto:${profileData.email}`}
                  variant="secondary"
                  size="sm"
                  icon={<Send className={`w-3.5 h-3.5 ${isRtl ? 'scale-x-[-1]' : ''}`} />}
                >
                  {t.contact.sendMailButton}
                </Button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold">
                <MapPin className="w-4 h-4" />
                <span>{t.contact.locationCardTitle}</span>
              </div>
              <p className="font-display text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1">
                {profileData.location}
              </p>
              <p className="text-xs text-[var(--text-tertiary)] font-medium">
                {t.contact.locationValue}
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center justify-between text-[var(--text-primary)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">GitHub</span>
                </div>
                <ExternalLink className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center justify-between text-[var(--text-primary)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold">LinkedIn</span>
                </div>
                <ExternalLink className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all ${isRtl ? 'scale-x-[-1]' : ''}`} />
              </a>
            </div>
          </motion.div>

          {/* Right: Quick Direct Contact Form inside Window Chrome */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <WindowChrome title={t.contact.cardPrompt} className="shadow-lg">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-primary)] mb-1.5 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-primary)] mb-1.5 font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-primary)] mb-1.5 font-bold">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. AI Research Opportunity / ML Role"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-primary)] mb-1.5 font-bold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Elham, I came across your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-inset)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors resize-none font-medium"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    // Opens your email client directly
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={messageSent ? <Check className="w-4 h-4" /> : <Send className={`w-4 h-4 ${isRtl ? 'scale-x-[-1]' : ''}`} />}
                  >
                    {messageSent ? 'Mail Client Opened!' : 'Send Direct Message'}
                  </Button>
                </div>
              </form>
            </WindowChrome>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
