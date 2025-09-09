
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';
import {
  Home,
  Monitor,
  Lightbulb,
  Users,
  TrendingUp,
  Settings,
  User,
  Bell,
  Search,
  Plus,
  Zap,
  Target,
  DollarSign,
  Award,
  FileText,
  BarChart3,
  Calendar,
  ChevronRight,
  Sparkles,
  Send,
  Menu,
  X,
  Play
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Tutorial from '@/components/Tutorial';
import ProfileSection from '@/components/ProfileSection';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuthStore();
  const [aiPrompt, setAiPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const tutorialSteps = [
    {
      target: '[data-tutorial="new-pitch-btn"]',
      title: 'Create Your First Pitch',
      content: 'Click this button to start building your pitch deck with our AI-powered tools.',
      placement: 'bottom'
    },
    {
      target: '[data-tutorial="ai-assistant"]',
      title: 'AI Pitch Assistant',
      content: 'Use our AI assistant to get help with your pitch content, market research, and strategy.',
      placement: 'top'
    },
    {
      target: '[data-tutorial="stats-grid"]',
      title: 'Track Your Progress',
      content: 'Monitor your pitch development and funding progress.',
      placement: 'bottom'
    }
  ];

  useEffect(() => {
    if (!loading && !authChecked) {
      setAuthChecked(true);
      if (!user) {
        navigate('/login');
        return;
      }
    }
  }, [user, loading, navigate, authChecked]);

  if (loading || !authChecked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-sm text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }
  if (!user) return null;
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("onboardingCompleted");
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const sidebarItems = [
    { title: "Back to Home", icon: Home, url: "/", active: false },
    { title: "Dashboard", icon: Monitor, url: "#", active: true },
    { title: "Pitch Builder", icon: Monitor, url: "#" },
    { title: "AI Tools", icon: Sparkles, url: "#" },
    { title: "Ideas Hub", icon: Lightbulb, url: "#" },
    { title: "Community", icon: Users, url: "#" },
    { title: "Analytics", icon: BarChart3, url: "#" },
    { title: "Funding", icon: DollarSign, url: "#" },
    { title: "Resources", icon: FileText, url: "#" },
  ];

  const quickActions = [
    { title: "Create Pitch Deck", icon: Monitor, description: "AI-powered presentation builder" },
    { title: "Enhance Pitch", icon: Zap, description: "Improve your existing pitch" },
    { title: "Market Research", icon: TrendingUp, description: "Analyze your market opportunity" },
    { title: "Financial Model", icon: Target, description: "Build financial projections" },
  ];

  const stats = [
    { title: "Active Pitches", value: "3", change: "+2 this week", icon: Monitor },
    { title: "Community Votes", value: "127", change: "+15 today", icon: Users },
    { title: "Funding Goal", value: "$50K", change: "25% complete", icon: DollarSign },
    { title: "Profile Score", value: "85%", change: "+5% this month", icon: Award },
  ];

  const recentActivity = [
    { action: "Pitch deck updated", time: "2 hours ago" },
    { action: "Received community feedback", time: "4 hours ago" },
    { action: "AI enhancement completed", time: "1 day ago" },
    { action: "New funding opportunity", time: "2 days ago" },
  ];
  return (
    <div className="min-h-screen bg-background flex">
      <Tutorial
        steps={tutorialSteps}
        isOpen={tutorialOpen}
        onClose={() => setTutorialOpen(false)}
        onComplete={() => setTutorialOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:fixed lg:inset-y-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-screen">
          
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
              onClick={() => navigate("/")}
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">PitchOS</h2>
                <p className="text-xs text-gray-500">Founder Dashboard</p>
              </div>
            </div>
            <button className="lg:hidden p-1" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <div
              className="flex items-center gap-3 p-2 cursor-pointer hover:bg-muted rounded-lg transition-colors"
              onClick={() => setProfileOpen(true)}
            >
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">{user?.displayName?.[0] || user?.email?.[0] || '?'}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{user?.displayName || 'User'}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="relative flex-1 max-w-md hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input type="text" placeholder="Search tools, pitches, resources..." className="pl-10" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Bell className="w-5 h-5" />
              </Button>
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTutorialOpen(true)}
                className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                <Play className="w-4 h-4" />
                Tutorial
              </Button>
              <Button className="gap-2" data-tutorial="new-pitch-btn">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Pitch</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative mt-4 sm:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input type="text" placeholder="Search tools, pitches, resources..." className="pl-10" />
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
          {/* Welcome */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">Welcome back, {user?.displayName || 'User'}!</h1>
              <p className="text-muted-foreground mt-1">Let's turn your ideas into funded ventures</p>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border text-primary border-primary text-sm font-medium">
              Pro Member
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-tutorial="stats-grid">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground truncate">{stat.title}</p>
                      <p className="text-xl lg:text-2xl font-bold mt-1 lg:mt-2 text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1 truncate">{stat.change}</p>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-muted rounded-lg flex items-center justify-center ml-2">
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Assistant & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-tutorial="ai-assistant">
            {/* AI Assistant */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  AI Pitch Assistant
                </CardTitle>
                <CardDescription>
                  Get instant help with your pitch, market research, or business strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  placeholder="Ask me anything about your pitch, market analysis, funding strategy..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full min-h-[100px] p-3 border border-input rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                />
                <div className="flex flex-wrap gap-2 justify-between items-center">
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded-full">Pitch Review</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded-full">Market Research</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded-full">Financial Model</span>
                  </div>
                  <Button className="gap-2">
                    <Send className="w-4 h-4" />
                    Ask AI
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full justify-center gap-1 mt-4">
                  View All Activity
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <ProfileSection
        user={user}
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Dashboard;
