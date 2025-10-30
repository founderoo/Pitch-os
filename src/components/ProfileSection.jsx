











import React, { useState, useEffect } from 'react';
import { User, Settings, CreditCard, Bell, LogOut, X, Camera, Edit2, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { cn } from "@/lib/utils";

const db = getFirestore();

const ProfileSection = ({ user, isOpen, onClose, onLogout }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [onboardingStatus, setOnboardingStatus] = useState(null);
    const [loadingOnboardingStatus, setLoadingOnboardingStatus] = useState(true);

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'billing', label: 'Billing', icon: CreditCard },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    // Check onboarding status when component mounts
    useEffect(() => {
        const checkOnboardingStatus = async () => {
            if (!user?.uid) return;
            
            try {
                setLoadingOnboardingStatus(true);
                const settingsRef = doc(db, "userSettings", user.uid);
                const settingsDoc = await getDoc(settingsRef);
                
                if (settingsDoc.exists()) {
                    const data = settingsDoc.data();
                    setOnboardingStatus({
                        completed: data.onboardingCompleted || false,
                        skipped: data.skipped || false
                    });
                } else {
                    // No settings document means onboarding not completed
                    setOnboardingStatus({
                        completed: false,
                        skipped: false
                    });
                }
            } catch (error) {
                console.error('Error checking onboarding status:', error);
                setOnboardingStatus({
                    completed: false,
                    skipped: false
                });
            } finally {
                setLoadingOnboardingStatus(false);
            }
        };

        if (isOpen && user) {
            checkOnboardingStatus();
        }
    }, [isOpen, user]);

    // Update displayName when user changes
    useEffect(() => {
        setDisplayName(user?.displayName || '');
    }, [user?.displayName]);

    const handleSave = async () => {
        if (!displayName.trim()) {
            setUpdateError('Display name cannot be empty');
            return;
        }

        setIsUpdating(true);
        setUpdateError('');
        setUpdateSuccess(false);

        try {
            // Update Firebase Auth profile
            await updateProfile(auth.currentUser, {
                displayName: displayName.trim()
            });

            setUpdateSuccess(true);
            setIsEditing(false);
            
            // Clear success message after 3 seconds
            setTimeout(() => setUpdateSuccess(false), 3000);
            
        } catch (error) {
            console.error('Error updating profile:', error);
            setUpdateError('Failed to update profile. Please try again.');
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancel = () => {
        setDisplayName(user?.displayName || '');
        setIsEditing(false);
        setUpdateError('');
        setUpdateSuccess(false);
    };

    const handleContinueOnboarding = () => {
        // Close the profile modal and navigate to onboarding
        onClose();
        window.location.href = '/onboarding';
    };

    // Early return AFTER all hooks have been called
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-card rounded-lg shadow-xl w-full h-full sm:w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:h-auto sm:max-h-[95vh] overflow-hidden border">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b sticky top-0 z-10 bg-card">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">Account Settings</h2>
                    <Button variant="ghost" size="icon" onClick={onClose} className="flex-shrink-0">
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                </div>

                {/* Mobile Tab Navigation */}
                <div className="block sm:hidden border-b sticky top-14 z-10 bg-card">
                    <div className="flex overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "flex-shrink-0 flex items-center gap-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                                    activeTab === tab.id
                                        ? "border-primary text-primary bg-primary/10"
                                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent"
                                )}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex h-full sm:h-auto">
                    {/* Desktop Sidebar */}
                    <div className="hidden sm:block w-48 md:w-56 lg:w-64 bg-muted/50 p-4 space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors",
                                    activeTab === tab.id
                                        ? "bg-primary/10 text-primary border border-primary/20"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="text-sm md:text-base">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto h-full sm:max-h-[75vh]">
                        {activeTab === 'profile' && (
                            <div className="space-y-4 sm:space-y-6">
                                {/* Onboarding Status Banner */}
                                {!loadingOnboardingStatus && onboardingStatus && onboardingStatus.skipped && (
                                    <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/50">
                                        <CardContent className="pt-4">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Complete Your Profile Setup</h3>
                                                    <p className="text-sm text-amber-700 dark:text-amber-300">
                                                        You skipped the initial setup. Complete it now to personalize your PitchOS experience and get better recommendations.
                                                    </p>
                                                </div>
                                                <Button
                                                    onClick={handleContinueOnboarding}
                                                    className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2 whitespace-nowrap"
                                                    size="sm"
                                                >
                                                    Complete Setup
                                                    <ArrowRight className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Onboarding Completed Banner */}
                                {!loadingOnboardingStatus && onboardingStatus && onboardingStatus.completed && !onboardingStatus.skipped && (
                                    <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/50">
                                        <CardContent className="pt-4">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                                <div>
                                                    <h3 className="font-semibold text-green-800 dark:text-green-200">Profile Setup Complete</h3>
                                                    <p className="text-sm text-green-700 dark:text-green-300">
                                                        Your profile is fully set up and personalized.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Profile Picture */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-primary/10 rounded-full flex items-center justify-center">
                                            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                                                {user?.displayName?.[0] || user?.email?.[0] || '?'}
                                            </span>
                                        </div>
                                        <button className="absolute -bottom-1 -right-1 p-1.5 bg-card rounded-full border shadow-sm hover:bg-accent transition-colors">
                                            <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </div>
                                    <div className="text-center sm:text-left flex-1">
                                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">{user?.displayName || 'User'}</h3>
                                        <p className="text-sm sm:text-base text-muted-foreground break-all sm:break-normal">{user?.email}</p>
                                        <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full mt-2">
                                            Pro Member
                                        </span>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <Card>
                                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-3">
                                        <CardTitle className="text-base sm:text-lg md:text-xl">Personal Information</CardTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsEditing(!isEditing)}
                                            className="hover:bg-muted"
                                            disabled={isUpdating}
                                        >
                                            <Edit2 className="w-4 h-4 mr-2" />
                                            {isEditing ? 'Cancel' : 'Edit'}
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="space-y-4 sm:space-y-6">
                                        {/* Success/Error Messages */}
                                        {updateSuccess && (
                                            <div className="p-3 bg-green-50/50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg">
                                                <p className="text-sm text-green-800 dark:text-green-200 font-medium">Profile updated successfully!</p>
                                            </div>
                                        )}
                                        {updateError && (
                                            <div className="p-3 bg-red-50/50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg">
                                                <p className="text-sm text-red-800 dark:text-red-200 font-medium">{updateError}</p>
                                            </div>
                                        )}

                                        <div>
                                            <label className="text-sm font-medium text-foreground block mb-1">Display Name</label>
                                            {isEditing ? (
                                                <Input
                                                    value={displayName}
                                                    onChange={(e) => setDisplayName(e.target.value)}
                                                    className="text-sm sm:text-base"
                                                    placeholder="Enter your display name"
                                                    disabled={isUpdating}
                                                />
                                            ) : (
                                                <p className="text-sm sm:text-base break-words">{user?.displayName || 'Not set'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-foreground block mb-1">Email</label>
                                            <p className="text-sm sm:text-base break-all">{user?.email}</p>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-foreground block mb-1">Member Since</label>
                                            <p className="text-sm sm:text-base">January 2024</p>
                                        </div>
                                        {isEditing && (
                                            <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                                <Button onClick={handleSave} size="sm" className="w-full sm:w-auto">
                                                    {isUpdating ? (
                                                        <>
                                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                            Saving...
                                                        </>
                                                    ) : (
                                                        'Save Changes'
                                                    )}
                                                </Button>
                                                <Button variant="outline" onClick={handleCancel} size="sm" className="w-full sm:w-auto">
                                                    Cancel
                                                </Button>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">Preferences</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6 space-y-4">
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-1">
                                                <span className="text-sm sm:text-base font-medium">Dark Mode</span>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Switch to dark theme</p>
                                            </div>
                                            <input type="checkbox" className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-1">
                                                <span className="text-sm sm:text-base font-medium">Email Notifications</span>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Receive email updates</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div className="flex-1">
                                                <span className="text-sm sm:text-base font-medium">Auto-save Pitches</span>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Automatically save your work</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'billing' && (
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">Billing & Subscription</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                                                <span className="text-sm sm:text-base font-medium">Current Plan</span>
                                                <span className="text-sm sm:text-base font-semibold text-primary">Pro Member</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                                                <span className="text-sm sm:text-base font-medium">Next Billing</span>
                                                <span className="text-sm sm:text-base">Feb 15, 2024</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                                                <span className="text-sm sm:text-base font-medium">Amount</span>
                                                <span className="text-sm sm:text-base font-semibold">$29/month</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 mt-6">
                                            <Button className="w-full sm:flex-1" variant="outline">
                                                Manage Subscription
                                            </Button>
                                            <Button className="w-full sm:w-auto" variant="ghost">
                                                View Invoices
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">Notification Preferences</h3>
                                <Card>
                                    <CardContent className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Pitch Updates</p>
                                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Get notified about pitch feedback and status changes</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Community Activity</p>
                                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Updates from community discussions and activities</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Funding Opportunities</p>
                                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Receive alerts about new funding matches and opportunities</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <p className="font-medium text-sm sm:text-base">Security Alerts</p>
                                                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Important security notifications and account alerts</p>
                                            </div>
                                            <input type="checkbox" defaultChecked className="rounded w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 sm:p-4 md:p-6 border-t bg-muted/50 gap-3 sm:gap-4 sticky bottom-0">
                    <div className="hidden sm:flex text-xs sm:text-sm text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <Button variant="ghost" onClick={onClose} className="order-2 sm:order-1">
                            Close
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onLogout}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20 order-1 sm:order-2"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
ProfileSection.jsx


ProfileSection.jsx
