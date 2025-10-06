import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/request', label: t('request') },
    { path: '/products', label: t('products') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
  ];

  const languageOptions = [
    { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover-scale">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-gold">
              <span className="text-2xl font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-xl font-bold text-gradient-gold hidden sm:block">
              Dubai Shop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover-scale">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${
                      language === lang.code ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        {t('freeShipping')}
      </div>
    </header>
  );
};

export default Header;
