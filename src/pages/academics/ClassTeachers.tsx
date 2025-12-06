import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";
import studentsImage from "@/assets/students-community.png";
import quranStudyImage from "@/assets/quran-study.png";

const ClassTeachers: React.FC = () => {
    const { t } = useLanguage();

    const classTeachers = [
        {
            class: "Class 1",
            teacher: "Mrs. Rahima Begum",
            subject: "All Subjects",
            experience: "10+ years",
        },
        {
            class: "Class 2",
            teacher: "Mr. Kamal Hossain",
            subject: "All Subjects",
            experience: "8+ years",
        },
        {
            class: "Class 3",
            teacher: "Mrs. Nasrin Ahmed",
            subject: "All Subjects",
            experience: "12+ years",
        },
        {
            class: "Class 4",
            teacher: "Maulana Abdur Rahman",
            subject: "Islamic Studies & General",
            experience: "15+ years",
        },
        {
            class: "Class 5",
            teacher: "Dr. Taslima Khatun",
            subject: "All Subjects",
            experience: "11+ years",
        },
        {
            class: "Class 6",
            teacher: "Professor Nazrul Islam",
            subject: "Mathematics & Science",
            experience: "18+ years",
        },
        {
            class: "Class 7",
            teacher: "Mrs. Fatema Akter",
            subject: "English & Social Science",
            experience: "9+ years",
        },
        {
            class: "Class 8",
            teacher: "Maulana Hafizur Rahman",
            subject: "Islamic Studies Coordinator",
            experience: "20+ years",
        },
    ];

    return (
        <PageLayout title="classTeachersTitle" subtitle="classTeachersSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Hero Image Section */}
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img
                            src={studentsImage}
                            alt="Class Teachers"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Users className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">
                                    Our Dedicated Class Teachers
                                </h2>
                                <p className="text-xl opacity-90">
                                    {t("classTeachersIntro")}
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
                                {t("classTeachersIntro")}
                            </p >
                        </div>
                    </div>
                </section>

                {/* Class Teachers Grid */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                        Class-wise Teacher Assignment
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {classTeachers.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl font-bold">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-primary mb-1">
                                            {item.class}
                                        </h3>
                                        <p className="text-foreground font-semibold mb-1">
                                            {item.teacher}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{item.subject}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                            <Award className="w-4 h-4" />
                                            <span>{item.experience}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quran Study Image */}
                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={quranStudyImage}
                        alt="Teacher-Student Interaction"
                        className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white max-w-3xl">
                            <h3 className="text-3xl font-bold mb-3">Personalized Attention</h3>
                            <p className="text-lg opacity-90 leading-relaxed">
                                Each class teacher provides dedicated attention to ensure every student's academic and personal growth
                            </p>
                        </div>
                    </div>
                </section>

                {/* Teacher Responsibilities */}
                <section className="bg-secondary/50 rounded-xl p-8">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                        Class Teacher Responsibilities
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                Academic Duties
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Coordinate all subject teaching",
                                    "Monitor student progress",
                                    "Conduct assessments",
                                    "Organize parent-teacher meetings",
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
                                Character Development
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Moral and Islamic education",
                                    "Discipline and behavior guidance",
                                    "Personal counseling",
                                    "Extracurricular coordination",
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

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white rounded-xl p-10 text-center shadow-xl">
                    <Users className="w-16 h-16 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                        Meet Your Class Teacher
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Our class teachers are always available to discuss your child's progress and address any concerns
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default ClassTeachers;
