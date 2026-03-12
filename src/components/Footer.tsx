import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Forward Power Markets" className="h-6" />
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Forward Power Markets. Registered in Latvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
