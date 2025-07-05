// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Menu, X, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
// import { auth, signOutUser } from '../firebase';
// import { ThemeToggle } from './ThemeToggle';
// import { onAuthStateChanged } from 'firebase/auth';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "./ui/navigation-menu";
// import { Button } from "./ui/button";
// import { cn } from "../lib/utils";

// const menuItems = [
//     { name: 'Features', href: '#features' },
//     { name: 'Solution', href: '#solution' },
//     { name: 'Pricing', href: '#pricing' },
//     { name: 'Faq', href: '#faq' },
// ]

// const Navbar = () => {
//     const [menuState, setMenuState] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleSignOut = async () => {
//         try {
//             await signOutUser();
//             setMenuState(false); // Close mobile menu after sign out
//         } catch (error) {
//             console.error('Sign out failed:', error);
//         }
//     };

//     const handleNavClick = (href, e) => {
//         e.preventDefault();
        
//         // If we're not on the home page, navigate to home first
//         if (location.pathname !== '/') {
//             navigate('/');
//             // Use setTimeout to wait for navigation to complete
//             setTimeout(() => {
//                 const element = document.querySelector(href);
//                 if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                 }
//             }, 100);
//         } else {
//             // If we're already on home page, just scroll to section
//             const element = document.querySelector(href);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }
        
//         setMenuState(false); // Close mobile menu
//     };

//     const renderAuthButtons = () => {
//         if (loading) {
//             return (
//                 <div className="animate-pulse bg-muted h-6 w-16 rounded"></div>
//             );
//         }

//         if (user) {
//             const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');
            
//             return (
//                 <div className="flex items-center gap-4">
//                     <ThemeToggle />
//                     <NavigationMenu>
//                         <NavigationMenuList>
//                             <NavigationMenuItem>
//                                 <NavigationMenuTrigger className="flex items-center space-x-2 bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground">
//                                     {isGoogleUser ? (
//                                         <img
//                                             src={user.photoURL}
//                                             alt={user.displayName || 'User'}
//                                             className="w-8 h-8 rounded-full"
//                                         />
//                                     ) : (
//                                         <User size={20} className="text-foreground" />
//                                     )}
//                                     <span className="text-foreground hidden sm:inline">
//                                         {user.displayName || user.email}
//                                     </span>
//                                 </NavigationMenuTrigger>
//                                 <NavigationMenuContent className="z-[60] bg-background border-border">
//                                     <div className="w-48 p-2">
//                                         <Link
//                                             to="/dashboard"
//                                             className="flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
//                                         >
//                                             <LayoutDashboard size={16} />
//                                             <span>Dashboard</span>
//                                         </Link>
//                                         <Link
//                                             to="/settings"
//                                             className="flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
//                                         >
//                                             <Settings size={16} />
//                                             <span>Settings</span>
//                                         </Link>
//                                         <button
//                                             onClick={handleSignOut}
//                                             className="flex items-center space-x-2 w-full px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
//                                         >
//                                             <LogOut size={16} />
//                                             <span>Sign Out</span>
//                                         </button>
//                                     </div>
//                                 </NavigationMenuContent>
//                             </NavigationMenuItem>
//                         </NavigationMenuList>
//                     </NavigationMenu>
//                 </div>
//             );
//         }

//         return (
//             <>
//                 <div className="flex items-center gap-2">
//                     <ThemeToggle />
//                     <Button
//                         asChild
//                         variant="outline"
//                         size="sm"
//                         className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
//                         <Link to="/login">
//                             <span>Login</span>
//                         </Link>
//                     </Button>
//                     <Button
//                         asChild
//                         size="sm"
//                         className="bg-primary hover:bg-primary/90 text-primary-foreground">
//                         <Link to="/register">
//                             <span>Sign Up</span>
//                         </Link>
//                     </Button>
//                 </div>
//             </>
//         );
//     };

//     return (
//         <header>
//             <nav
//                 data-state={menuState && 'active'}
//                 className="fixed z-[60] w-full px-2 md:px-4 group" style={{ top: 0 }}>
//                 <div
//                     className={cn(
//                         'mx-auto mt-0 sm:mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12',
//                         isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border border-border backdrop-blur-lg lg:px-5'
//                     )}>
//                     <div
//                         className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
//                         <div className="flex w-full justify-between lg:w-auto">
//                             <Link to="/" aria-label="home" className="flex items-center space-x-2">
//                                 <span className="text-foreground text-2xl font-bold">PitchOS</span>
//                             </Link>

//                             <button
//                                 onClick={() => setMenuState(!menuState)}
//                                 aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
//                                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-foreground">
//                                 <Menu
//                                     className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                                 <X
//                                     className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//                             </button>
//                         </div>

//                         <div className="absolute inset-0 m-auto hidden size-fit lg:block">
//                             <ul className="flex gap-8 text-sm">
//                                 {menuItems.map((item, index) => (
//                                     <li key={index}>
//                                         <a
//                                             href={item.href}
//                                             className="text-muted-foreground hover:text-foreground block duration-150"
//                                             onClick={(e) => handleNavClick(item.href, e)}>
//                                             <span>{item.name}</span>
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div
//                             className="bg-background border-border group-data-[state=active]:block lg:group-data-[state=active]:flex mb-4 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-xl border p-4 shadow-lg md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
//                             <div className="lg:hidden">
//                                 <ul className="space-y-6 text-base">
//                                     {menuItems.map((item, index) => (
//                                         <li key={index}>
//                                             <a
//                                                 href={item.href}
//                                                 className="text-muted-foreground hover:text-foreground block duration-150"
//                                                 onClick={(e) => handleNavClick(item.href, e)}>
//                                                 <span>{item.name}</span>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div
//                                 className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
//                                 {/* Desktop auth buttons */}
//                                 {renderAuthButtons()}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;
// 👇 Your existing imports
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { auth, signOutUser } from '../firebase';
import { ThemeToggle } from './ThemeToggle';
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
      }, 300); // Adjust if needed
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
      return (
        <div className="animate-pulse bg-muted h-6 w-16 rounded"></div>
      );
    }

    if (user) {
      const isGoogleUser = user.providerData.some(provider => provider.providerId === 'google.com');

      return (
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center space-x-2 bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                  {isGoogleUser ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User size={20} className="text-foreground" />
                  )}
                  <span className="text-foreground hidden sm:inline">
                    {user.displayName || user.email}
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-[60] bg-background border-border">
                  <div className="w-48 p-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <LayoutDashboard size={16} />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                    >
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
      <>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <Link to="/login">
              <span>Login</span>
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>
      </>
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
            'mx-auto mt-0 sm:mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border border-border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center space-x-2">
                <span className="text-foreground text-2xl font-bold">PitchOS</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-foreground"
              >
                <Menu className="m-auto size-6 duration-200" />
                <X className="absolute inset-0 m-auto size-6 opacity-0 scale-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground block duration-150"
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-background border-border group-data-[state=active]:block lg:group-data-[state=active]:flex mb-4 hidden w-full flex-wrap items-center justify-end space-y-4 rounded-xl border p-4 shadow-lg md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground block duration-150"
                        onClick={(e) => handleNavClick(item.href, e)}
                      >
                        <span>{item.name}</span>
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
