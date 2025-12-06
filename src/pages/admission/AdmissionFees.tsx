import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, CreditCard, Wallet } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";

const AdmissionFees: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="admissionFeesTitle" subtitle="admissionFeesSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery4} alt="Fees" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <DollarSign className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Affordable Fee Structure</h2>
                                <p className="text-xl opacity-90">{t("admissionFeesIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("admissionFeesIntro")}</p>
                </section>

                {/* Fee Structure */}
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "applicationFee", amount: "৳500", icon: Wallet, emoji: "📋" },
                        { title: "admissionFee", amount: "৳5,000", icon: CreditCard, emoji: "🎓" },
                        { title: "monthlyTuition", amount: "৳2,000", icon: DollarSign, emoji: "📚" },
                        { title: "annualFees", amount: "৳10,000", icon: Wallet, emoji: "📊" },
                    ].map((fee, index) => {
                        const Icon = fee.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{fee.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-lg font-bold text-primary mb-2">{t(fee.title)}</h3>
                                <p className="text-3xl font-bold text-foreground">{fee.amount}</p>
                            </div>
                        );
                    })}
                </section>

                {/* Payment Methods */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">{t("paymentMethods")}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { method: "Bank Transfer", icon: "🏦" },
                            { method: "bKash/Nagad", icon: "📱" },
                            { method: "Cash Payment", icon: "💵" },
                        ].map((payment, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
                                <div className="text-5xl mb-3">{payment.icon}</div>
                                <p className="font-bold text-foreground">{payment.method}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Scholarship Info */}
                <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">Scholarship Opportunities</h3>
                    <p className="text-foreground leading-relaxed">
                        We offer merit-based and need-based scholarships to deserving students. Contact the admission office for more information.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default AdmissionFees;
