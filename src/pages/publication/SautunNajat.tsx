import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";
import prayerImage from "@/assets/prayer-spirituality.png";

const SautunNajat: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="pubSautunNajatTitle" subtitle="pubSautunNajatSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={prayerImage} alt="Sautun Najat" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <BookOpen className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Sautun Najat</h2>
                                <p className="text-xl opacity-90">Islamic Guidance & Spiritual Literature</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg text-foreground">
                        "Sautun Najat" is our Islamic guidance publication focusing on spiritual development, moral values, and Islamic teachings for students and families.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {["Quranic Teachings", "Hadith Commentary", "Islamic History", "Moral Guidance"].map((topic, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                            <div className="text-4xl mb-3">📖</div>
                            <h3 className="text-xl font-bold text-primary">{topic}</h3>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default SautunNajat;
