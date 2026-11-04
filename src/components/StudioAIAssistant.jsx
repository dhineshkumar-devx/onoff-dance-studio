import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Bot,
  User,
  ChevronDown
} from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

export default function StudioAIAssistant({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Vanakkam! I'm your ODS Studio AI Assistant. How can I help you today? You can ask about our dance styles, batch timings, or connect directly with our founding masters.",
      options: [
        "📞 Call a Trainer",
        "💬 Send WhatsApp Message",
        "💃 Dance Styles & Masters",
        "⏰ Batches & Timings",
        "📍 Studio Location"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateAIResponse(query);
      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const generateAIResponse = (query) => {
    const q = query.toLowerCase();

    // Direct Call / Phone query
    if (q.includes('call') || q.includes('phone') || q.includes('number') || q.includes('contact trainer') || q.includes('talk')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "You can speak directly with our founding masters for admissions, personal assessment, and batch placement:",
        actionType: 'call',
        actions: [
          { label: "Call Master Gopinath.R (Western)", phone: "8870356852" },
          { label: "Call Guru Smt. Aishwarya Raja (Classical)", phone: "9941878870" }
        ],
        options: ["💬 Send WhatsApp Message", "📝 Reserve Admission Slot", "⏰ Batches & Timings"]
      };
    }

    // WhatsApp messaging query
    if (q.includes('whatsapp') || q.includes('message') || q.includes('chat') || q.includes('send')) {
      const gopinathUrl = `https://api.whatsapp.com/send?phone=918870356852&text=${encodeURIComponent("Hi Master Gopinath.R, I would like to enquire about Western & Freestyle admissions at ON OFF DANCE STUDIO.")}`;
      const aishwaryaUrl = `https://api.whatsapp.com/send?phone=919941878870&text=${encodeURIComponent("Hi Guru Smt. Aishwarya Raja, I would like to enquire about Classical Bharatanatyam admissions at ON OFF DANCE STUDIO.")}`;

      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Click below to open a direct WhatsApp chat with the master of your chosen discipline. Your message opens instantly without navigating away from this website:",
        actionType: 'whatsapp',
        actions: [
          { label: "WhatsApp Master Gopinath.R", url: gopinathUrl, phone: "8870356852" },
          { label: "WhatsApp Guru Smt. Aishwarya Raja", url: aishwaryaUrl, phone: "9941878870" }
        ],
        options: ["📞 Call a Trainer", "📝 Reserve Admission Slot", "📍 Studio Location"]
      };
    }

    // Classical Bharatanatyam query
    if (q.includes('classical') || q.includes('bharatanatyam') || q.includes('aishwarya') || q.includes('mudra') || q.includes('salangai') || q.includes('arangetram')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Classical Bharatanatyam is led directly by Natya Ilamani Guru Smt. Aishwarya Raja (B.E., Dip in Bharatanatyam, MFA in Bharatanatyam). Classes focus on sacred Kalakshetra Adavus, Tala Nattuvangam, emotive Abhinaya, and Sabha/Arangetram preparation across Junior, Adult, and Senior batches.",
        actionType: 'trainer',
        trainerName: "Guru Smt. Aishwarya Raja",
        phone: "9941878870",
        options: ["📞 Call Guru Smt. Aishwarya (9941878870)", "💬 WhatsApp Smt. Aishwarya", "⏰ Timetable & Batches"]
      };
    }

    // Western / Hip-Hop / Freestyle query
    if (q.includes('western') || q.includes('hiphop') || q.includes('hip-hop') || q.includes('gopinath') || q.includes('freestyle') || q.includes('popping') || q.includes('bollywood') || q.includes('street')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Western Dance & Freestyle is directed by Master Gopinath.R (Freestyle & Cinematic Dancer | Choreographer | Media Artist). Disciples master authentic street hip-hop, popping, freezes, commercial film choreography, and competition stage routines.",
        actionType: 'trainer',
        trainerName: "Master Gopinath.R",
        phone: "8870356852",
        options: ["📞 Call Master Gopinath (8870356852)", "💬 WhatsApp Master Gopinath", "📝 Book Batch Slot"]
      };
    }

    // Zumba / Fitness query
    if (q.includes('zumba') || q.includes('fitness') || q.includes('weight') || q.includes('cardio') || q.includes('morning')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Our Zumba & Dance Fitness sessions run in morning and evening batches (daily 7:00 AM – 8:00 AM & weekend slots). Set to high-energy Latin, Bollywood, and Afro tracks, it burns 500–800 kcal while building stamina and joint flexibility on shock-absorbing wooden sprung floors.",
        options: ["📝 Reserve Zumba Slot", "📞 Call Studio (8870356852)", "⏰ View Schedule"]
      };
    }

    // Batches, Schedule, Timetable query
    if (q.includes('batch') || q.includes('time') || q.includes('schedule') || q.includes('timing') || q.includes('junior') || q.includes('adult') || q.includes('senior') || q.includes('age')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "We offer 3 dedicated batches with capped sizes:\n• Junior Batch (Ages 4–12): Weekday evenings 5:00 PM – 6:00 PM & Weekend mornings\n• Adult Batch (Ages 13–35): 6:30 PM – 7:45 PM & Weekend Cyphers\n• Senior Batch (Ages 35+): Morning mobility Zumba & Evening Classical flow\nStudio hours: 6:00 AM – 9:30 PM, 7 days a week.",
        options: ["📝 Book a Batch", "📞 Call for Timings", "📍 Studio Address"]
      };
    }

    // Location / Address / Directions query
    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('map') || q.includes('direction') || q.includes('madipakkam') || q.includes('reach')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "ON OFF DANCE STUDIO is situated at:\n📍 2/52, Raghava Nagar 9th Street, Madipakkam, Chennai - 91\n(Conveniently accessible near Madipakkam Bus Terminus, Velachery, and Keelkattalai).",
        actionType: 'location',
        mapUrl: studioConfig.contact.directionsUrl,
        options: ["📞 Call Studio (8870356852)", "💬 Message on WhatsApp", "📝 Reserve Admission"]
      };
    }

    // Booking / Admission query
    if (q.includes('book') || q.includes('admission') || q.includes('join') || q.includes('enroll') || q.includes('register') || q.includes('trial') || q.includes('slot')) {
      return {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Admissions are active! You can reserve your slot right now via our direct on-page form, which immediately sends your complete details to the master's WhatsApp without leaving the page.",
        actionType: 'booking',
        options: ["📝 Open Admission Form", "📞 Call Master Gopinath (8870356852)", "📞 Call Guru Smt. Aishwarya (9941878870)"]
      };
    }

    // Default polite response
    return {
      id: Date.now() + 1,
      sender: 'bot',
      text: "At ON OFF DANCE STUDIO, we provide direct training in Western Freestyle & Cinematic dance under Master Gopinath.R and Classical Bharatanatyam under Natya Ilamani Guru Smt. Aishwarya Raja.",
      options: [
        "📞 Call a Trainer",
        "💬 Send WhatsApp Message",
        "⏰ Batches & Timings",
        "📍 Studio Location",
        "📝 Book Admission Slot"
      ]
    };
  };

  const handleOptionClick = (option) => {
    if (option.includes("Call Master Gopinath")) {
      window.location.href = "tel:8870356852";
      return;
    }
    if (option.includes("Call Guru Smt. Aishwarya")) {
      window.location.href = "tel:9941878870";
      return;
    }
    if (option.includes("Call a Trainer")) {
      handleSendMessage("How can I call the trainers?");
      return;
    }
    if (option.includes("Open Admission Form") || option.includes("Book a Batch") || option.includes("Reserve Admission Slot") || option.includes("Book Batch Slot") || option.includes("Reserve Zumba Slot")) {
      if (onOpenBooking) onOpenBooking();
      setIsOpen(false);
      return;
    }
    if (option.includes("WhatsApp")) {
      handleSendMessage("How can I message on WhatsApp?");
      return;
    }
    handleSendMessage(option);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 pointer-events-auto">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-[0_4px_25px_rgba(234,88,12,0.45)] hover:shadow-[0_6px_35px_rgba(234,88,12,0.6)] border border-orange-400/30 transition-all duration-300 cursor-pointer focus:outline-none"
          aria-label="Toggle Studio AI Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-obsidian-950" />
            </div>
          )}
        </motion.button>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-obsidian-900/90 backdrop-blur-md border border-orange-500/30 text-xs font-mono text-white shadow-xl cursor-pointer hover:border-orange-500 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>Need Help? Ask ODS AI</span>
          </motion.div>
        )}
      </div>

      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[80vh] rounded-3xl bg-obsidian-950/95 backdrop-blur-2xl border border-orange-500/35 shadow-2xl flex flex-col overflow-hidden text-silver"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border-b border-orange-500/20 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-obsidian-900" />
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-white flex items-center gap-1.5">
                    <span>ODS Studio Assistant</span>
                    <Sparkles className="w-3 h-3 text-orange-400" />
                  </h4>
                  <p className="text-[10px] font-mono text-emerald-400">Online • Calling & WhatsApp Ready</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-silver-muted hover:text-white hover:bg-obsidian-800 transition-colors cursor-pointer"
                  aria-label="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Master Hotline Banner */}
            <div className="bg-obsidian-900/90 px-3 py-2 border-b border-silver/10 flex items-center justify-between text-[11px] font-mono shrink-0">
              <span className="text-silver-muted">Call Master:</span>
              <div className="flex items-center gap-2">
                <a href="tel:8870356852" className="text-orange-400 font-bold hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>8870356852</span>
                </a>
                <span className="text-silver-muted/50">|</span>
                <a href="tel:9941878870" className="text-silver hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>9941878870</span>
                </a>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-orange-600 text-white rounded-br-none'
                        : 'bg-obsidian-900 border border-silver/10 text-silver rounded-bl-none shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Action Cards (Direct Calls & WhatsApp) */}
                    {msg.actionType === 'call' && msg.actions && (
                      <div className="mt-3 space-y-1.5 pt-2 border-t border-silver/10">
                        {msg.actions.map((act, aIdx) => (
                          <a
                            key={aIdx}
                            href={`tel:${act.phone}`}
                            className="w-full px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono text-[11px] flex items-center justify-between gap-2 transition-colors font-bold shadow-sm"
                          >
                            <span>{act.label}</span>
                            <Phone className="w-3.5 h-3.5 shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}

                    {msg.actionType === 'whatsapp' && msg.actions && (
                      <div className="mt-3 space-y-1.5 pt-2 border-t border-silver/10">
                        {msg.actions.map((act, aIdx) => (
                          <a
                            key={aIdx}
                            href={act.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[11px] flex items-center justify-between gap-2 transition-colors font-bold shadow-sm"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}

                    {msg.actionType === 'trainer' && (
                      <div className="mt-3 pt-2 border-t border-silver/10 flex items-center gap-2">
                        <a
                          href={`tel:${msg.phone}`}
                          className="flex-1 py-1.5 px-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-mono text-center font-bold flex items-center justify-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call {msg.phone}</span>
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=91${msg.phone}&text=${encodeURIComponent(`Hi ${msg.trainerName}, I am contacting you from the ON OFF DANCE STUDIO website.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-1.5 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-mono text-center font-bold flex items-center justify-center gap-1"
                        >
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    )}

                    {msg.actionType === 'location' && msg.mapUrl && (
                      <div className="mt-3 pt-2 border-t border-silver/10">
                        <a
                          href={msg.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-1.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-mono text-center font-bold flex items-center justify-center gap-1"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Open in Google Maps</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Options Pills */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionClick(opt)}
                          className="px-2.5 py-1 rounded-xl bg-obsidian-850 hover:bg-orange-600/30 text-silver-muted hover:text-orange-400 border border-silver/15 hover:border-orange-500/50 text-[10px] font-mono transition-all text-left cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-obsidian-900 border border-silver/10 text-orange-400 w-16">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-obsidian-900 border-t border-silver/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about batches, fees, call trainer..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-silver/15 text-white placeholder-silver-muted/50 text-xs focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-40 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
