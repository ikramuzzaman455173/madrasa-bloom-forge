import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText } from "lucide-react";
import mosqueImage from "@/assets/mosque-architecture.png";

const Others: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="pubOthersTitle" subtitle="pubOthersSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={mosqueImage} alt="Publications" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <FileText className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Other Publications</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg text-foreground">
                        Additional reading materials, newsletters, and special publications available for students, parents, and staff.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Monthly Newsletter", desc: "Institutional updates and news" },
                        { title: "Research Papers", desc: "Student and faculty research" },
                        { title: "Special Issues", desc: "Commemorative publications" },
                        { title: "Alumni Magazine", desc: "Former students' achievements" },
                    ].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-foreground">{item.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default Others;
