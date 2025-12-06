import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Image, X, ZoomIn, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import studentsImage from "@/assets/students-community.png";
import quranImage from "@/assets/quran-study.png";
import libraryImage from "@/assets/islamic-library.png";
import prayerImage from "@/assets/prayer-spirituality.png";
import calligraphyImage from "@/assets/islamic-calligraphy.png";
import mosqueImage from "@/assets/mosque-architecture.png";

const PhotoGallery: React.FC = () => {
    const { t } = useLanguage();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const photoCategories = [
        {
            title: "Campus Life",
            photos: [
                { src: studentsImage, title: "Student Community", date: "Nov 2024" },
                { src: gallery1, title: "Campus View", date: "Oct 2024" },
                { src: gallery4, title: "Academic Activities", date: "Oct 2024" },
            ],
        },
        {
            title: "Islamic Studies",
            photos: [
                { src: quranImage, title: "Quran Study Session", date: "Dec 2024" },
                { src: prayerImage, title: "Prayer Time", date: "Nov 2024" },
                { src: calligraphyImage, title: "Islamic Calligraphy", date: "Sep 2024" },
            ],
        },
        {
            title: "Facilities",
            photos: [
                { src: libraryImage, title: "Islamic Library", date: "Aug 2024" },
                { src: mosqueImage, title: "Mosque Architecture", date: "Jul 2024" },
                { src: gallery2, title: "Classroom", date: "Jun 2024" },
            ],
        },
        {
            title: "Events & Activities",
            photos: [
                { src: gallery3, title: "Annual Function", date: "Dec 2024" },
                { src: studentsImage, title: "Sports Day", date: "Nov 2024" },
                { src: gallery4, title: "Prize Distribution", date: "Oct 2024" },
            ],
        },
    ];

    const allPhotos = photoCategories.flatMap(category => category.photos);

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        } else if (selectedImageIndex === 0) {
            setSelectedImageIndex(allPhotos.length - 1);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && selectedImageIndex < allPhotos.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        } else if (selectedImageIndex === allPhotos.length - 1) {
            setSelectedImageIndex(0);
        }
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === "ArrowLeft") {
                handlePrevious(e as any);
            } else if (e.key === "ArrowRight") {
                handleNext(e as any);
            } else if (e.key === "Escape") {
                setSelectedImageIndex(null);
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedImageIndex]);

    const selectedImage = selectedImageIndex !== null ? allPhotos[selectedImageIndex] : null;

    return (
        <>
            <PageLayout title="mediaPhotosTitle" subtitle="mediaPhotosSubtitle">
                <div className="max-w-7xl mx-auto space-y-10">
                    <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[21/9] relative">
                            <img src={studentsImage} alt="Photo Gallery" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                                <div className="text-center text-white max-w-3xl">
                                    <Image className="w-20 h-20 mx-auto mb-6" />
                                    <h2 className="text-4xl font-bold mb-4">Photo Gallery</h2>
                                    <p className="text-xl opacity-90">{t("mediaPhotosIntro")}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                        <p className="text-lg leading-relaxed text-foreground text-center">{t("mediaPhotosIntro")}</p>
                    </section>

                    {photoCategories.map((category, catIndex) => {
                        const categoryStartIndex = photoCategories.slice(0, catIndex).reduce((sum, cat) => sum + cat.photos.length, 0);

                        return (
                            <section key={catIndex} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-12 bg-primary rounded"></div>
                                    <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                                    <div className="h-1 flex-1 bg-primary/20 rounded"></div>
                                </div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.photos.map((photo, photoIndex) => {
                                        const globalIndex = categoryStartIndex + photoIndex;
                                        return (
                                            <div
                                                key={photoIndex}
                                                onClick={() => setSelectedImageIndex(globalIndex)}
                                                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                            >
                                                <div className="aspect-video relative">
                                                    <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                            <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                                                            <div className="flex items-center gap-2 text-sm opacity-90">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{photo.date}</span>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-4 right-4">
                                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                                                <ZoomIn className="w-6 h-6 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </PageLayout>

            {selectedImage && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black p-4 animate-in fade-in duration-200" onClick={() => setSelectedImageIndex(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-white/10 backdrop-blur-sm rounded-full" onClick={() => setSelectedImageIndex(null)}>
                        <X className="w-8 h-8" />
                    </button>

                    <button onClick={handlePrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full group">
                        <ChevronLeft className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    </button>

                    <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full group">
                        <ChevronRight className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    </button>

                    <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />

                        <div className="mt-4 text-center text-white bg-black/50 backdrop-blur-sm rounded-lg p-4">
                            <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                            <div className="flex items-center justify-center gap-4 opacity-90">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{selectedImage.date}</span>
                                </div>
                                <span className="text-primary">•</span>
                                <span>{selectedImageIndex !== null ? selectedImageIndex + 1 : 0} / {allPhotos.length}</span>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default PhotoGallery;
