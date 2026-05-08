import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Check, Calendar } from 'lucide-react';

function scrollToTimeSlotsOnMobile(container: HTMLElement | null) {
  if (typeof window === 'undefined' || !container) return;
  if (!window.matchMedia('(max-width: 1023px)').matches) return;
  window.requestAnimationFrame(() => {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const scheduleData = [
  {
    day: 'Monday',
    date: '12',
    slots: [
      { id: 'm1', time: '07:00 AM', type: 'Kinetic Flow', duration: '60 min', instructor: 'Sarah J.', spots: 3 },
      { id: 'm2', time: '09:00 AM', type: 'Reformer Pilates', duration: '45 min', instructor: 'Elena R.', spots: 0 },
      { id: 'm3', time: '17:30 PM', type: 'Sound Bath Resonance', duration: '75 min', instructor: 'Marcus V.', spots: 8 },
    ]
  },
  {
    day: 'Tuesday',
    date: '13',
    slots: [
      { id: 't1', time: '06:30 AM', type: 'Breathwork Ceremony', duration: '60 min', instructor: 'Marcus V.', spots: 5 },
      { id: 't2', time: '12:00 PM', type: 'Mindful Strength', duration: '45 min', instructor: 'Sarah J.', spots: 2 },
      { id: 't3', time: '18:00 PM', type: 'Kinetic Flow', duration: '60 min', instructor: 'Elena R.', spots: 1 },
    ]
  },
  {
    day: 'Wednesday',
    date: '14',
    slots: [
      { id: 'w1', time: '07:00 AM', type: 'Reformer Pilates', duration: '45 min', instructor: 'Elena R.', spots: 4 },
      { id: 'w2', time: '17:00 PM', type: 'Restorative Yoga', duration: '60 min', instructor: 'Sarah J.', spots: 12 },
    ]
  },
  {
    day: 'Thursday',
    date: '15',
    slots: [
      { id: 'th1', time: '06:30 AM', type: 'Kinetic Flow', duration: '60 min', instructor: 'Sarah J.', spots: 0 },
      { id: 'th2', time: '08:00 AM', type: 'Mindful Strength', duration: '45 min', instructor: 'Elena R.', spots: 6 },
      { id: 'th3', time: '18:30 PM', type: 'Sound Bath Resonance', duration: '75 min', instructor: 'Marcus V.', spots: 4 },
    ]
  },
  {
    day: 'Friday',
    date: '16',
    slots: [
      { id: 'f1', time: '07:00 AM', type: 'Reformer Pilates', duration: '45 min', instructor: 'Elena R.', spots: 2 },
      { id: 'f2', time: '12:00 PM', type: 'Breathwork Ceremony', duration: '60 min', instructor: 'Marcus V.', spots: 5 },
      { id: 'f3', time: '16:00 PM', type: 'Kinetic Flow', duration: '60 min', instructor: 'Sarah J.', spots: 8 },
    ]
  },
  {
    day: 'Saturday',
    date: '17',
    slots: [
      { id: 's1', time: '08:00 AM', type: 'Kinetic Flow', duration: '60 min', instructor: 'Sarah J.', spots: 5 },
      { id: 's2', time: '10:00 AM', type: 'Reformer Pilates', duration: '45 min', instructor: 'Elena R.', spots: 1 },
      { id: 's3', time: '11:30 AM', type: 'Sound Bath Resonance', duration: '75 min', instructor: 'Marcus V.', spots: 10 },
    ]
  }
];

export function Booking() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [selectedSlots, setSelectedSlots] = useState<{ dayIdx: number, slotId: string }[]>([]);
  const [bookingState, setBookingState] = useState<'idle' | 'confirming' | 'success'>('idle');
  const timeSlotsRef = useRef<HTMLDivElement>(null);

  const selectedDay = scheduleData[selectedDayIdx];

  const handleSlotSelect = (dayIdx: number, id: string, spots: number) => {
    if (spots === 0) return;
    if (bookingState === 'confirming') {
      setBookingState('idle');
    }
    setSelectedSlots(prev => {
      const isSelected = prev.some(s => s.dayIdx === dayIdx && s.slotId === id);
      if (isSelected) {
        return prev.filter(s => !(s.dayIdx === dayIdx && s.slotId === id));
      } else {
        return [...prev, { dayIdx, slotId: id }];
      }
    });
  };

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-[70rem] mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 md:mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-sage mb-6 block">Reservation</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">Curate Your <span className="italic text-gold">Schedule</span></h1>
          <p className="text-charcoal/70 font-light max-w-xl mx-auto leading-loose text-sm">
            Select a day and time to join us in the sanctuary. Spaces are limited to ensure an intimate and focused environment.
          </p>
        </motion.div>

        {bookingState === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-sage/10 rounded-2xl p-12 md:p-24 text-center max-w-3xl mx-auto border border-sage/20"
          >
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="text-cream" size={32} strokeWidth={1} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Your place is reserved.</h2>
            <p className="text-charcoal/70 font-light text-sm md:text-base leading-loose max-w-md mx-auto mb-10">
              We look forward to welcoming you. A confirmation email has been sent with preparation details.
            </p>
            <button 
              onClick={() => {
                setBookingState('idle');
                setSelectedSlots([]);
              }}
              className="text-[10px] uppercase tracking-[0.2em] border-b border-charcoal/30 pb-1 hover:border-sage hover:text-sage transition-colors"
            >
              Book Another Session
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Days Selector */}
            <div className="lg:w-1/3">
              <div className="sticky top-40 flex flex-col gap-4">
                <h3 className="text-[10px] tracking-[0.3em] font-medium uppercase text-charcoal/40 mb-4 ml-2">This Week</h3>
                {scheduleData.map((day, idx) => (
                  <button
                    key={day.day}
                    onClick={() => {
                      setSelectedDayIdx(idx);
                      if (bookingState === 'confirming') {
                        setBookingState('idle');
                      }
                      scrollToTimeSlotsOnMobile(timeSlotsRef.current);
                    }}
                    className={`flex items-center justify-between p-6 w-full text-left transition-all duration-500 border-l-[1px] ${
                      selectedDayIdx === idx 
                        ? 'border-sage bg-white shadow-sm' 
                        : 'border-transparent hover:border-charcoal/10 hover:bg-white/50'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-[10px] tracking-[0.2em] uppercase font-medium mb-2 ${selectedDayIdx === idx ? 'text-sage' : 'text-charcoal/50'}`}>
                        {day.day}
                      </span>
                      <span className={`font-serif text-2xl ${selectedDayIdx === idx ? 'text-charcoal' : 'text-charcoal/70'}`}>
                        {day.date}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Timetable — ref target for mobile scroll after choosing a date */}
            <div
              ref={timeSlotsRef}
              id="booking-time-slots"
              className="lg:w-2/3 scroll-mt-32 md:scroll-mt-40"
            >
              <motion.div
                key={selectedDay.day}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-6 mb-4">
                  <h3 className="font-serif text-3xl font-light">{selectedDay.day} <span className="italic text-charcoal/40 text-xl">{selectedDay.date}</span></h3>
                  <Calendar size={20} className="text-charcoal/30" strokeWidth={1} />
                </div>

                {selectedDay.slots.map((slot) => {
                  const isSelected = selectedSlots.some(s => s.dayIdx === selectedDayIdx && s.slotId === slot.id);
                  return (
                  <div 
                    key={slot.id}
                    onClick={() => handleSlotSelect(selectedDayIdx, slot.id, slot.spots)}
                    className={`p-8 border transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer
                      ${slot.spots === 0 
                        ? 'border-charcoal/5 bg-charcoal/5 opacity-60 cursor-not-allowed' 
                        : isSelected
                          ? 'border-gold bg-gold/5 shadow-md'
                          : 'border-charcoal/10 bg-white hover:border-sage/40 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex gap-8 items-start md:items-center">
                      <div className="flex flex-col text-center w-20 shrink-0">
                        <span className="font-serif text-2xl">{slot.time.split(' ')[0]}</span>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50 mt-1">{slot.time.split(' ')[1]}</span>
                      </div>
                      
                      <div className="w-[1px] h-12 bg-charcoal/10 hidden md:block" />

                      <div className="flex flex-col gap-2">
                        <h4 className="font-medium tracking-wide text-charcoal">{slot.type}</h4>
                        <div className="flex items-center gap-3 text-xs font-light text-charcoal/60">
                          <span>{slot.duration}</span>
                          <span className="w-1 h-1 rounded-full bg-charcoal/20" />
                          <span>{slot.instructor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:flex-col md:items-end gap-3 mt-4 md:mt-0">
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${slot.spots === 0 ? 'text-rose' : 'text-sage'}`}>
                        {slot.spots === 0 ? 'Waitlist' : `${slot.spots} Spots Left`}
                      </span>
                      {slot.spots > 0 && (
                        <button 
                          className={`text-[9px] uppercase tracking-[0.2em] border px-6 py-2 transition-colors ${
                            isSelected
                              ? 'bg-gold text-white border-gold' 
                              : 'border-charcoal/20 hover:border-charcoal text-charcoal'
                          }`}
                        >
                          {isSelected ? 'Selected' : 'Select'}
                        </button>
                      )}
                    </div>
                  </div>
                );})}
              </motion.div>

              {/* Confirmation Form */}
              {bookingState === 'confirming' && selectedSlots.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16 p-10 bg-sage/5 border border-sage/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <h3 className="font-serif text-2xl mb-2">Complete Reservation</h3>
                      <p className="text-sm font-light text-charcoal/60">
                        Please review your {selectedSlots.length} selected {selectedSlots.length === 1 ? 'practice' : 'practices'}.
                      </p>
                    </div>
                    <button 
                      onClick={() => setBookingState('idle')}
                      className="text-[9px] uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal border-b border-transparent hover:border-charcoal/30 transition-all"
                    >
                      Edit 
                    </button>
                  </div>

                  <div className="flex flex-col gap-4 mb-8 relative z-10">
                    {selectedSlots.map((selection, i) => {
                      const day = scheduleData[selection.dayIdx];
                      const slot = day.slots.find(s => s.id === selection.slotId);
                      if (!slot) return null;
                      return (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-charcoal/10">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium text-sm text-charcoal">{slot.type}</span>
                            <span className="text-xs text-charcoal/60">{day.day}, {day.date} at {slot.time}</span>
                          </div>
                          <button 
                            type="button"
                            onClick={() => handleSlotSelect(selection.dayIdx, selection.slotId, 1)}
                            className="text-charcoal/40 hover:text-rose transition-colors text-xs"
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingState('success');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="flex flex-col gap-6 relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50">First Name</label>
                        <input required type="text" className="border-b border-charcoal/20 bg-transparent py-2 px-1 focus:outline-none focus:border-sage text-sm transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50">Last Name</label>
                        <input required type="text" className="border-b border-charcoal/20 bg-transparent py-2 px-1 focus:outline-none focus:border-sage text-sm transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-charcoal/50">Email Address</label>
                      <input required type="email" className="border-b border-charcoal/20 bg-transparent py-2 px-1 focus:outline-none focus:border-sage text-sm transition-colors" />
                    </div>
                    <button type="submit" className="bg-sage text-cream text-[10px] tracking-[0.2em] uppercase py-4 mt-6 hover:bg-charcoal transition-colors">
                      Confirm Booking
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Floating Checkout Bar */}
      {selectedSlots.length > 0 && bookingState === 'idle' && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-charcoal/10 p-6 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] flex justify-between items-center"
        >
          <div className="flex flex-row items-center justify-between w-full max-w-[90rem] mx-auto px-0 md:px-6">
            <span className="text-sm md:text-base font-serif">
              {selectedSlots.length} {selectedSlots.length === 1 ? 'Practice' : 'Practices'} Selected
            </span>
            <button
               onClick={() => {
                 setBookingState('confirming');
                 window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
               }}
               className="bg-charcoal text-white text-[10px] uppercase tracking-[0.2em] py-4 px-8 md:px-12 hover:bg-sage transition-colors"
             >
               Review & Confirm
             </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
