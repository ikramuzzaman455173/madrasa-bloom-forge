import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";

const AdmissionTerms: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="admissionTermsTitle" subtitle="admissionTermsSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Terms" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileCheck className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Admission Terms & Conditions</h2>
                                <p className="text-xl opacity-90">{t("admissionTermsIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("admissionTermsIntro")}</p>
                </section>

                {/* Eligibility */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-7 h-7" />
                        {t("eligibilityCriteria")}
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "Must have passed the previous class with minimum 60% marks",
                            "Age limit as per government education policy",
                            "Good conduct certificate from previous institution",
                            "Pass the admission test with minimum 50% marks",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-foreground bg-secondary/30 p-4 rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Required Documents */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                        <FileCheck className="w-7 h-7" />
                        {t("requiredDocuments")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Birth Certificate (Original + 2 copies)",
                            "Previous Academic Certificates",
                            "Transfer Certificate (if applicable)",
                            "Passport size photographs (4 copies)",
                            "National ID copy of Guardian",
                            "Character Certificate",
                        ].map((doc, index) => (
                            <div key={index} className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-foreground">{doc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* General Rules */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-2xl font-bold text-primary mb-6">{t("admissionRules")}</h2>
                    <ul className="space-y-2">
                        {[
                            "Admission is subject to availability of seats",
                            "Selected candidates must complete admission within specified time",
                            "All fees must be paid as per the schedule",
                            "False information will result in cancellation of admission",
                            "Students must follow the institution's code of conduct",
                        ].map((rule, index) => (
                            <li key={index} className="flex items-start gap-2 text-foreground">
                                <span className="text-primary">•</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Withdrawal Policy */}
                <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">{t("withdrawalPolicy")}</h3>
                            <p className="text-yellow-700 dark:text-yellow-200">
                                Students who wish to withdraw must submit a written application. Refund of fees (if applicable)
                                will be processed as per institutional policy. No refund after 30 days of admission.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default AdmissionTerms;
