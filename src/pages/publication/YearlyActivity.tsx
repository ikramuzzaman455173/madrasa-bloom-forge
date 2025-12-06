import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";

const YearlyActivity: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="pubYearlyActivityTitle" subtitle="pubYearlyActivitySubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery2} alt="Activities" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileText className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Annual Activities Report 2023-2024</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg text-foreground">
                        Our comprehensive yearly report showcasing all academic, cultural, and sports activities conducted throughout the year.
                    </p>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {["Academic Excellence", "Sports Achievements", "Cultural Programs"].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border border-primary/20">
                            <div className="text-5xl mb-3">{index === 0 ? "📚" : index === 1 ? "🏆" : "🎭"}</div>
                            <h3 className="text-xl font-bold text-primary">{item}</h3>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default YearlyActivity;
