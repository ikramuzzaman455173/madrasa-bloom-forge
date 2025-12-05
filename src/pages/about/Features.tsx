import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Layers, Users, Building2, Heart } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import libraryImage from "@/assets/islamic-library.png";
import quranStudyImage from "@/assets/quran-study.png";
import heroImage from "@/assets/hero-bg-2.jpg";

const FeaturesPage: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Layers,
            title: "featuresIntegrated",
            description: "featuresIntegratedText",
            color: "from-primary/20 to-primary/5",
        },
        {
            icon: Users,
            title: "featuresQualified",
            description: "featuresQualifiedText",
            color: "from-accent/20 to-accent/5",
        },
        {
            icon: Building2,
            title: "featuresInfrastructure",
            description: "featuresInfrastructureText",
            color: "from-primary/20 to-primary/5",
        },
        {
            icon: Heart,
            title: "featuresValues",
            description: "featuresValuesText",
            color: "from-accent/20 to-accent/5",
        },
    ];

    return (
        <PageLayout title="featuresPageTitle" subtitle="featuresPageSubtitle">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={heroImage}
                            alt="Our Features"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <h2 className="text-4xl font-bold mb-4">
                                    What Makes Us Unique
                                </h2>
                                <p className="text-xl opacity-90">
                                    Discover the distinctive features that set our institution apart
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${feature.color} rounded-xl p-8 border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {t(feature.title)}
                                        </h3>
                                        <p className="text-foreground leading-relaxed">
                                            {t(feature.description)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Integrated Education Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={quranStudyImage}
                        alt="Integrated Education"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Integrated Curriculum</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our unique approach combines traditional Islamic education with modern scientific knowledge, preparing students for success in both worlds
                            </p>
                        </div>
                    </div>
                </section>

                {/* Additional Features Grid */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border mt-12">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        More Features That Set Us Apart
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Digital Learning Resources",
                            "Community Outreach Programs",
                            "Student Counseling Services",
                            "Career Guidance",
                            "Extracurricular Excellence",
                            "Safe & Secure Environment",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-foreground font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community & Library Images */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img
                            src={studentsImage}
                            alt="Student Community"
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Vibrant Community</h3>
                                <p className="text-sm opacity-90">
                                    Active student engagement and peer learning
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img
                            src={libraryImage}
                            alt="Library"
                            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">World-Class Library</h3>
                                <p className="text-sm opacity-90">
                                    Extensive collection of Islamic and modern resources
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </PageLayout>
    );
};

export default FeaturesPage;
