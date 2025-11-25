import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { key: 'home', hasDropdown: false },
  { key: 'about', hasDropdown: true },
  { key: 'academics', hasDropdown: true },
  { key: 'admission', hasDropdown: false },
  { key: 'notice', hasDropdown: false },
  { key: 'gallery', hasDropdown: false },
  { key: 'contact', hasDropdown: false },
];

export const Navigation = () => {
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gradient-to-r from-primary via-primary-dark to-accent shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 w-full justify-center">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-dark hover:text-primary-foreground px-4 py-2 rounded-md transition-all duration-200"
                >
                  {t(item.key)}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                  )}
                </Button>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-card shadow-xl rounded-md overflow-hidden border border-border">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                        Submenu Item 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                        Submenu Item 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                        Submenu Item 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.key}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary-foreground hover:bg-primary-dark hover:text-primary-foreground"
                >
                  {t(item.key)}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
