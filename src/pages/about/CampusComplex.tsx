import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    Building2,
    FlaskConical,
    BookOpen,
    Home,
    UtensilsCrossed,
    Trophy,
    Church,
    GraduationCap,
    Wifi,
    Shield,
} from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import mosqueImage from "@/assets/mosque-architecture.png";
import libraryImage from "@/assets/islamic-library.png";
import prayerImage from "@/assets/prayer-spirituality.png";

const CampusComplex: React.FC = () => {
    const { t } = useLanguage();

    const facilities = [
        {
            icon: Building2,
            title: "academicBlock",
            description: "academicBlockText",
            color: "from-blue-500/20 to-blue-500/5",
            image: gallery2,
        },
        {
            icon: FlaskConical,
            title: "scienceLabs",
            description: "scienceLabsText",
            color: "from-green-500/20 to-green-500/5",
            image: gallery3,
        },
        {
            icon: BookOpen,
            title: "libraryFacility",
            description: "libraryFacilityText",
            color: "from-purple-500/20 to-purple-500/5",
            image: libraryImage,
        },
        {
            icon: Home,
            title: "hostelFacilities",
            description: "hostelFacilitiesText",
            color: "from-orange-500/20 to-orange-500/5",
            image: gallery4,
        },
        {
            icon: Trophy,
            title: "sportsGround",
            description: "sportsGroundText",
            color: "from-red-500/20 to-red-500/5",
            image: gallery2,
        },
        {
            icon: UtensilsCrossed,
            title: "cafeteria",
            description: "cafeteriaText",
            color: "from-pink-500/20 to-pink-500/5",
            image: gallery3,
        },
    ];

    return (
        <PageLayout title="complexTitle" subtitle="complexSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Campus Hero Visual with Real Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={mosqueImage}
                            alt="Campus Architecture"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Building2 className="w-24 h-24 mx-auto mb-6 opacity-90" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Modern Educational Campus
                                </h2>
                                <p className="text-xl opacity-90">
                                    {t("complexOverviewText")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                        <Building2 className="w-8 h-8" />
                        {t("complexOverview")}
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground">
                        {t("complexOverviewText")}
                    </p>
                </section>

                {/* Facilities Grid with Real Images */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Campus Facilities
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => {
                            const Icon = facility.icon;
                            return (
                                <div
                                    key={index}
                                    className="group"
                                >
                                    {/* Facility Image */}
                                    <div className="aspect-video rounded-t-xl overflow-hidden relative">
                                        <img
                                            src={facility.image}
                                            alt={t(facility.title)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>

                                    {/* Facility Info */}
                                    <div className="bg-card rounded-b-xl p-6 shadow-md border border-t-0 border-border group-hover:shadow-xl transition-all">
                                        <h3 className="text-2xl font-bold text-primary mb-3">
                                            {t(facility.title)}
                                        </h3>
                                        <p className="text-foreground leading-relaxed">
                                            {t(facility.description)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Special Facility - Mosque with Real Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Mosque Visual */}
                        <div className="aspect-square md:aspect-auto relative">
                            <img
                                src={prayerImage}
                                alt="Mosque Prayer Hall"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-primary/80 flex items-center justify-center p-12">
                                <div className="text-center text-white">
                                    <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                        <Church className="w-16 h-16" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{t("mosque")}</h2>
                                    <p className="text-lg mt-2 opacity-90">Center of Spiritual Life</p>
                                </div>
                            </div>
                        </div>

                        {/* Mosque Info */}
                        <div className="bg-card p-10 flex items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                    <Church className="w-8 h-8" />
                                    {t("mosque")}
                                </h3>
                                <p className="text-xl leading-relaxed text-foreground mb-6">
                                    {t("mosqueText")}
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Five daily prayers",
                                        "Islamic lectures and study circles",
                                        "Friday congregational prayers",
                                        "Spacious prayer hall",
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-foreground bg-secondary/30 p-3 rounded-lg"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Amenities with Icons */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Additional Campus Amenities
                    </h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, label: "Medical Center", emoji: "🏥" },
                            { icon: Building2, label: "Transportation", emoji: "🚌" },
                            { icon: GraduationCap, label: "Study Halls", emoji: "📖" },
                            { icon: Building2, label: "Auditorium", emoji: "🎭" },
                            { icon: FlaskConical, label: "Computer Lab", emoji: "💻" },
                            { icon: Wifi, label: "WiFi Campus", emoji: "📡" },
                            { icon: Trophy, label: "Sports Complex", emoji: "🏟️" },
                            { icon: Home, label: "Guest House", emoji: "🏠" },
                        ].map((amenity, index) => {
                            const Icon = amenity.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-secondary/50 to-transparent rounded-lg p-5 text-center hover:from-secondary transition-colors group"
                                >
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                        {amenity.emoji}
                                    </div>
                                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                                    <span className="text-foreground font-semibold text-sm block">
                                        {amenity.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Campus Map Placeholder */}
                <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-12 text-center border border-primary/20">
                    <Building2 className="w-20 h-20 mx-auto mb-6 text-primary" />
                    <h2 className="text-3xl font-bold text-primary mb-4">
                        Campus Location & Map
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Our campus is conveniently located with easy access to public transportation
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                        <span>📍</span>
                        <span>123 Education Road, Dhaka, Bangladesh</span>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default CampusComplex;
