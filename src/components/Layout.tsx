import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Users, Settings, MessageSquare } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Settings, label: "Setup" },
    { path: "/prospects", icon: Users, label: "Prospects" },
    { path: "/email-generator", icon: MessageSquare, label: "Email Generator" },
    { path: "/tracking", icon: Mail, label: "Email Tracking" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold text-accent">Jazon</span>
                <span className="ml-2 text-xs text-gray-500">(lite)</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map(({ path, icon: Icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(path)
                        ? "text-accent border-b-2 border-accent"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 min-h-screen animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;