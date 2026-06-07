export default function Contact() {
  const contacts = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'contact@z3em.dev',
      href: 'mailto:contact@z3em.dev'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/z3em',
      href: 'https://linkedin.com'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/z3em123123',
      href: 'https://github.com/z3em123123'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <p className="text-slate-400 text-lg">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, idx) => (
            <a
              key={contact.label}
              href={contact.href}
              className="glass-effect p-6 rounded-xl text-center hover:bg-cyan-500/10 transition duration-300 animate-slideUp"
              style={{animationDelay: `${idx * 0.1}s`}}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              <div className="text-3xl mb-3">{contact.icon}</div>
              <div className="text-sm text-cyan-400 font-semibold mb-1">{contact.label}</div>
              <div className="text-slate-300 font-medium hover:text-cyan-300 transition">
                {contact.value}
              </div>
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-center animate-slideUp" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Get in touch with me and let's discuss how I can help bring your ideas to life with high-quality digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@z3em.dev"
              className="button-primary"
            >
              Send Email
            </a>
            <a
              href="#projects"
              className="button-secondary"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-6 animate-slideUp" style={{animationDelay: '0.4s'}}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition group"
          >
            <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition group"
          >
            <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.738h3.554v1.378c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.398 3.74 4.408v5.56zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.957.77-1.708 1.971-1.708 1.2 0 1.912.751 1.938 1.708 0 .949-.738 1.707-1.994 1.707zm1.582 11.019H3.715V9.694h3.204v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="mailto:contact@z3em.dev"
            className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition group"
          >
            <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
