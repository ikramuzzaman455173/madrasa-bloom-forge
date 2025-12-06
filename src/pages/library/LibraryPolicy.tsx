import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileCheck, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const LibraryPolicy: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="libPolicyTitle" subtitle="libPolicySubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={calligraphyImage} alt="Policy" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileCheck className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Library Policy</h2>
                                <p className="text-xl opacity-90">{t("libPolicyText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("libPolicyText")}</p>
                </section>

                {/* Library Hours */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-8 h-8 text-primary" />
                        <h2 className="text-2xl font-bold text-primary">Library Hours</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/30 rounded-lg p-4">
                            <p className="font-semibold text-foreground mb-2">Regular Days (Sat-Thu)</p>
                            <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                        </div>
                        <div className="bg-secondary/30 rounded-lg p-4">
                            <p className="font-semibold text-foreground mb-2">Friday</p>
                            <p className="text-muted-foreground">Closed</p>
                        </div>
                    </div>
                </section>

                {/* Borrowing Rules */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-2xl font-bold text-primary mb-6">Borrowing Rules</h2>
                    <ul className="space-y-3">
                        {[
                            "Students can borrow up to 3 books at a time",
                            "Loan period: 14 days (renewable once)",
                            "Reference books cannot be borrowed",
                            "Valid ID card required for borrowing",
                            "Overdue fines: ৳5 per day per book",
                        ].map((rule, index) => (
                            <li key={index} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-4">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{rule}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* General Rules */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-2xl font-bold text-primary mb-6">General Rules</h2>
                    <ul className="space-y-2">
                        {[
                            "Maintain silence in the library",
                            "Mobile phones must be on silent mode",
                            "No food or drinks allowed",
                            "Handle books with care",
                            "Report damaged or lost books immediately",
                            "Respect other library users",
                        ].map((rule, index) => (
                            <li key={index} className="flex items-start gap-2 text-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Important Notice */}
                <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-500 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">Important Notice</h3>
                            <p className="text-yellow-700 dark:text-yellow-200">
                                Violation of library rules may result in suspension of borrowing privileges. Please respect the library environment and resources.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default LibraryPolicy;
