import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Shield, FileText } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImage from "@/assets/hero-bg-3.jpg";

const GoverningBody: React.FC = () => {
    const { t } = useLanguage();

    const members = [
        { position: "chairperson", name: "Dr. Mohammad Rahman", department: "Islamic Scholar" },
        { position: "viceChairperson", name: "Prof. Abdul Karim", department: "Education Expert" },
        { position: "secretary", name: "Mr. Hafizur Rahman", department: "Administration" },
        { position: "treasurer", name: "Mrs. Fatema Begum", department: "Finance Management" },
    ];

    const generalMembers = [
        "Dr. Jahangir Alam - Islamic Studies",
        "Prof. Nasrin Ahmed - Science Education",
        "Maulana Abdus Salam - Religious Affairs",
        "Dr. Taslima Khatun - Educational Psychology",
        "Mr. Kamal Hossain - Community Representative",
    ];

    return (
        <PageLayout title="governingBodyTitle" subtitle="governingBodySubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={heroImage}
                            alt="Governing Body"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Users className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Leadership & Governance
                                </h2>
                                <p className="text-xl opacity-90">
                                    Dedicated leaders guiding our institution towards excellence
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">
                        {t("governingBodyIntro")}
                    </p>
                </section>

                {/* Key Members */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                        <Users className="w-8 h-8" />
                        Leadership Team
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary mb-1">
                                            {t(member.position)}
                                        </h3>
                                        <p className="text-foreground font-semibold">{member.name}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {member.department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meeting Image Section */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={gallery4}
                        alt="Governing Body Meeting"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Strategic Leadership</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our governing body meets regularly to ensure the institution's vision and goals are achieved
                            </p>
                        </div>
                    </div>
                </section>

                {/* General Members */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        {t("members")}
                    </h2>
                    <ul className="space-y-3">
                        {generalMembers.map((member, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-foreground bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg"
                            >
                                <span className="text-primary text-xl mt-1">•</span>
                                <span className="text-lg">{member}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Roles & Responsibilities */}
                <section className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border border-primary/20">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
                        <FileText className="w-8 h-8" />
                        {t("governingBodyRole")}
                    </h2>
                    <p className="text-lg leading-relaxed text-foreground mb-6">
                        {t("governingBodyRoleText")}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Strategic Planning & Vision",
                            "Policy Development",
                            "Financial Oversight",
                            "Quality Assurance",
                            "Community Relations",
                            "Staff Appointments",
                        ].map((responsibility, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <span className="text-foreground font-medium">
                                    {responsibility}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default GoverningBody;
