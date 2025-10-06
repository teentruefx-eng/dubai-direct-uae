import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-gold">
                <span className="text-2xl font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-xl font-bold text-gradient-gold">
                Dubai Shop
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-gold">{t('home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/request" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('request')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-gold">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span dir="ltr">+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@dubaishop.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-gold">Social Media</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover-scale"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover-scale"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover-scale"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Dubai Shop. {t('allRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
