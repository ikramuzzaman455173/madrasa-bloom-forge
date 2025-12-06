import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, TrendingUp } from "lucide-react";
import studentsImage from "@/assets/students-community.png";

const Results: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="resultsTitle" subtitle="resultsSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Results" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Award className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Outstanding Academic Results</h2>
                                <p className="text-xl opacity-90">{t("resultsIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        { label: "Pass Rate", value: "98%", icon: TrendingUp },
                        { label: "A+ Students", value: "45%", icon: Award },
                        { label: "Merit Positions", value: "25+", icon: Award },
                    ].map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border border-primary/20">
                            {React.createElement(stat.icon, { className: "w-12 h-12 mx-auto mb-3 text-primary" })}
                            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-lg text-foreground">{stat.label}</div>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default Results;
