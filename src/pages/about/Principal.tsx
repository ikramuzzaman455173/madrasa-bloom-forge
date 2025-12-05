import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, GraduationCap, Award, Briefcase, Quote } from "lucide-react";
import principalImage from "@/assets/dr-professor.png";
import quranStudyImage from "@/assets/quran-study.png";

const PrincipalPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="principalPageTitle" subtitle="principalPageSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Principal Profile Section with Real Image */}
                <section className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
                    <div className="grid md:grid-cols-3 gap-0">
                        {/* Principal Photo */}
                        <div className="md:col-span-1">
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <img
                                    src={principalImage}
                                    alt="Principal"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                    <h3 className="text-xl font-bold">
                                        {t("principal")}
                                    </h3>
                                    <p className="text-sm mt-1">
                                        Institution Leader
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Principal Info */}
                        <div className="md:col-span-2 p-8">
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                {t("principalGreeting")}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                    <span>Ph.D. in Islamic Studies</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                    <span>25+ Years of Experience</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground bg-secondary/30 p-3 rounded-lg">
                                    <Award className="w-5 h-5 text-primary" />
                                    <span>National Education Excellence Award</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principal's Message with Quote Design */}
                <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-10 md:p-12 text-white shadow-2xl overflow-hidden">
                    {/* Decorative Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-10">
                        <Quote className="w-24 h-24" />
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-10 rotate-180">
                        <Quote className="w-24 h-24" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Quote className="w-8 h-8" />
                            {t("principalMessage")}
                        </h2>
                        <div className="prose prose-lg prose-invert max-w-none">
                            <p className="text-xl md:text-2xl leading-relaxed font-light italic">
                                "{t("principalMessageFull")}"
                            </p>
                        </div>
                        <div className="mt-8 text-right">
                            <p className="text-xl font-semibold">— {t("principal")}</p>
                            <p className="text-sm opacity-90 mt-1">
                                Bangladesh Science & Technology Madrasa
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quran Study Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={quranStudyImage}
                        alt="Quran Study"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-3">Our Educational Philosophy</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Combining traditional Islamic knowledge with modern scientific education to prepare students for both worlds
                            </p>
                        </div>
                    </div>
                </section>

                {/* Biography Section with Enhanced Design */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border space-y-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                        <User className="w-8 h-8" />
                        {t("principalBioTitle")}
                    </h2>

                    {/* Educational Background */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-500/10 p-3 rounded-lg">
                                <GraduationCap className="w-7 h-7 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">
                                {t("principalEducation")}
                            </h3>
                        </div>
                        <div className="grid gap-4 ml-4">
                            {[
                                {
                                    degree: "Ph.D. in Islamic Studies",
                                    institution: "Islamic University",
                                    year: "2010",
                                },
                                {
                                    degree: "M.Sc. in Education Management",
                                    institution: "Dhaka University",
                                    year: "2005",
                                },
                                {
                                    degree: "Bachelor's in Islamic Literature",
                                    institution: "Leading Madrasa",
                                    year: "2000",
                                },
                            ].map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/20 p-4 rounded-lg border-l-4 border-blue-500"
                                >
                                    <h4 className="font-bold text-foreground text-lg">{edu.degree}</h4>
                                    <p className="text-muted-foreground">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-green-500/10 p-3 rounded-lg">
                                <Briefcase className="w-7 h-7 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">
                                {t("principalExperience")}
                            </h3>
                        </div>
                        <div className="grid gap-4 ml-4">
                            {[
                                "25+ years of experience in educational leadership",
                                "Former Vice Principal at renowned institutions",
                                "Published researcher in Islamic education",
                                "Educational consultant to multiple madrasas",
                                "Workshop facilitator on integrated education",
                            ].map((exp, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20 p-4 rounded-lg"
                                >
                                    <div className="bg-green-500/20 p-1 rounded-full mt-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-foreground flex-1">{exp}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-purple-500/10 p-3 rounded-lg">
                                <Award className="w-7 h-7 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">
                                {t("principalAchievements")}
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 ml-4">
                            {[
                                {
                                    award: "National Education Excellence Award",
                                    year: "2020",
                                    icon: Award,
                                },
                                {
                                    award: "Outstanding Islamic Scholarship",
                                    year: "2018",
                                    icon: GraduationCap,
                                },
                                {
                                    award: "Community Service Recognition",
                                    year: "2015",
                                    icon: User,
                                },
                                {
                                    award: "Author of Multiple Educational Books",
                                    year: "2010-Present",
                                    icon: Briefcase,
                                },
                            ].map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20 p-5 rounded-lg border border-purple-200 dark:border-purple-900 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex items-start gap-3">
                                            <Icon className="w-6 h-6 text-purple-500 mt-1" />
                                            <div className="flex-1">
                                                <h4 className="font-bold text-foreground">{achievement.award}</h4>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {achievement.year}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Inspirational Quote */}
                <section className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 border-l-4 border-primary">
                    <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <p className="text-xl italic text-foreground leading-relaxed">
                                "Education is not just about filling minds with knowledge, but igniting hearts with the light of wisdom and values."
                            </p>
                            <p className="text-right text-primary font-semibold mt-4">
                                — Principal's Philosophy
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default PrincipalPage;
