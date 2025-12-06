import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Calendar } from "lucide-react";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const NewBikash: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="pubNewBikashTitle" subtitle="pubNewBikashSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={calligraphyImage} alt="Magazine" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <BookOpen className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Naya Bikash Magazine</h2>
                                <p className="text-xl opacity-90">Our monthly publication showcasing student achievements and Islamic knowledge</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg text-foreground">
                        "Naya Bikash" is our institution's monthly magazine featuring student articles, Islamic knowledge, academic achievements, and cultural content.
                    </p>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {["Latest Issue - December 2024", "Previous Issue - November 2024", "Archives Available"].map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20">
                            <Calendar className="w-12 h-12 mx-auto mb-3 text-primary" />
                            <p className="font-bold text-foreground">{item}</p>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default NewBikash;
