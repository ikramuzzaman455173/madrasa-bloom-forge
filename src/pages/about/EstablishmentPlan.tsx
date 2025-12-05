import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lightbulb, TrendingUp, Rocket, Globe } from "lucide-react";
import mosqueImage from "@/assets/mosque-architecture.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const EstablishmentPlan: React.FC = () => {
    const { t } = useLanguage();

    const phases = [
        {
            icon: Lightbulb,
            phase: "establishmentPhase1",
            description: "establishmentPhase1Text",
            color: "bg-blue-500",
        },
        {
            icon: TrendingUp,
            phase: "establishmentPhase2",
            description: "establishmentPhase2Text",
            color: "bg-green-500",
        },
        {
            icon: Rocket,
            phase: "establishmentPhase3",
            description: "establishmentPhase3Text",
            color: "bg-purple-500",
        },
    ];

    return (
        <PageLayout title="establishmentTitle" subtitle="establishmentSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={mosqueImage}
                            alt="Our Vision"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Lightbulb className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Building the Future of Islamic Education
                                </h2>
                                <p className="text-xl opacity-90">
                                    {t("establishmentVisionText")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8" />
                        {t("establishmentVision")}
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground">
                        {t("establishmentVisionText")}
                    </p>
                </section>

                {/* Development Phases */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        {t("establishmentPhases")}
                    </h2>

                    <div className="space-y-6">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex gap-6 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all"
                                >
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`${phase.color} w-16 h-16 rounded-full flex items-center justify-center text-white`}
                                        >
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {t(phase.phase)}
                                        </h3>
                                        <p className="text-foreground leading-relaxed">
                                            {t(phase.description)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Campus Development Images */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img
                            src={gallery1}
                            alt="Campus Development Phase 1"
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Foundation Phase</h3>
                                <p className="text-sm opacity-90">
                                    Establishing core infrastructure and facilities
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img
                            src={gallery3}
                            alt="Campus Development Phase 2"
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Expansion Phase</h3>
                                <p className="text-sm opacity-90">
                                    Growing infrastructure and academic programs
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Future Plans */}
                <section className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border border-primary/20">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                        <Globe className="w-8 h-8" />
                        {t("establishmentFuture")}
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground mb-6">
                        {t("establishmentFutureText")}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Digital Learning Platforms",
                            "Research & Innovation Centers",
                            "International Partnerships",
                            "Advanced Infrastructure",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-foreground font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default EstablishmentPlan;
