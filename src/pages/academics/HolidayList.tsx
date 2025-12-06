import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";

const HolidayList: React.FC = () => {
    const { t } = useLanguage();

    return (
        <PageLayout title="holidayListTitle" subtitle="holidayListSubtitle">
            <div className="max-w-4xl mx-auto space-y-8">
                <section className="bg-card rounded-xl p-8 shadow-md border border-border">
                    <p className="text-lg leading-relaxed text-foreground mb-6">{t("holidayListIntro")}</p>

                    <div className="space-y-4">
                        {[
                            { name: "Eid-ul-Fitr", days: "3 days" },
                            { name: "Eid-ul-Adha", days: "3 days" },
                            { name: "Independence Day", days: "1 day" },
                            { name: "Victory Day", days: "1 day" },
                            { name: "Summer Vacation", days: "30 days" },
                            { name: "Winter Break", days: "15 days" },
                        ].map((holiday, index) => (
                            <div key={index} className="flex items-center justify-between bg-secondary/30 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <span className="font-semibold text-foreground">{holiday.name}</span>
                                </div>
                                <span className="text-muted-foreground">{holiday.days}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default HolidayList;
