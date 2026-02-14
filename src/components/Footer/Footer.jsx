import { motion } from 'framer-motion'
import './Footer.css'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Resources: ['Documentation', 'Tutorials', 'Blog', 'Support'],
  Company: ['About', 'Careers', 'Contact', 'Legal'],
  Connect: ['Twitter', 'Discord', 'GitHub', 'LinkedIn']
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.avif" alt="Axiom" className="footer__logo" />
            <p className="footer__tagline">
              Testing for teams that ship fast.
            </p>
          </motion.div>

          <motion.div 
            className="footer__links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__column">
                <h4 className="footer__column-title">{category}</h4>
                <ul className="footer__column-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="footer__copyright">
            © {new Date().getFullYear()} Axiom. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
