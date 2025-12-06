import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Home, Users, GraduationCap } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import gallery4 from "@/assets/gallery-4.jpg";

const OrphanageBranch: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="brOrphanageTitle" subtitle="brOrphanageSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Orphanage" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Heart className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Orphanage Branch</h2>
                                <p className="text-xl opacity-90">{t("brOrphanageText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("brOrphanageText")}</p>
                </section>

                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Home, title: "Safe Shelter", desc: "Comfortable living spaces", emoji: "🏠" },
                        { icon: Users, title: "Family Environment", desc: "Loving care & support", emoji: "❤️" },
                        { icon: GraduationCap, title: "Quality Education", desc: "Full academic program", emoji: "📚" },
                        { icon: Heart, title: "Healthcare", desc: "Medical care & nutrition", emoji: "🏥" },
                    ].map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{service.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                                <p className="text-sm text-foreground">{service.desc}</p>
                            </div>
                        );
                    })}
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Commitment</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Education & Development", points: ["Regular schooling", "Islamic education", "Skill development", "Counseling support"] },
                            { title: "Daily Care", points: ["Nutritious meals", "Clean accommodation", "Healthcare checkups", "Recreational activities"] },
                        ].map((category, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={gallery4} alt="Care" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Building Bright Futures</h3>
                            <p className="text-lg opacity-90">Every child deserves love, care, and quality education</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default OrphanageBranch;
