














































import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { auth, signOutUser } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#solution' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Faq', href: '#faq' },
];

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setMenuState(false);
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const handleNavClick = (href, e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuState(false);
  };

  const renderAuthButtons = () => {
    if (loading) {
      return <div className="animate-pulse bg-amber-100 h-6 w-16 rounded"></div>;
    }

    if (user) {
      const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');
      return (
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center space-x-2 bg-white/80 border-purple-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700 backdrop-blur-sm">
                  {isGoogleUser ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full" />
                  ) : (
                    <User size={20} className="text-gray-700" />
                  )}
                  <span className="text-gray-700 hidden sm:inline">{user.displayName || user.email}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-[60] bg-white/90 border-purple-200 backdrop-blur-sm">
                  <div className="w-48 p-2">
                    <Link to="/dashboard" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                      <LayoutDashboard size={16} />
                      <span>Dashboard</span>
                    </Link>
                    <Link to="/settings" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                    <button onClick={handleSignOut} className="flex items-center space-x-2 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-purple-200 text-gray-700 hover:bg-purple-50 hover:text-purple-700 bg-white/80 backdrop-blur-sm"
        >
          <Link to="/login">
            <span>Login</span>
          </Link>
        </Button>
        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 hover:from-yellow-400/30 hover:to-yellow-500/30 rounded-lg border border-yellow-500/50 hover:border-yellow-400 p-0.5 transition-all duration-300">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 rounded-md"
          >
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-[60] w-full px-2 md:px-4 group"
        style={{ top: 0 }}
      >
       <div
  className={cn(
    'mx-auto mt-0 sm:mt-2 px-4 sm:px-6 transition-all duration-300 lg:px-12',
    isScrolled
      ? 'max-w-3xl bg-white/80 rounded-2xl border border-purple-200 backdrop-blur-lg shadow-md shadow-purple-200/30'
      : 'max-w-6xl'
  )}
>

        
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center space-x-2">
                <span className="text-gray-700 text-2xl font-bold">PitchOS</span>
              </Link>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-gray-700"
              >
                <Menu className="m-auto size-6 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 duration-200" />
                <X className="absolute inset-0 m-auto size-6 rotate-180 scale-0 opacity-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-purple-600 block transition-colors duration-150"
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/90 border-purple-200 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-4 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-xl border p-4 shadow-lg backdrop-blur-sm md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-purple-600 block transition-colors duration-150"
                        onClick={(e) => handleNavClick(item.href, e)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {renderAuthButtons()}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

