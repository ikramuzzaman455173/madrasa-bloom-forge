import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import gallery2 from "@/assets/gallery-2.jpg";

const AdmissionTime: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="admissionTimeTitle" subtitle="admissionTimeSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Admission Time" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Calendar className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Admission Schedule 2024-2025</h2>
                                <p className="text-xl opacity-90">{t("admissionTimeIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("admissionTimeIntro")}</p>
                </section>

                {/* Admission Timeline */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        {t("admissionSession")} 2024-2025
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                level: "Class 1-5 (Primary)",
                                period: "January 1 - February 28, 2024",
                                deadline: "February 28, 2024",
                                testDate: "March 15, 2024",
                            },
                            {
                                level: "Class 6-10 (Secondary)",
                                period: "January 1 - February 28, 2024",
                                deadline: "February 28, 2024",
                                testDate: "March 20, 2024",
                            },
                            {
                                level: "Class 11-12 (Higher Secondary)",
                                period: "June 1 - July 15, 2024",
                                deadline: "July 15, 2024",
                                testDate: "July 30, 2024",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-4">{item.level}</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold text-foreground">{t("admissionPeriod")}</p>
                                            <p className="text-muted-foreground">{item.period}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                                        <div>
                                            <p className="font-semibold text-foreground">{t("admissionDeadline")}</p>
                                            <p className="text-muted-foreground">{item.deadline}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-semibold text-foreground">Test Date</p>
                                            <p className="text-muted-foreground">{item.testDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Campus Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={gallery2} alt="Campus" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Apply Today!</h3>
                            <p className="text-lg opacity-90">Don't miss the opportunity to join our prestigious institution</p>
                        </div>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">Important Note</h3>
                            <p className="text-yellow-700 dark:text-yellow-200">
                                Application forms must be submitted before the deadline. Late applications will not be accepted.
                                For more information, please contact the admission office.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default AdmissionTime;
