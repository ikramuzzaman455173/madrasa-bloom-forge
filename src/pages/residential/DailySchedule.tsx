import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const DailySchedule: React.FC = () => {
    const { t } = useLanguage();

    const schedule = [
        { time: "5:00 AM", activity: "Wake up & Morning Prayer (Fajr)", type: "morning" },
        { time: "6:00 AM", activity: "Morning Exercise", type: "morning" },
        { time: "7:00 AM", activity: "Breakfast", type: "morning" },
        { time: "8:00 AM", activity: "Leave for Classes", type: "academic" },
        { time: "8:00 AM - 1:00 PM", activity: "Academic Classes", type: "academic" },
        { time: "1:30 PM", activity: "Lunch & Zuhr Prayer", type: "academic" },
        { time: "2:00 PM - 5:00 PM", activity: "Classes/Study Time", type: "academic" },
        { time: "5:30 PM", activity: "Asr Prayer & Tea Time", type: "evening" },
        { time: "6:00 PM", activity: "Sports & Recreation", type: "evening" },
        { time: "7:30 PM", activity: "Maghrib Prayer", type: "evening" },
        { time: "8:00 PM", activity: "Dinner", type: "evening" },
        { time: "8:30 PM", activity: "Isha Prayer", type: "night" },
        { time: "9:00 PM - 10:00 PM", activity: "Self Study", type: "night" },
        { time: "10:00 PM", activity: "Lights Out / Silence Hours", type: "night" },
    ];

    return (
        <PageLayout title="dailyScheduleTitle" subtitle="dailyScheduleSubtitle">
            <div className="max-w-5xl mx-auto space-y-10">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery1} alt="Schedule" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Clock className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Daily Routine</h2>
                                <p className="text-xl opacity-90">{t("dailyScheduleIntro")}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground">{t("dailyScheduleIntro")}</p>
                </section>

                <section className="space-y-3">
                    {schedule.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-4 rounded-lg ${item.type === "morning" ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500" :
                                    item.type === "academic" ? "bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500" :
                                        item.type === "evening" ? "bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500" :
                                            "bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="font-bold text-foreground">{item.time}</span>
                            </div>
                            <span className="text-foreground">{item.activity}</span>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default DailySchedule;
