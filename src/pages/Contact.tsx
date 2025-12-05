import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe } from "lucide-react";

const ContactPage: React.FC = () => {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: MapPin,
            title: t("address"),
            content: "123 Education Road, Dhaka Division, Bangladesh",
            color: "from-blue-500/20 to-blue-500/5",
            emoji: "📍",
        },
        {
            icon: Phone,
            title: t("phone"),
            content: "+880 1234-567890",
            content2: "+880 9876-543210",
            color: "from-green-500/20 to-green-500/5",
            emoji: "📞",
        },
        {
            icon: Mail,
            title: t("email"),
            content: "info@madrasa.edu.bd",
            content2: "admissions@madrasa.edu.bd",
            color: "from-purple-500/20 to-purple-500/5",
            emoji: "✉️",
        },
        {
            icon: Clock,
            title: "Office Hours",
            content: "Saturday - Thursday",
            content2: "9:00 AM - 5:00 PM",
            color: "from-orange-500/20 to-orange-500/5",
            emoji: "🕐",
        },
    ];

    return (
        <PageLayout title="contact" subtitle="contactInfo">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-primary to-primary-dark">
                    <div className="aspect-[21/9] flex items-center justify-center p-8">
                        <div className="text-center text-white max-w-3xl">
                            <div className="flex justify-center gap-4 mb-6">
                                <div className="text-6xl">📧</div>
                                <div className="text-6xl">📞</div>
                                <div className="text-6xl">📍</div>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">
                                Get In Touch With Us
                            </h2>
                            <p className="text-xl opacity-90">
                                We're here to answer your questions and help you on your educational journey
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Information Cards */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div
                                key={index}
                                className="group"
                            >
                                {/* Icon Visual */}
                                <div className={`aspect-square rounded-t-xl bg-gradient-to-br ${info.color} flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform`}>
                                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                        {info.emoji}
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="bg-card rounded-b-xl p-5 shadow-md border border-t-0 border-border text-center">
                                    <h3 className="text-lg font-bold text-primary mb-3">
                                        {info.title}
                                    </h3>
                                    <p className="text-foreground text-sm leading-relaxed">
                                        {info.content}
                                    </p>
                                    {info.content2 && (
                                        <p className="text-foreground text-sm leading-relaxed mt-1">
                                            {info.content2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Contact Form and Map */}
                <section className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-card rounded-xl p-8 shadow-xl border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Send className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">
                                Send Us a Message
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Message subject"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Message *
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Write your message here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
                            >
                                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Location Info and Social */}
                    <div className="space-y-6">
                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20 overflow-hidden shadow-lg">
                            <div className="aspect-video flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🗺️</div>
                                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        Visit Our Campus
                                    </h3>
                                    <p className="text-foreground font-semibold">
                                        123 Education Road, Dhaka Division
                                    </p>
                                    <p className="text-muted-foreground mt-2">
                                        Google Maps integration available
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Get Directions */}
                        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6" />
                                Get Directions
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "🚇 15 minutes from Dhaka City Center",
                                    "🚌 Near Main Bus Station",
                                    "🚕 Accessible by public transport",
                                    "🅿️ Ample parking available",
                                ].map((direction, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-foreground bg-secondary/30 p-3 rounded-lg"
                                    >
                                        <span>{direction}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-primary/20">
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6" />
                                Connect With Us
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { emoji: "📘", label: "Facebook" },
                                    { emoji: "📸", label: "Instagram" },
                                    { emoji: "🐦", label: "Twitter" },
                                ].map((social, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                                    >
                                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                                            {social.emoji}
                                        </div>
                                        <p className="text-xs font-semibold text-foreground">{social.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white rounded-xl p-10 text-center shadow-2xl">
                    <div className="flex justify-center gap-4 mb-4">
                        <div className="text-5xl">🚨</div>
                        <Phone className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Emergency Contact</h2>
                    <p className="text-xl mb-4">For urgent matters, please call:</p>
                    <a
                        href="tel:+8801234567890"
                        className="inline-block text-3xl font-bold mb-2 hover:underline"
                    >
                        +880 1234-567890
                    </a>
                    <p className="text-lg opacity-90">Available 24/7</p>
                </section>

                {/* Quick Contact Options */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Quick Contact Options
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Phone,
                                emoji: "☎️",
                                title: "Call Us",
                                description: "Speak directly with our staff",
                            },
                            {
                                icon: MessageCircle,
                                emoji: "💬",
                                title: "Live Chat",
                                description: "Chat with us online",
                            },
                            {
                                icon: Mail,
                                emoji: "📧",
                                title: "Email Us",
                                description: "Send us your questions",
                            },
                        ].map((option, index) => {
                            const Icon = option.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors group cursor-pointer"
                                >
                                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                                        {option.emoji}
                                    </div>
                                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {option.title}
                                    </h3>
                                    <p className="text-muted-foreground">{option.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ContactPage;
