import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, BookOpen, Languages, Calculator, GraduationCap, Award, Star } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import quranStudyImage from "@/assets/quran-study.png";
import calligraphyImage from "@/assets/islamic-calligraphy.png";

const TeachersPage: React.FC = () => {
    const { t } = useLanguage();

    const departments = [
        {
            icon: BookOpen,
            name: "islamicStudies",
            count: "45+",
            color: "from-green-500/20 to-green-500/5",
            emoji: "📖",
        },
        {
            icon: Calculator,
            name: "modernSciences",
            count: "35+",
            color: "from-blue-500/20 to-blue-500/5",
            emoji: "🔬",
        },
        {
            icon: Languages,
            name: "languageDept",
            count: "25+",
            color: "from-purple-500/20 to-purple-500/5",
            emoji: "🗣️",
        },
        {
            icon: Calculator,
            name: "mathematicsDept",
            count: "20+",
            color: "from-orange-500/20 to-orange-500/5",
            emoji: "🧮",
        },
    ];

    const sampleTeachers = [
        {
            name: "Maulana Abdur Rahman",
            qualification: "Master in Islamic Studies",
            experience: "20+ years",
            specialization: "Quran & Hadith",
            emoji: "👨‍🏫",
        },
        {
            name: "Dr. Khaleda Akhter",
            qualification: "Ph.D. in Chemistry",
            experience: "15+ years",
            specialization: "Organic Chemistry",
            emoji: "👩‍🔬",
        },
        {
            name: "Professor Nazrul Islam",
            qualification: "M.Sc. in Mathematics",
            experience: "18+ years",
            specialization: "Advanced Mathematics",
            emoji: "👨‍🏫",
        },
        {
            name: "Mrs. Fatema Khatun",
            qualification: "M.A. in English Literature",
            experience: "12+ years",
            specialization: "English Language & Literature",
            emoji: "👩‍🏫",
        },
    ];

    return (
        <PageLayout title="teachersTitle" subtitle="teachersSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Section with Real Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={studentsImage}
                            alt="Our Faculty"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <div className="flex justify-center gap-4 mb-6">
                                    <div className="text-6xl">👨‍🏫</div>
                                    <div className="text-6xl">👩‍🏫</div>
                                    <div className="text-6xl">👨‍🔬</div>
                                </div>
                                <h2 className="text-4xl font-bold mb-4">
                                    Our Dedicated Faculty
                                </h2>
                                <p className="text-xl opacity-90">
                                    {t("teachersIntro")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                            <GraduationCap className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-lg leading-relaxed text-foreground">
                                {t("teachersIntro")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Department Statistics with Enhanced Visuals */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                        <Users className="w-8 h-8" />
                        Our Faculty Departments
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {departments.map((dept, index) => {
                            const Icon = dept.icon;
                            return (
                                <div
                                    key={index}
                                    className="group"
                                >
                                    {/* Department Visual */}
                                    <div className={`aspect-square rounded-t-xl bg-gradient-to-br ${dept.color} flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform`}>
                                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                            {dept.emoji}
                                        </div>
                                        <Icon className="w-12 h-12 text-primary mb-3" />
                                        <div className="text-4xl font-bold text-primary">{dept.count}</div>
                                    </div>

                                    {/* Department Info */}
                                    <div className="bg-card rounded-b-xl p-4 shadow-md border border-t-0 border-border text-center">
                                        <h3 className="text-lg font-bold text-primary">
                                            {t(dept.name)}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">Teachers</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Quran Study Section with Image */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={quranStudyImage}
                        alt="Quran Study"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Islamic Studies Excellence</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our Islamic Studies department features renowned scholars dedicated to preserving and teaching traditional knowledge
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Teachers with Photos */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-3">
                        <Star className="w-8 h-8" />
                        Featured Faculty Members
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {sampleTeachers.map((teacher, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all group"
                            >
                                <div className="flex gap-6 p-6">
                                    {/* Teacher Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                                            {teacher.emoji}
                                        </div>
                                    </div>

                                    {/* Teacher Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary mb-3">
                                            {teacher.name}
                                        </h3>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5">
                                                    <GraduationCap className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-muted-foreground text-sm">
                                                        {t("teacherQualifications")}:
                                                    </span>
                                                    <p className="text-foreground">{teacher.qualification}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5">
                                                    <Award className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-muted-foreground text-sm">
                                                        {t("teacherExperience")}:
                                                    </span>
                                                    <p className="text-foreground">{teacher.experience}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5">
                                                    <BookOpen className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-muted-foreground text-sm">
                                                        {t("teacherSpecialization")}:
                                                    </span>
                                                    <p className="text-foreground">{teacher.specialization}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Islamic Calligraphy Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={calligraphyImage}
                        alt="Islamic Calligraphy"
                        className="w-full aspect-[21/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8">
                        <div className="text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-3">Cultural & Artistic Heritage</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Our teachers also impart knowledge of Islamic arts, calligraphy, and cultural heritage
                            </p>
                        </div>
                    </div>
                </section>

                {/* Teacher Qualities with Visual Grid */}
                <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        What Makes Our Teachers Exceptional
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Award, label: "Advanced Academic Degrees", emoji: "🎓" },
                            { icon: BookOpen, label: "Years of Teaching Experience", emoji: "📚" },
                            { icon: Star, label: "Passion for Student Success", emoji: "⭐" },
                            { icon: GraduationCap, label: "Modern Teaching Methods", emoji: "💡" },
                            { icon: Users, label: "Continuous Professional Development", emoji: "📈" },
                            { icon: BookOpen, label: "Strong Islamic Values", emoji: "🕌" },
                        ].map((quality, index) => {
                            const Icon = quality.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
                                >
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                        {quality.emoji}
                                    </div>
                                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                                    <span className="text-foreground font-semibold block">{quality.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-xl p-10 text-center text-white shadow-2xl">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Teaching Excellence Team
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        We are always looking for qualified and passionate educators to join our faculty
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default TeachersPage;
