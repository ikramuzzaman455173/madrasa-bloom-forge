import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const EventSchedule: React.FC = () => {
    const { t } = useLanguage();

    const events = [
        { date: "15 December 2024", event: "Annual Sports Day", time: "9:00 AM" },
        { date: "20 December 2024", event: "Prize Distribution Ceremony", time: "10:00 AM" },
        { date: "25 December 2024", event: "Islamic Knowledge Competition", time: "2:00 PM" },
        { date: "30 December 2024", event: "End of Term Examination Begins", time: "8:00 AM" },
    ];

    return (
        <PageLayout title="pubEventScheduleTitle" subtitle="pubEventScheduleSubtitle">
            <div className="max-w-5xl mx-auto space-y-8">
                <section className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[21/9] relative">
                        <img src={gallery1} alt="Events" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80 flex items-center justify-center p-8">
                            <div className="text-center text-white max-w-3xl">
                                <Calendar className="w-20 h-20 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    {events.map((item, index) => (
                        <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Calendar className="w-8 h-8 text-primary" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{item.event}</h3>
                                    <p className="text-muted-foreground">{item.date} • {item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </PageLayout>
    );
};

export default EventSchedule;
