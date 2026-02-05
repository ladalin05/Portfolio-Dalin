import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import '../assets/css/layout.css'

const socialLinks = [
  { icon: Github, href: "https://github.com/ladalin05", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/la-dalin-b88829393", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lin280454@gmail.com", label: "Email" },
];

export const Footer = () => {

  return (
    <footer className="footer">
        <div className="container-fluid py-5">
            <div className="row align-items-center gy-4">

            {/* Logo & Copyright */}
            <div className="col-md-3 text-center text-md-start">
            </div>
            
            {/* Social Links */}
            <div className="col-md-6 text-center d-flex justify-content-around">
                <div className="footer-social">
                  {socialLinks.map((social) => (
                      <a key={social.label} href={social.href} aria-label={social.label} className="social-icon" >
                      <social.icon className="icon" />
                      </a>
                  ))}
                </div>
            </div>

            {/* Links */}
            <div className="col-md-3">
            </div>

            </div>
        </div>
    </footer>
  );
};