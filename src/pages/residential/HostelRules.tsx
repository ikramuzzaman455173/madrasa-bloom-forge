import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, CheckCircle2 } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";

const HostelRules: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="hostelRulesTitle" subtitle="hostelRulesSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Rules" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileText className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Hostel Rules & Regulations</h2>
                                <p className="text-xl opacity-90">{t("hostelRulesIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("hostelRulesIntro")}</p>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "generalRules", rules: ["Maintain cleanliness", "Respect all residents", "Follow timings", "Conserve resources"] },
                        { title: "disciplineRules", rules: ["Regular attendance", "Proper conduct", "No ragging", "Dress code adherence"] },
                        { title: "studyHours", rules: ["10 PM - 6 AM silence", "Dedicated study time", "No loud devices", "Library hours"] },
                        { title: "visitingRules", rules: ["Prior permission required", "Visitor hours: 2-5 PM", "Register at gate", "Guardian approval"] },
                    ].map((section, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border">
                            <h3 className="text-2xl font-bold text-primary mb-4">{t(section.title)}</h3>
                            <ul className="space-y-2">
                                {section.rules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default HostelRules;
