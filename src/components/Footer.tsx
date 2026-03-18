import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="Forward Power Markets" className="h-6" />
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/research"
                className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
              >
                Research
              </Link>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 space-y-3">
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-primary-foreground/40">
              <span>EIC 43X-STJ02709060N</span>
              <span>ACER A00250726.LV</span>
              <span>Registered balancing service provider in Latvia</span>
              <span>Nord Pool market participant</span>
            </div>
            <p className="text-primary-foreground/40 text-xs">
              © {new Date().getFullYear()} SIA Forward IT Consulting · 40103746299 · Registered in
              Latvia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
