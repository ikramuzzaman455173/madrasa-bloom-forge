import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Search } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.png";

const LibraryCatalog: React.FC = () => {
    const { t } = useLanguage();

    const categories = [
        { category: "Islamic Studies", count: "3,000+ Books", icon: "📖" },
        { category: "Science & Technology", count: "2,500+ Books", icon: "🔬" },
        { category: "Language & Literature", count: "2,000+ Books", icon: "📚" },
        { category: "History & Geography", count: "1,500+ Books", icon: "🌍" },
        { category: "Reference Books", count: "1,000+ Books", icon: "📕" },
    ];

    return (
        <PageLayout title="libCatalogTitle" subtitle="libCatalogSubtitle">
            <div className="max-w-6xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={quranStudyImage} alt="Catalog" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Search className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Library Catalog</h2>
                                <p className="text-xl opacity-90">{t("libCatalogText")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("libCatalogText")}</p>
                </section>

                {/* Book Categories */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Book Categories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.category}</h3>
                                <p className="text-foreground font-semibold">{item.count}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Books */}
                <section>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Popular Collections</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {["Tafsir Collection", "Hadith Compilations", "Islamic History"].map((collection, index) => (
                            <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border text-center">
                                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="text-xl font-bold text-primary mb-2">{collection}</h3>
                                <p className="text-muted-foreground">Explore our comprehensive collection</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Search Notice */}
                <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
                    <Search className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-primary mb-3">Search Our Catalog</h3>
                    <p className="text-foreground max-w-2xl mx-auto">
                        Visit the library or contact our librarians to search for specific books and resources in our collection.
                    </p>
                </section>
            </div>
        </PageLayout>
    );
};

export default LibraryCatalog;
