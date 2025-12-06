import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, Wallet } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";

const HostelCharges: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="hostelChargesTitle" subtitle="hostelChargesSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery3} alt="Charges" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <DollarSign className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Hostel Fee Structure</h2>
                                <p className="text-xl opacity-90">{t("hostelChargesIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("hostelChargesIntro")}</p>
                </section>

                <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { title: "admissionCharge", amount: "৳3,000", icon: Wallet, emoji: "📋" },
                        { title: "monthlyCharge", amount: "৳1,500", icon: DollarSign, emoji: "💰" },
                        { title: "securityDeposit", amount: "৳5,000", icon: Wallet, emoji: "🔒" },
                        { title: "mealCharges", amount: "৳2,500/mo", icon: DollarSign, emoji: "🍽️" },
                        { title: "utilityCharges", amount: "৳500/mo", icon: Wallet, emoji: "💡" },
                    ].map((charge, index) => {
                        const Icon = charge.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                                <div className="text-5xl mb-3">{charge.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-sm font-bold text-primary mb-2">{t(charge.title)}</h3>
                                <p className="text-2xl font-bold text-foreground">{charge.amount}</p>
                            </div>
                        );
                    })}
                </section>
            </div>
        </PageLayout>
    );
};

export default HostelCharges;
