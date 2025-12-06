import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Library, Award } from "lucide-react";
import calligraphyImage from "@/assets/islamic-calligraphy.png";
import libraryImage from "@/assets/islamic-library.png";

const KitabBranch: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="brKitabTitle" subtitle="brKitabSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={calligraphyImage} alt="Kitab" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <BookOpen className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Kitab Branch</h2>
                                <p className="text-xl opacity-90">{t("brKitabText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("brKitabText")}</p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Classical Texts Studied</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { category: "Tafsir", books: ["Tafsir Ibn Kathir", "Tafsir al-Jalalayn", "Ma'ariful Quran"] },
                            { category: "Hadith", books: ["Sahih al-Bukhari", "Sahih Muslim", "Sunan Abu Dawud"] },
                            { category: "Fiqh", books: ["Hidayah", "Sharh al-Wiqayah", "Badai' al-Sanai"] },
                            { category: "Usul", books: ["Usul al-Shashi", "Nur al-Anwar", "Musallam al-Thubut"] },
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                                <h3 className="text-xl font-bold text-primary mb-4">{item.category}</h3>
                                <ul className="space-y-2">
                                    {item.books.map((book, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <span>{book}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Library, title: "Extensive Library", desc: "Thousands of classical texts", emoji: "📚" },
                        { icon: BookOpen, title: "Expert Scholars", desc: "Qualified teachers with Ijazah", emoji: "👨‍🏫" },
                        { icon: Award, title: "Certification", desc: "Traditional Sanad system", emoji: "📜" },
                    ].map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
                                <div className="text-5xl mb-3">{feature.emoji}</div>
                                <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                                <p className="text-sm text-foreground">{feature.desc}</p>
                            </div>
                        );
                    })}
                </section>

                <section className="relative rounded-xl overflow-hidden shadow-lg">
                    <img src={libraryImage} alt="Library" className="w-full aspect-video object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-2">Classical Islamic Scholarship</h3>
                            <p className="text-lg opacity-90">Preserving and transmitting the rich heritage of Islamic knowledge</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default KitabBranch;
