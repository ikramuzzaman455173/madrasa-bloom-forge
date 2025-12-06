import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";
import studentsImage from "@/assets/students-community.png";

const StudyTour: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="pubStudyTourTitle" subtitle="pubStudyTourSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={studentsImage} alt="Study Tour" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <MapPin className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Study Tours & Excursions</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg text-foreground">
                        We organize educational study tours to historical Islamic sites, museums, and educational institutions to  enhance learning beyond the classroom.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Historical Sites Visit", desc: "Islamic heritage locations" },
                        { title: "Museum Tours", desc: "Cultural and scientific museums" },
                        { title: "University Visits", desc: "Higher education institutions" },
                        { title: "Nature Excursions", desc: "Environmental awareness trips" },
                    ].map((tour, index) => (
                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                            <h3 className="text-xl font-bold text-primary mb-2">{tour.title}</h3>
                            <p className="text-foreground">{tour.desc}</p>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default StudyTour;
