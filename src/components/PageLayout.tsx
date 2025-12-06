import React from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageLayoutProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    children,
    title,
    subtitle,
}) => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <Navigation />

            {/* Page Header */}
            {(title || subtitle) && (
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        {title && (
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                                {t(title)}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl opacity-90">{t(subtitle)}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Main Content with Sidebar */}
            <div className="flex-1">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Main Content Area */}
                        <main className="lg:col-span-8 xl:col-span-9">
                            {children}
                        </main>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 xl:col-span-3">
                            <Sidebar />
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
