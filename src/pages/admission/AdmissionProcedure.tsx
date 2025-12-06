import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ListChecks, CheckCircle2 } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import studentsImage from "@/assets/students-community.png";

const AdmissionProcedure: React.FC = () => {
    const { t } = useLanguage();

    const steps = [
        { key: "procedureStep1", icon: "📋", color: "from-blue-500/20" },
        { key: "procedureStep2", icon: "📄", color: "from-green-500/20" },
        { key: "procedureStep3", icon: "💳", color: "from-purple-500/20" },
        { key: "procedureStep4", icon: "✍️", color: "from-orange-500/20" },
        { key: "procedureStep5", icon: "📊", color: "from-pink-500/20" },
        { key: "procedureStep6", icon: "🎓", color: "from-teal-500/20" },
    ];

    return (
        <PageLayout title="admissionProcedureTitle" subtitle="admissionProcedureSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery1} alt="Admission Procedure" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <ListChecks className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Simple Admission Process</h2>
                                <p className="text-xl opacity-90">{t("admissionProcedureIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("admissionProcedureIntro")}</p>
                </section>

                {/* Steps */}
                <section className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className={`bg-gradient-to-br ${step.color} to-transparent rounded-xl p-6 border border-primary/20 flex items-start gap-6`}>
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="text-4xl mb-2">{step.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{t(step.key)}</h3>
                            </div>
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                    ))}
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={studentsImage} alt="Students" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-2">Join Our Community</h3>
                            <p className="text-lg opacity-90">Follow these steps to become part of our educational family</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default AdmissionProcedure;
