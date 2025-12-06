import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, PartyPopper } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const Functions: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="functionsTitle" subtitle="functionsSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery1} alt="Events" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <PartyPopper className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Annual Events & Functions</h2>
                                <p className="text-xl opacity-90">{t("functionsIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "functionsAnnual", emoji: "🎉", desc: "Celebrating achievements and milestones" },
                        { title: "functionsSports", emoji: "🏆", desc: "Annual sports competitions and athletics" },
                        { title: "functionsIslamic", emoji: "🕌", desc: "Religious observances and Quran competitions" },
                        { title: "functionsAcademic", emoji: "📚", desc: "Science fairs, debates, and exhibitions" },
                    ].map((event, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                            <div className="text-5xl mb-3">{event.emoji}</div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{t(event.title)}</h3>
                            <p className="text-foreground">{event.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default Functions;
