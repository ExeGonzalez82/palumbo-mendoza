import { motion } from 'framer-motion';

interface HormigonCardProps {
  type: string;
  label: string;
  description: string;
  specs: string[];
  index: number;
}

export default function HormigonCard({ type, label, description, specs, index }: HormigonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#fafafa] border border-gray-100 hover:border-[#f7c915] hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Accent top stripe on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#f7c915] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-6">
        {/* Type badge */}
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block bg-[#111111] text-[#f7c915] text-xs font-black tracking-widest uppercase px-2.5 py-1">
            {type}
          </span>
          {/* Concrete icon */}
          <svg
            className="w-5 h-5 text-gray-200 group-hover:text-[#f7c915] transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
          </svg>
        </div>

        {/* Label */}
        <h3 className="text-lg font-bold text-[#111111] mb-2 leading-tight">{label}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>

        {/* Specs */}
        <ul className="flex flex-col gap-1.5">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
              <span className="block w-1.5 h-1.5 bg-[#f7c915] shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer bar */}
      <div className="px-6 py-3 bg-gray-50 group-hover:bg-[#f7c915]/10 transition-colors duration-300 border-t border-gray-100">
        <span className="text-xs font-semibold text-gray-400 group-hover:text-[#111111] transition-colors duration-300 tracking-wide">
          Consultá disponibilidad →
        </span>
      </div>
    </motion.div>
  );
}
