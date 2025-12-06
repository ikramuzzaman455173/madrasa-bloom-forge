import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Video, Play, Eye, Calendar, Clock, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import studentsImage from "@/assets/students-community.png";
import quranImage from "@/assets/quran-study.png";

const VideoGallery: React.FC = () => {
    const { t } = useLanguage();
    const [selectedVideo, setSelectedVideo] = useState<{
        title: string;
        description: string;
        url: string;
        date: string;
        duration: string;
        views: string;
    } | null>(null);

    const videoCategories = [
        {
            title: "Institution Overview",
            videos: [
                {
                    title: "Campus Tour 2024",
                    description: "A comprehensive tour of our beautiful campus facilities and academic buildings.",
                    thumbnail: studentsImage,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "1.2K",
                    date: "Dec 2024",
                    duration: "5:30",
                },
                {
                    title: "Welcome to Our Madrasa",
                    description: "Introduction to our institution, values, and educational approach.",
                    thumbnail: gallery1,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "2.5K",
                    date: "Nov 2024",
                    duration: "3:45",
                },
            ],
        },
        {
            title: "Academic Activities",
            videos: [
                {
                    title: "Quran Recitation Competition",
                    description: "Annual Quran recitation competition highlights featuring talented students.",
                    thumbnail: quranImage,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "3.1K",
                    date: "Dec 2024",
                    duration: "8:20",
                },
                {
                    title: "Islamic Studies Class",
                    description: "A glimpse into our interactive Islamic studies classroom sessions.",
                    thumbnail: gallery2,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "1.8K",
                    date: "Nov 2024",
                    duration: "6:15",
                },
            ],
        },
        {
            title: "Events & Programs",
            videos: [
                {
                    title: "Annual Prize Distribution 2024",
                    description: "Celebrating academic excellence and student achievements at our annual ceremony.",
                    thumbnail: gallery3,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "5.4K",
                    date: "Dec 2024",
                    duration: "12:45",
                },
                {
                    title: "Sports Day Highlights",
                    description: "Exciting moments from our annual sports day with student participation.",
                    thumbnail: gallery4,
                    url: "https://www.youtube.com/embed/musuf2_Bea4?si=M4vP9zJAwfF26EHn",
                    views: "2.9K",
                    date: "Nov 2024",
                    duration: "7:30",
                },
            ],
        },
    ];

    return (
        <>
            <PageLayout title="mediaVideosTitle" subtitle="mediaVideosSubtitle">
                <div className="max-w-7xl mx-auto space-y-10">
                    <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-[21/9] relative">
                            <img src={gallery3} alt="Video Gallery" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                                <div className="text-center text-white max-w-3xl">
                                    <Video className="w-20 h-20 mx-auto mb-6" />
                                    <h2 className="text-4xl font-bold mb-4">Video Gallery</h2>
                                    <p className="text-xl opacity-90">{t("mediaVideosIntro")}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                        <p className="text-lg leading-relaxed text-foreground text-center">{t("mediaVideosIntro")}</p>
                    </section>

                    {videoCategories.map((category, catIndex) => (
                        <section key={catIndex} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-12 bg-primary rounded"></div>
                                <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                                <div className="h-1 flex-1 bg-primary/20 rounded"></div>
                            </div>

                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                                {category.videos.map((video, videoIndex) => (
                                    <div
                                        key={videoIndex}
                                        onClick={() => setSelectedVideo(video)}
                                        className="group bg-card rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-border"
                                    >
                                        <div className="relative aspect-video">
                                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                                                <div className="bg-primary group-hover:scale-110 transition-transform duration-300 rounded-full p-6 shadow-2xl">
                                                    <Play className="w-12 h-12 text-white fill-white" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm rounded px-2 py-1 text-white text-sm flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {video.duration}
                                            </div>
                                        </div>

                                        <div className="p-5">
                                            <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                                {video.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                                                {video.description}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-3 h-3" />
                                                        <span>{video.views}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>{video.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-primary font-medium">
                                                    <Play className="w-3 h-3" />
                                                    <span>Watch Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </PageLayout>

            {selectedVideo && ReactDOM.createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-2 sm:p-4 overflow-y-auto" onClick={() => setSelectedVideo(null)}>
                    <button className="fixed top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-primary transition-colors z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full" onClick={() => setSelectedVideo(null)}>
                        <X className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <div className="w-full max-w-5xl my-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src={selectedVideo.url}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>

                        <div className="mt-3 sm:mt-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10 max-h-[30vh] overflow-y-auto">
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
                            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">{selectedVideo.description}</p>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/70 text-xs sm:text-sm">
                                <div className="flex items-center gap-2">
                                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>{selectedVideo.views} views</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>{selectedVideo.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>{selectedVideo.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default VideoGallery;
