/**
 * Footer Component
 * Features: Social links, copyright, back to top button
 * Mobile-first design
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-4 py-8 md:px-8 bg-[#12121a] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Zephyrus. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
