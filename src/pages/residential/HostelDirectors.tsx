import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Shield } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";

const HostelDirectors: React.FC = () => {
    const { t } = useLanguage();

    const staff = [
        { position: "maleHostelDirector", name: "Mr. Abdul Jabbar", experience: "15+ years" },
        { position: "femaleHostelDirector", name: "Mrs. Salma Begum", experience: "12+ years" },
        { position: "hostelWardens", name: "5 Wardens", experience: "Dedicated supervision" },
        { position: "hostelSupportStaff", name: "10 Staff Members", experience: "24/7 support" },
    ];

    return (
        <PageLayout title="hostelDirectorsTitle" subtitle="hostelDirectorsSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery2} alt="Directors" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Users className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Hostel Leadership</h2>
                                <p className="text-xl opacity-90">{t("hostelDirectorsIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("hostelDirectorsIntro")}</p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {staff.map((member, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-full">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary mb-1">{t(member.position)}</h3>
                                    <p className="text-foreground font-semibold">{member.name}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{member.experience}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default HostelDirectors;
