import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomSelect({ label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function handleEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full rounded-xl bg-white/[0.04] border text-left px-4 py-3.5 flex items-center justify-between gap-3 transition-colors ${
          open ? 'border-cream/50' : 'border-white/20 hover:border-white/35'
        }`}
      >
        <span className="w-full">
          <span className="block text-[12px] text-cream/55">{label}</span>
          <span className={`block text-[14px] ${value ? 'text-cream' : 'text-cream/45'}`}>
            {value || placeholder}
          </span>
        </span>
        <ChevronDown
          size={17}
          className={`text-cream/60 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute z-30 mt-2 w-full rounded-xl bg-dark-2 border border-white/15 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)] overflow-hidden py-1.5 max-h-64 overflow-y-auto"
          >
            {options.map((opt) => {
              const selected = value === opt;
              return (
                <li key={opt} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-[13.5px] text-left transition-colors ${
                      selected ? 'text-cream bg-white/10' : 'text-cream/75 hover:bg-white/[0.07] hover:text-cream'
                    }`}
                  >
                    {opt}
                    {selected && <Check size={15} className="text-cream shrink-0" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
