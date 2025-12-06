import React, { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import mosqueImage from "@/assets/mosque-architecture.png";

const AdminLogin: React.FC = () => {
    const { t } = useLanguage();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Admin login attempt:", formData);
    };

    return (
        <PageLayout title="loginAdminTitle" subtitle="loginAdminSubtitle">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Image & Welcome */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[4/5] relative">
                            <img src={mosqueImage} alt="Admin" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h2 className="text-3xl font-bold mb-3">Admin Panel</h2>
                                    <p className="text-lg opacity-90">{t("loginAdminWelcome")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <div className="mb-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{t("loginAdminTitle")}</h3>
                            <p className="text-muted-foreground">{t("loginAdminSubtitle")}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Username Field */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                                    Admin Username
                                </label>
                                <div className="relative">
                                    <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        id="username"
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                        placeholder="Enter your admin username"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.remember}
                                        onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                        className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                                    />
                                    <span className="text-sm text-foreground">Keep me signed in</span>
                                </label>
                                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <LogIn className="w-5 h-5" />
                                <span>Secure Login</span>
                            </button>

                            {/* Security Notice */}
                            <div className="pt-4 text-center border-t border-border">
                                <p className="text-xs text-muted-foreground">
                                    <Shield className="w-4 h-4 inline-block mr-1" />
                                    Secure administrative access. All activities are logged.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AdminLogin;
