import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark border-b border-border/10">
      <div className="section-container flex items-center justify-between h-16">
        <img src={logo} alt="Forward IT Power Markets" className="h-7" />
        <div className="hidden md:flex items-center gap-8 text-sm text-surface-dark-foreground/70">
          <a href="#markets" className="hover:text-accent-warm transition-colors">Markets</a>
          <a href="#platform" className="hover:text-accent-warm transition-colors">Platform</a>
          <a href="#calculator" className="hover:text-accent-warm transition-colors">Calculator</a>
          <a href="#contact" className="gradient-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
            Request Assessment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
