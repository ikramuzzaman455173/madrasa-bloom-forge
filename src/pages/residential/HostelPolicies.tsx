import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileCheck, AlertCircle } from "lucide-react";
import studentsImage from "@/assets/students-community.png";

const HostelPolicies: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="hostelPoliciesTitle" subtitle="hostelPoliciesSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Policies" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileCheck className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Hostel Policies</h2>
                                <p className="text-xl opacity-90">{t("hostelPoliciesIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("hostelPoliciesIntro")}</p>
                </section>

                {[
                    { title: "admissionPolicy", text: "Students must meet eligibility criteria and follow admission procedures as outlined by the institution." },
                    { title: "refundPolicy", text: "Security deposit will be refunded upon successful completion of residence. Monthly fees are non-refundable." },
                    { title: "disciplinaryPolicy", text: "Violation of rules may result in warnings, fines, or expulsion from hostel depending on severity." },
                    { title: "emergencyPolicy", text: "24/7 emergency contact available. Medical emergencies will be handled with immediate attention." },
                ].map((policy, index) => (
                    <section key={index} className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-primary mb-3">{t(policy.title)}</h3>
                        <p className="text-foreground leading-relaxed">{policy.text}</p>
                    </section>
                ))}

                <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">Important Note</h3>
                            <p className="text-yellow-700 dark:text-yellow-200">
                                All residents must familiarize themselves with these policies and comply accordingly.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default HostelPolicies;
