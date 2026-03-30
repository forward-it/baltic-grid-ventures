import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark border-b border-border/10">
      <div className="section-container flex items-center justify-between h-16">
        <img src={logo} alt="Forward Power Markets" className="h-7" />
        <div className="hidden md:flex items-center gap-8 text-sm text-surface-dark-foreground/70">
          <Link to="/#markets" className="hover:text-accent-brand transition-colors">Markets</Link>
          <Link to="/#platform" className="hover:text-accent-brand transition-colors">Platform</Link>
          <Link to="/#calculator" className="hover:text-accent-brand transition-colors">Calculator</Link>
          <Link to="/bess-index" className="hover:text-accent-brand transition-colors">BESS Index</Link>
          <Link to="/#contact" className="gradient-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
            Estimate Revenue
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
