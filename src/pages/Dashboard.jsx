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
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuthStore();
  const [aiPrompt, setAiPrompt] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login');
      } else if (localStorage.getItem("onboardingCompleted") !== "true") {
        navigate('/onboarding');
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/');
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
    { action: "Pitch deck updated", time: "2 hours ago", type: "update" },
    { action: "Received community feedback", time: "4 hours ago", type: "feedback" },
    { action: "AI enhancement completed", time: "1 day ago", type: "ai" },
    { action: "New funding opportunity", time: "2 days ago", type: "funding" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">PitchOS</h2>
                <p className="text-xs text-gray-500">Founder Dashboard</p>
              </div>
            </div>
            <button 
              className="lg:hidden p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${item.active
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                    }
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 p-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">
                  {user?.displayName?.[0] || user?.email?.[0] || '?'}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{user?.displayName || 'User'}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
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
                  <Input
                    type="text"
                    placeholder="Search tools, pitches, resources..."
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Bell className="w-5 h-5" />
              </Button>
              <ThemeToggle />
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Pitch</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative mt-4 sm:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search tools, pitches, resources..."
              className="pl-10"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
          {/* Welcome Section */}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                <div className="flex gap-2">
                  <textarea
                    placeholder="Ask me anything about your pitch, market analysis, funding strategy..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="flex-1 min-h-[100px] p-3 border border-input rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      Pitch Review
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      Market Research
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      Financial Model
                    </span>
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate text-foreground">{activity.action}</p>
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

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Jump into your most-used tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-2"
                  >
                    <action.icon className="w-6 h-6" />
                    <div>
                      <p className="font-medium text-sm">{action.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress & Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Funding Progress</CardTitle>
                <CardDescription>Track your journey to funding success</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pitch Completion</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Market Validation</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Financial Model</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Stay on track with your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Pitch Competition Submission</p>
                    <p className="text-xs text-gray-500">Due in 5 days</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-red-100 text-red-800 text-xs flex-shrink-0">
                    High
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Investor Meeting Prep</p>
                    <p className="text-xs text-gray-500">Due in 2 weeks</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs flex-shrink-0">
                    Medium
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Market Research Update</p>
                    <p className="text-xs text-gray-500">Due in 3 weeks</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs flex-shrink-0">
                    Low
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;