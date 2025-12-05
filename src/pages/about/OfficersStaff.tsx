import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Shield, Wrench, Monitor } from "lucide-react";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import studentsImage from "@/assets/students-community.png";

const OfficersStaff: React.FC = () => {
    const { t } = useLanguage();

    const staffCategories = [
        {
            icon: Shield,
            title: "administrativeStaff",
            count: "25+",
            color: "from-blue-500/20 to-blue-500/5",
        },
        {
            icon: Users,
            title: "supportStaff",
            count: "40+",
            color: "from-green-500/20 to-green-500/5",
        },
        {
            icon: Monitor,
            title: "technicalStaff",
            count: "15+",
            color: "from-purple-500/20 to-purple-500/5",
        },
        {
            icon: Wrench,
            title: "maintenanceStaff",
            count: "20+",
            color: "from-orange-500/20 to-orange-500/5",
        },
    ];

    const keyPositions = [
        {
            position: "officeSecretary",
            name: "Mr. Ibrahim Hossain",
            department: "Administration",
        },
        {
            position: "accountant",
            name: "Mrs. Nasrin Sultana",
            department: "Accounts & Finance",
        },
        {
            position: "librarian",
            name: "Mr. Rafiqul Islam",
            department: "Library Services",
        },
        {
            position: "labAssistants",
            name: "Team of 10 Assistants",
            department: "Science Laboratories",
        },
    ];

    return (
        <PageLayout title="officersTitle" subtitle="officersSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={studentsImage}
                            alt="Our Staff"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Users className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Our Dedicated Staff
                                </h2>
                                <p className="text-xl opacity-90">
                                    The backbone of our institution's smooth operations
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">
                        {t("officersIntro")}
                    </p>
                </section>

                {/* Staff Categories */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Staff by Category
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {staffCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-center border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1`}
                                >
                                    <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {t(category.title)}
                                    </h3>
                                    <p className="text-3xl font-bold text-primary">{category.count}</p>
                                    <p className="text-sm text-muted-foreground mt-1">Staff Members</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Administrative Office Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={gallery2}
                        alt="Administrative Office"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Administrative Excellence</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our administrative staff ensures smooth operations and excellent service to students and parents
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Positions */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Key Administrative Positions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {keyPositions.map((position, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary mb-1">
                                            {t(position.position)}
                                        </h3>
                                        <p className="text-foreground font-semibold">{position.name}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {position.department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Support Services Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={gallery3}
                        alt="Support Services"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Comprehensive Support</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our support staff provides essential services including maintenance, IT support, and facility management
                            </p>
                        </div>
                    </div>
                </section>

                {/* Staff Responsibilities */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Staff Responsibilities
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                Administrative
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Managing daily operations",
                                    "Student records & documentation",
                                    "Communication & correspondence",
                                    "Event coordination",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-foreground bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg"
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                Support Services
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Facility maintenance",
                                    "Laboratory assistance",
                                    "Library management",
                                    "IT support services",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-foreground bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg"
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Excellence Statement */}
                <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white rounded-xl p-8 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-4">
                        Dedicated to Excellence
                    </h2>
                    <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                        Our entire staff team works tirelessly to ensure a smooth, efficient, and supportive learning environment for all students.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default OfficersStaff;
