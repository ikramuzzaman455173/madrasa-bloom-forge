import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Library, Users } from "lucide-react";
import libraryImage from "@/assets/islamic-library.png";
import studentsImage from "@/assets/students-community.png";

const LibraryIntro: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="libIntroTitle" subtitle="libIntroSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={libraryImage} alt="Library" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Library className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Our Library</h2>
                                <p className="text-xl opacity-90">{t("libIntroText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("libIntroText")}</p>
                </section>

                {/* Library Statistics */}
                <section className="grid md:grid-cols-4 gap-6">
                    {[
                        { icon: BookOpen, label: "Total Books", value: "10,000+", emoji: "📚" },
                        { icon: Library, label: "Reading Space", value: "200 Seats", emoji: "🪑" },
                        { icon: Users, label: "Daily Visitors", value: "500+", emoji: "👥" },
                        { icon: BookOpen, label: "Digital Resources", value: "5,000+", emoji: "💻" },
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{stat.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                                <p className="text-sm text-foreground">{stat.label}</p>
                            </div>
                        );
                    })}
                </section>

                {/* Facilities */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Library Facilities</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Reading Room", desc: "Spacious and quiet study environment" },
                            { title: "Digital Resources", desc: "Access to e-books and online journals" },
                            { title: "Reference Section", desc: "Comprehensive reference materials" },
                            { title: "Research Support", desc: "Assistance from trained librarians" },
                        ].map((facility, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                                <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                                <p className="text-foreground">{facility.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={studentsImage} alt="Students" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Knowledge Hub</h3>
                            <p className="text-lg opacity-90">A place where students explore, learn, and grow</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default LibraryIntro;
