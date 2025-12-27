import { Code2, Github, Mail, Terminal } from "lucide-react";
import StyledFooter from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <div className="brand-signature">
        <h4>Minimalist E-Commerce</h4>
        <p>
          A design-driven project built by <strong>Jhay Mora</strong>.
          <br />
          <span style={{ opacity: 0.7, fontSize: "13px" }}>
            Aspiring Web Developer from the Philippines 🇵🇭
          </span>
          <br />
          Focused on performance, monochromatic aesthetics, and clean state
          management.
        </p>
      </div>

      <div className="contact-links">
        <a href="https://github.com/Jhay0617" target="_blank" rel="noreferrer">
          <Github size={20} />
          GitHub
        </a>

        <a href="mailto:jhay17mora@gmail.com">
          <Mail size={20} />
          Contact Me: jhay17mora@gmail.com
        </a>
      </div>

      <div className="tech-footer">
        <span>
          <Code2 size={14} /> React + Redux
        </span>
        <span>
          <Terminal size={14} /> TanStack Query
        </span>
      </div>

      <div style={{ fontSize: "11px", opacity: 0.3, marginTop: "20px" }}>
        © 2025 — Botolan, Zambales, Philippines.
      </div>
    </StyledFooter>
  );
}

export default Footer;
