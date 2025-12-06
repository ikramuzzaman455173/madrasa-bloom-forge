import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Bed, Shield, Utensils } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";
import studentsImage from "@/assets/students-community.png";

const HostelIntro: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="hostelIntroTitle" subtitle="hostelIntroSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery4} alt="Hostel" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Home className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Your Home Away From Home</h2>
                                <p className="text-xl opacity-90">{t("hostelIntroText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("hostelIntroText")}</p>
                </section>

                {/* Facilities */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Bed, title: "Comfortable Rooms", emoji: "🛏️", desc: "Well-furnished rooms" },
                        { icon: Utensils, title: "Nutritious Meals", emoji: "🍽️", desc: "Hygienic dining" },
                        { icon: Shield, title: "24/7 Security", emoji: "🔒", desc: "Safe environment" },
                        { icon: Home, title: "Study Space", emoji: "📚", desc: "Dedicated areas" },
                    ].map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{facility.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                                <p className="text-foreground">{facility.desc}</p>
                            </div>
                        );
                    })}
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={studentsImage} alt="Students" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Community Living</h3>
                            <p className="text-lg opacity-90">Building lifelong friendships and brotherhood</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default HostelIntro;
