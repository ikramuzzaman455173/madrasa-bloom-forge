import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "bn" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}


const translations = {
  en: {
    /** HEADER & BRAND **/
    instituteName: "BANGLADESH SCIENCE AND TECHNOLOGY MADRASA",
    tagline: "Excellence in Islamic Education & Modern Science",

    /** NAVBAR MAIN **/
    home: "Home",
    about: "About",
    academics: "Academics",
    admission: "Admission",
    residential: "Residential",
    publication: "Publication",
    library: "Library",
    branches: "Branches",
    media: "Media",
    contact: "Contact",
    login: "Login",

    /** SUBMENU — ABOUT **/
    about_overview: "Institution Overview",
    about_principal: "Principal's Message & Biography",
    about_features: "Features",
    about_establishmentPlan: "Establishment Plan",
    about_mission: "Mission & Objectives",
    about_governingBody: "Governing Body",
    about_complex: "Campus Complex",
    about_teachers: "Teachers Information",
    about_officers: "Officers & Staff",

    /** SUBMENU — ACADEMICS **/
    ac_classTeachers: "List of Class Teachers",
    ac_levels: "Education Levels",
    ac_curriculum: "Curriculum",
    ac_cocurriculum: "Co-Curriculum",
    ac_functions: "Programs & Events",
    ac_results: "Results",
    ac_examMethod: "Examination Method",
    ac_holidayList: "Holiday List",
    ac_examRoutine: "Exam Routine",
    ac_classRoutine: "Class Routine",

    /** SUBMENU — ADMISSION **/
    admission_time: "Admission Time",
    admission_test: "Admission Test",
    admission_procedure: "Admission Procedure",
    admission_fees: "Fees by Class",
    admission_terms: "Admission Requirements",

    /** SUBMENU — RESIDENTIAL **/
    res_hostelIntro: "Hostel Introduction",
    res_directors: "Residential Halls & Directors",
    res_rules: "Housing Rules",
    res_charges: "Housing Charges",
    res_policies: "Residential Policies",
    res_dailySchedule: "Daily Residential Schedule",

    /** SUBMENU — PUBLICATION **/
    pub_newBikash: "Monthly New Bikash",
    pub_eventSchedule: "Event Schedule",
    pub_studyTour: "Study Tour Souvenir",
    pub_yearlyActivity: "Yearly Activities",
    pub_academicCalendar: "Academic Calendar",
    pub_sautunNajat: "Quarterly Sautun Najat",
    pub_wallMagazine: "Wall Magazine",
    pub_others: "Others",

    /** SUBMENU — LIBRARY **/
    lib_intro: "Library Introduction",
    lib_catalog: "Catalog",
    lib_policy: "Policies",

    /** SUBMENU — BRANCHES **/
    br_takhssusi: "Takhssusi Branch",
    br_women: "Women’s Branch",
    br_hifz: "Hifz Section",
    br_orphanage: "Orphanage",
    br_kitab: "Kitab Department",

    /** SUBMENU — MEDIA **/
    media_photos: "Photo Gallery",
    media_videos: "Video Gallery",

    /** SUBMENU — LOGIN **/
    login_student: "Student/Guardian",
    login_teacher: "Teacher",
    login_software: "Software Login",
    login_admin: "Website Admin",

    /* HERO SECTION */
    heroSlide1Title: "Welcome to Our Institution",
    heroSlide1Subtitle: "Building Future Leaders Through Knowledge",

    heroSlide2Title: "Excellence in Education",
    heroSlide2Subtitle: "Combining Islamic Values with Modern Science",

    heroSlide3Title: "Join Our Community",
    heroSlide3Subtitle: "Admission Open for the New Academic Year",

    learnMore: "Learn More",
    applyNow: "Apply Now",

    /** PAGES **/
    principal: "Principal",
    principalMessage: "Message from the Principal",
    principalText:
      "Welcome to Bangladesh Science and Technology Madrasa. We are committed to providing quality education that integrates Islamic values with modern scientific knowledge. We strive to develop students who are prepared for both spiritual and worldly success.",

    latestNotices: "Latest Notices",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    allRightsReserved: "All Rights Reserved",

    /** FEATURES SECTION **/
    featuresAcademicTitle: "Academic Excellence",
    featuresAcademicText:
      "Our curriculum combines traditional Islamic studies with modern scientific education, preparing students for both spiritual and worldly success.",

    featuresFacilitiesTitle: "Modern Facilities",
    featuresFacilitiesText:
      "Digital classrooms, modern labs, and an extensive library provide academic support to enhance student learning.",

    featuresHolisticTitle: "Holistic Development",
    featuresHolisticText:
      "We shape students through leadership training, ethics, emotional intelligence, and character-building activities.",

    featuresCoCurricularTitle: "Co-Curricular Activities",
    featuresCoCurricularText:
      "Students join sports, debates, robotics, Quran competitions, and creative arts to develop practical life skills.",

    featuresTeachersTitle: "Qualified & Caring Teachers",
    featuresTeachersText:
      "Our experienced educators provide personal guidance using modern and effective teaching methods.",

    featuresSafetyTitle: "Safe & Supportive Campus",
    featuresSafetyText:
      "A secure campus, positive discipline, and emotional support help students learn and grow with confidence.",


    /** FOOTER **/
    address: "Address",
    phone: "Phone",
    email: "Email",

    /** =============================================
     *  ABOUT SECTION PAGES — Detailed Content
     * ============================================= */

    // 1. Institution Overview
    overviewTitle: "Institution Overview",
    overviewSubtitle: "A Glance at Our Prestigious Institution",
    overviewIntro: "Bangladesh Science and Technology Madrasa is a pioneering educational institution that seamlessly integrates traditional Islamic education with modern scientific knowledge.",
    overviewHistory: "History & Background",
    overviewHistoryText: "Established with the vision of creating a balanced educational environment, our institution has been serving the community for decades. We believe in nurturing students who are well-versed in both religious and contemporary subjects.",
    overviewVision: "Our Vision",
    overviewVisionText: "To become a leading institution that produces graduates who excel in both Islamic scholarship and modern sciences, contributing positively to society.",
    overviewAchievements: "Key Achievements",
    overviewStats: "Our Statistics",

    // 2. Principal's Message
    principalPageTitle: "Principal's Message & Biography",
    principalPageSubtitle: "Words of Guidance from Our Leader",
    principalGreeting: "Assalamu Alaikum and Welcome",
    principalMessageFull: "It is my honor to welcome you to Bangladesh Science and Technology Madrasa. Our institution stands as a beacon of integrated education, where the light of Islamic knowledge illuminates the path of modern scientific discovery. We are committed to developing well-rounded individuals who possess both spiritual depth and intellectual prowess.",
    principalBioTitle: "Biography",
    principalEducation: "Educational Background",
    principalExperience: "Professional Experience",
    principalAchievements: "Notable Achievements",

    // 3. Features
    featuresPageTitle: "Distinctive Features",
    featuresPageSubtitle: "What Makes Us Unique",
    featuresIntegrated: "Integrated Curriculum",
    featuresIntegratedText: "Our unique curriculum combines Quranic studies, Hadith, Fiqh with Mathematics, Science, and Technology, preparing students for success in both worlds.",
    featuresQualified: "Highly Qualified Faculty",
    featuresQualifiedText: "Our teachers hold advanced degrees in both Islamic studies and modern sciences, ensuring expert guidance in all subjects.",
    featuresInfrastructure: "Modern Infrastructure",
    featuresInfrastructureText: "State-of-the-art classrooms, well-equipped laboratories, and a comprehensive library provide an optimal learning environment.",
    featuresValues: "Character Building",
    featuresValuesText: "We emphasize moral education, ethical values, and character development alongside academic excellence.",

    // 4. Establishment Plan
    establishmentTitle: "Establishment Plan",
    establishmentSubtitle: "The Foundation of Excellence",
    establishmentVision: "Founding Vision",
    establishmentVisionText: "Our institution was established with the noble goal of creating an educational environment where Islamic values and modern knowledge complement each other.",
    establishmentPhases: "Development Phases",
    establishmentPhase1: "Phase 1: Foundation (Initial Years)",
    establishmentPhase1Text: "Establishing basic infrastructure and recruiting qualified teachers.",
    establishmentPhase2: "Phase 2: Expansion",
    establishmentPhase2Text: "Adding advanced facilities, laboratories, and expanding curriculum.",
    establishmentPhase3: "Phase 3: Excellence",
    establishmentPhase3Text: "Achieving recognition as a premier institution and continuous improvement.",
    establishmentFuture: "Future Plans",
    establishmentFutureText: "We continue to evolve with plans for digital learning platforms, research centers, and international collaborations.",

    // 5. Mission & Objectives
    missionTitle: "Mission & Objectives",
    missionSubtitle: "Our Purpose and Goals",
    missionStatement: "Mission Statement",
    missionStatementText: "To provide high-quality education that nurtures students' intellectual, spiritual, and moral development, preparing them to be responsible citizens and leaders.",
    objectivesTitle: "Core Objectives",
    objective1: "Academic Excellence",
    objective1Text: "Deliver outstanding education in both Islamic and modern sciences.",
    objective2: "Character Development",
    objective2Text: "Foster strong moral values, ethics, and Islamic principles.",
    objective3: "Holistic Growth",
    objective3Text: "Promote physical, emotional, and social development.",
    objective4: "Community Service",
    objective4Text: "Encourage students to contribute positively to society.",
    objective5: "Innovation & Research",
    objective5Text: "Promote critical thinking, creativity, and research culture.",

    // 6. Governing Body
    governingBodyTitle: "Governing Body",
    governingBodySubtitle: "Leadership and Management",
    governingBodyIntro: "Our institution is guided by a dedicated governing body comprised of experienced educators, community leaders, and subject matter experts.",
    chairperson: "Chairperson",
    viceChairperson: "Vice Chairperson",
    members: "Members",
    secretary: "Secretary",
    treasurer: "Treasurer",
    governingBodyRole: "Roles & Responsibilities",
    governingBodyRoleText: "The governing body oversees strategic planning, policy-making, financial management, and ensures the institution maintains high educational standards.",

    // 7. Campus Complex
    complexTitle: "Campus Complex",
    complexSubtitle: "Our World-Class Facilities",
    complexOverview: "Campus Overview",
    complexOverviewText: "Our sprawling campus is designed to provide a conducive learning environment with modern facilities and green spaces.",
    academicBlock: "Academic Block",
    academicBlockText: "Well-ventilated classrooms equipped with modern teaching aids and technology.",
    scienceLabs: "Science Laboratories",
    scienceLabsText: "Fully equipped Physics, Chemistry, Biology, and Computer labs.",
    libraryFacility: "Library Facility",
    libraryFacilityText: "A comprehensive library with thousands of books, journals, and digital resources.",
    mosque: "Mosque",
    mosqueText: "A beautiful mosque for daily prayers and Islamic learning.",
    hostelFacilities: "Hostel Facilities",
    hostelFacilitiesText: "Comfortable residential facilities for outstation students.",
    sportsGround: "Sports Ground",
    sportsGroundText: "Extensive grounds for football, cricket, and other sports.",
    cafeteria: "Cafeteria",
    cafeteriaText: "Hygienic cafeteria serving nutritious meals.",

    // 8. Teachers Information
    teachersTitle: "Teachers Information",
    teachersSubtitle: "Meet Our Dedicated Faculty",
    teachersIntro: "Our faculty comprises highly qualified and experienced educators dedicated to student success.",
    islamicStudies: "Islamic Studies Department",
    modernSciences: "Modern Sciences Department",
    languageDept: "Language Department",
    mathematicsDept: "Mathematics Department",
    teacherQualifications: "Qualifications",
    teacherExperience: "Experience",
    teacherSpecialization: "Specialization",

    // 9. Officers & Staff
    officersTitle: "Officers & Staff",
    officersSubtitle: "Our Support Team",
    officersIntro: "Our dedicated administrative and support staff ensure smooth operations and a conducive learning environment.",
    administrativeStaff: "Administrative Staff",
    supportStaff: "Support Staff",
    technicalStaff: "Technical Staff",
    maintenanceStaff: "Maintenance Staff",
    officeSecretary: "Office Secretary",
    accountant: "Accountant",
    librarian: "Librarian",
    labAssistants: "Lab Assistants",

    /** =============================================
     *  ACADEMICS SECTION PAGES
     * ============================================= */

    // 1. Class Teachers
    classTeachersTitle: "Class Teachers",
    classTeachersSubtitle: "Meet Our Dedicated Educators",
    classTeachersIntro: "Our class teachers are committed to providing personalized attention and guidance to each student, ensuring academic excellence and character development.",

    // 2. Education Levels
    levelsTitle: "Education Levels",
    levelsSubtitle: "Progressive Learning Stages",
    levelsIntro: "Our comprehensive education system is structured across multiple levels, from elementary to advanced studies.",
    levelPrimary: "Primary Level (Class 1-5)",
    levelPrimaryText: "Foundation in Islamic studies and basic academics",
    levelSecondary: "Secondary Level (Class 6-10)",
    levelSecondaryText: "Advanced Islamic knowledge with modern subjects",
    levelHigher: "Higher Secondary (Class 11-12)",
    levelHigherText: "Specialization in Islamic sciences and contemporary education",

    // 3. Curriculum
    curriculumTitle: "Curriculum",
    curriculumSubtitle: "Integrated Learning Framework",
    curriculumIntro: "Our curriculum seamlessly blends traditional Islamic education with modern academic subjects.",
    curriculumIslamic: "Islamic Studies",
    curriculumIslamicText: "Quran, Hadith, Fiqh, Arabic Language, and Islamic History",
    curriculumModern: "Modern Subjects",
    curriculumModernText: "Mathematics, Science, English, Bangla, Social Studies, and Computer Science",

    // 4. Co-Curriculum
    coCurriculumTitle: "Co-Curricular Activities",
    coCurriculumSubtitle: "Beyond the Classroom",
    coCurriculumIntro: "We believe in holistic development through diverse extracurricular programs.",
    coCurriculumSports: "Sports & Games",
    coCurriculumArts: "Islamic Arts & Crafts",
    coCurriculumDebate: "Debates & Competitions",
    coCurriculumCultural: "Cultural Programs",

    // 5. Functions & Events
    functionsTitle: "Functions & Events",
    functionsSubtitle: "Celebrating Our Community",
    functionsIntro: "Throughout the year, we organize various educational and cultural programs.",
    functionsAnnual: "Annual Day",
    functionsSports: "Sports Day",
    functionsIslamic: "Islamic Programs",
    functionsAcademic: "Academic Events",

    // 6. Results
    resultsTitle: "Academic Results",
    resultsSubtitle: "Excellence in Performance",
    resultsIntro: "Our students consistently achieve outstanding results in both board examinations and internal assessments.",

    // 7. Examination Method
    examMethodTitle: "Examination Method",
    examMethodSubtitle: "Assessment & Evaluation",
    examMethodIntro: "Our examination system is designed to comprehensively evaluate student learning and progress.",
    examTypes: "Types of Examinations",
    examInternal: "Internal Assessments",
    examTerminal: "Terminal Examinations",
    examBoard: "Board Examinations",

    // 8. Holiday List
    holidayListTitle: "Holiday List",
    holidayListSubtitle: "Academic Calendar Breaks",
    holidayListIntro: "Important holidays and vacation periods throughout the academic year.",

    // 9. Exam Routine
    examRoutineTitle: "Examination Routine",
    examRoutineSubtitle: "Scheduled Assessment Dates",
    examRoutineIntro: "Detailed schedule of upcoming examinations and assessments.",

    // 10. Class Routine
    classRoutineTitle: "Class Routine",
    classRoutineSubtitle: "Daily class Schedule",
    classRoutineIntro: "Structured daily timetable for all classes and subjects.",

    /** =============================================
     *  ADMISSION SECTION PAGES
     * ============================================= */

    // 1. Admission Time
    admissionTimeTitle: "Admission Time & Schedule",
    admissionTimeSubtitle: "When to Apply",
    admissionTimeIntro: "Our admission process runs annually with specific timelines for each academic level. Plan ahead to ensure a smooth application process.",
    admissionSession: "Academic Session",
    admissionPeriod: "Admission Period",
    admissionDeadline: "Application Deadline",

    // 2. Admission Test
    admissionTestTitle: "Admission Test",
    admissionTestSubtitle: "Assessment & Evaluation",
    admissionTestIntro: "All prospective students must pass an admission test to demonstrate their readiness for our integrated curriculum.",
    testSubjects: "Test Subjects",
    testFormat: "Test Format",
    testDuration: "Test Duration",
    testPreparation: "How to Prepare",

    // 3. Admission Procedure
    admissionProcedureTitle: "Admission Procedure",
    admissionProcedureSubtitle: "Step-by-Step Guide",
    admissionProcedureIntro: "Follow these simple steps to complete your admission application successfully.",
    procedureStep1: "Collect Application Form",
    procedureStep2: "Submit Required Documents",
    procedureStep3: "Pay Application Fee",
    procedureStep4: "Appear for Admission Test",
    procedureStep5: "Merit List Publication",
    procedureStep6: "Final Admission & Fee Payment",

    // 4. Admission Fees
    admissionFeesTitle: "Admission Fees",
    admissionFeesSubtitle: "Fee Structure & Payment",
    admissionFeesIntro: "Our fee structure is designed to be affordable while maintaining high-quality education standards.",
    applicationFee: "Application Fee",
    admissionFee: "Admission Fee",
    monthlyTuition: "Monthly Tuition",
    annualFees: "Annual Fees",
    paymentMethods: "Payment Methods",

    // 5. Admission Terms & Conditions
    admissionTermsTitle: "Terms & Conditions",
    admissionTermsSubtitle: "Important Guidelines",
    admissionTermsIntro: "Please read and understand these terms and conditions before applying for admission.",
    eligibilityCriteria: "Eligibility Criteria",
    requiredDocuments: "Required Documents",
    admissionRules: "Admission Rules",
    withdrawalPolicy: "Withdrawal Policy",

    /** =============================================
     *  RESIDENTIAL SECTION PAGES
     * ============================================= */

    // 1. Hostel Introduction
    hostelIntroTitle: "Hostel Introduction",
    hostelIntroSubtitle: "Your Home Away From Home",
    hostelIntroText: "Our residential facilities provide a safe, comfortable, and supportive living environment for students, fostering academic excellence and character development.",
    hostelFacilities: "Hostel Facilities",
    hostelCapacity: "Hostel Capacity",
    hostelRooms: "Room Types",

    // 2. Hostel Directors
    hostelDirectorsTitle: "Hostel Directors & Staff",
    hostelDirectorsSubtitle: "Dedicated Care & Supervision",
    hostelDirectorsIntro: "Our experienced hostel directors and wardens ensure the well-being, safety, and moral development of all resident students.",
    maleHostelDirector: "Male Hostel Director",
    femaleHostelDirector: "Female Hostel Director",
    hostelWardens: "Hostel Wardens",
    hostelSupportStaff: "Support Staff",

    // 3. Hostel Rules
    hostelRulesTitle: "Hostel Rules & Regulations",
    hostelRulesSubtitle: "Guidelines for Harmonious Living",
    hostelRulesIntro: "These rules are designed to maintain discipline, ensure safety, and create a conducive environment for study and personal growth.",
    generalRules: "General Rules",
    disciplineRules: "Discipline & Conduct",
    studyHours: "Study Hours",
    visitingRules: "Visiting Rules",

    // 4. Hostel Charges
    hostelChargesTitle: "Hostel Charges",
    hostelChargesSubtitle: "Affordable Residential Fees",
    hostelChargesIntro: "Our hostel fee structure is designed to be affordable while providing quality accommodation and services.",
    admissionCharge: "Admission Charge",
    monthlyCharge: "Monthly Charge",
    securityDeposit: "Security Deposit",
    mealCharges: "Meal Charges",
    utilityCharges: "Utility Charges",

    // 5. Hostel Policies
    hostelPoliciesTitle: "Hostel Policies",
    hostelPoliciesSubtitle: "Important Policy Guidelines",
    hostelPoliciesIntro: "Please familiarize yourself with our hostel policies to ensure a smooth residential experience.",
    admissionPolicy: "Admission Policy",
    refundPolicy: "Refund Policy",
    disciplinaryPolicy: "Disciplinary Policy",
    emergencyPolicy: "Emergency Policy",

    // 6. Daily Schedule
    dailyScheduleTitle: "Daily Schedule",
    dailyScheduleSubtitle: "Structured Routine for Success",
    dailyScheduleIntro: "Our daily schedule balances academics, worship, physical activities, and rest to ensure holistic development.",
    morningRoutine: "Morning Routine",
    academicTime: "Academic Time",
    eveningActivities: "Evening Activities",
    nightRoutine: "Night Routine",

    /** =============================================
     *  PUBLICATION SECTION PAGES
     * ============================================= */

    // Publications
    pubNewBikashTitle: "Naya Bikash Magazine",
    pubNewBikashSubtitle: "Our Monthly Publication",
    pubEventScheduleTitle: "Event Schedule",
    pubEventScheduleSubtitle: "Upcoming Programs & Activities",
    pubStudyTourTitle: "Study Tour",
    pubStudyTourSubtitle: "Educational Excursions",
    pubYearlyActivityTitle: "Yearly Activities Report",
    pubYearlyActivitySubtitle: "Annual Achievements & Events",
    pubAcademicCalendarTitle: "Academic Calendar",
    pubAcademicCalendarSubtitle: "Important Academic Dates",
    pubSautunNajatTitle: "Sautun Najat",
    pubSautunNajatSubtitle: "Islamic Guidance Publication",
    pubWallMagazineTitle: "Wall Magazine",
    pubWallMagazineSubtitle: "Student Creativity Showcase",
    pubOthersTitle: "Other Publications",
    pubOthersSubtitle: "Additional Reading Materials",
  },

  bn: {
    /** HEADER & BRAND **/
    instituteName: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসা",
    tagline: "ইসলামিক শিক্ষা ও আধুনিক বিজ্ঞানে উৎকর্ষতা",

    /** NAVBAR MAIN **/
    home: "হোম",
    about: "পরিচিতি",
    academics: "একাডেমিক",
    admission: "ভর্তি",
    residential: "আবাসন",
    publication: "প্রকাশনা",
    library: "লাইব্রেরি",
    branches: "শাখা প্রতিষ্ঠান",
    media: "মিডিয়া",
    contact: "যোগাযোগ",
    login: "লগইন",

    /** SUBMENU — ABOUT **/
    about_overview: "এক নাজরে মাদরাসা",
    about_principal: "অধ্যক্ষের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত",
    about_features: "বৈশিষ্ট্য",
    about_establishmentPlan: "প্রতিষ্ঠার পরিকল্পনা",
    about_mission: "প্রতিষ্ঠার লক্ষ্য",
    about_governingBody: "গভর্নিং বডি",
    about_complex: "কমপ্লেক্স",
    about_teachers: "শিক্ষকমন্ডলীর তথ্যবলী",
    about_officers: "কর্মকর্তা ও কর্মচারী",

    /** SUBMENU — ACADEMICS **/
    ac_classTeachers: "শ্রেণী শিক্ষক এর তালিকা",
    ac_levels: "শিক্ষা স্তর",
    ac_curriculum: "পাঠ্যক্রম",
    ac_cocurriculum: "সহ-পাঠ্যক্রম",
    ac_functions: "অনুষ্ঠানমালা",
    ac_results: "ফলাফল",
    ac_examMethod: "পরীক্ষা পদ্ধতি",
    ac_holidayList: "ছুটির তালিকা",
    ac_examRoutine: "পরীক্ষার রুটিন",
    ac_classRoutine: "ক্লাস রুটিন",

    /** SUBMENU — ADMISSION **/
    admission_time: "ভর্তির সময়",
    admission_test: "ভর্তি পরিক্ষা",
    admission_procedure: "ভর্তি প্রক্রিয়া",
    admission_fees: "জামাআত ওয়ারী বিভিন্ন ফি",
    admission_terms: "ভর্তির শর্তাবলী",

    /** SUBMENU — RESIDENTIAL **/
    res_hostelIntro: "ছাত্রাবাস পরিচিতি",
    res_directors: "আবাসিক হল ও পরিচালকবৃন্দ",
    res_rules: "আবাসন প্রাপ্তির নিয়মাবলী",
    res_charges: "আবাসন চার্জ",
    res_policies: "আবাসিক নীতিমালা",
    res_dailySchedule: "দৈনিক আবাসিক কার্যসূচি",

    /** SUBMENU — PUBLICATION **/
    pub_newBikash: "মাসিক নতুন বিকাশ",
    pub_eventSchedule: "ইভেন্ট সিডিউল",
    pub_studyTour: "শিক্ষাসফর স্মারক",
    pub_yearlyActivity: "বার্ষিক কার্যক্রম",
    pub_academicCalendar: "একাডেমিক ক্যালেন্ডার",
    pub_sautunNajat: "ত্রৈ মাসিক সাওতুন নাজাত",
    pub_wallMagazine: "দেয়ালিকা",
    pub_others: "অন্যান্য",

    /** SUBMENU — LIBRARY **/
    lib_intro: "মাকতাবা পরিচিতি",
    lib_catalog: "ক্যাটালগ",
    lib_policy: "নীতিমালা",

    /** SUBMENU — BRANCHES **/
    br_takhssusi: "তাখসীসি শাখা",
    br_women: "মহিলা শাখা",
    br_hifz: "নেছারিয়া হেফজখানা",
    br_orphanage: "ছালেহিয়া এতিমখানা",
    br_kitab: "কিতাব বিভাগ",

    /** SUBMENU — MEDIA **/
    media_photos: "ফটোগ্যালারী",
    media_videos: "ভিডিও গ্যালারি",

    /** SUBMENU — LOGIN **/
    login_student: "শিক্ষার্থী/অভিভাবক",
    login_teacher: "শিক্ষক",
    login_software: "সফটওয়্যার লগইন",
    login_admin: "ওয়েবসাইট অ্যাডমিন",

    /* HERO SECTION */
    heroSlide1Title: "আমাদের প্রতিষ্ঠানে স্বাগতম",
    heroSlide1Subtitle: "জ্ঞান দিয়ে ভবিষ্যতের নেতৃত্ব গড়ে তুলি",

    heroSlide2Title: "শিক্ষায় উৎকর্ষতা",
    heroSlide2Subtitle: "ইসলামি মূল্যবোধ ও আধুনিক বিজ্ঞানের সমন্বয়",

    heroSlide3Title: "আমাদের পরিবারের অংশ হোন",
    heroSlide3Subtitle: "নতুন শিক্ষাবর্ষে ভর্তি চলছে",

    learnMore: "বিস্তারিত দেখুন",
    applyNow: "ভর্তি করুন",

    /** PAGES **/
    principal: "অধ্যক্ষ",
    principalMessage: "অধ্যক্ষের বাণী",
    principalText:
      "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসায় আপনাকে স্বাগতম। আমরা ইসলামিক মূল্যবোধের সাথে আধুনিক বৈজ্ঞানিক জ্ঞান সমন্বিত মানসম্পন্ন শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ। আধ্যাত্মিক ও পার্থিব উভয় সাফল্যের জন্য সুসজ্জিত শিক্ষার্থী তৈরি করাই আমাদের লক্ষ্য।",

    latestNotices: "সর্বশেষ নোটিশ",
    quickLinks: "দ্রুত লিংক",
    aboutUs: "আমাদের সম্পর্কে",
    contactInfo: "যোগাযোগের তথ্য",
    followUs: "আমাদের অনুসরণ করুন",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",

    /** FEATURES SECTION **/
    featuresAcademicTitle: "শিক্ষাগত উৎকর্ষতা",
    featuresAcademicText:
      "আমাদের পাঠ্যক্রমে ঐতিহ্যবাহী ইসলামিক শিক্ষা ও আধুনিক বৈজ্ঞানিক জ্ঞানের সমন্বয় রয়েছে, যা শিক্ষার্থীদের আধ্যাত্মিক ও পার্থিব সফলতার জন্য প্রস্তুত করে।",

    featuresFacilitiesTitle: "আধুনিক সুবিধাসমূহ",
    featuresFacilitiesText:
      "ডিজিটাল ক্লাসরুম, আধুনিক ল্যাব এবং সমৃদ্ধ লাইব্রেরি শিক্ষার্থীদের শেখার অভিজ্ঞতা উন্নত করতে সহায়তা করে।",

    featuresHolisticTitle: "সামগ্রিক উন্নয়ন",
    featuresHolisticText:
      "নেতৃত্ব প্রশিক্ষণ, নীতি-নৈতিকতা, আবেগীয় বুদ্ধিমত্তা এবং চরিত্র গঠনের কার্যক্রমের মাধ্যমে আমরা শিক্ষার্থীদের গড়ে তুলি।",

    featuresCoCurricularTitle: "সহশিক্ষা কার্যক্রম",
    featuresCoCurricularText:
      "ক্রীড়া, বিতর্ক, রোবোটিক্স, কোরআন প্রতিযোগিতা এবং সৃজনশীল শিল্পকর্মে অংশগ্রহণের মাধ্যমে শিক্ষার্থীরা প্রায়োগিক জীবন দক্ষতা অর্জন করে।",

    featuresTeachersTitle: "যোগ্য ও যত্নশীল শিক্ষকবৃন্দ",
    featuresTeachersText:
      "আমাদের অভিজ্ঞ শিক্ষকেরা আধুনিক ও কার্যকর পদ্ধতিতে শিক্ষার্থীদের ব্যক্তিগত নির্দেশনা প্রদান করেন।",

    featuresSafetyTitle: "নিরাপদ ও সহায়ক ক্যাম্পাস",
    featuresSafetyText:
      "একটি নিরাপদ পরিবেশ, ইতিবাচক শৃঙ্খলা এবং মানসিক সহায়তা শিক্ষার্থীদের আত্মবিশ্বাসের সাথে শেখা ও বেড়ে উঠতে সহায়তা করে।",

    /** FOOTER **/
    address: "ঠিকানা",
    phone: "ফোন",
    email: "ইমেইল",

    /** =============================================
     *  ABOUT SECTION PAGES — বিস্তারিত কন্টেন্ট
     * ============================================= */

    // 1. প্রতিষ্ঠান পরিচিতি
    overviewTitle: "এক নাজরে মাদরাসা",
    overviewSubtitle: "আমাদের সম্মানিত প্রতিষ্ঠানের এক নজরে",
    overviewIntro: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসা একটি অগ্রণী শিক্ষা প্রতিষ্ঠান যা ঐতিহ্যবাহী ইসলামিক শিক্ষা এবং আধুনিক বৈজ্ঞানিক জ্ঞানকে নির্বিঘ্নভাবে একীভূত করে।",
    overviewHistory: "ইতিহাস ও পটভূমি",
    overviewHistoryText: "একটি সুষম শিক্ষা পরিবেশ তৈরির দৃষ্টিভঙ্গি নিয়ে প্রতিষ্ঠিত, আমাদের প্রতিষ্ঠান দশকের পর দশক ধরে সমাজসেবা করে আসছে। আমরা এমন শিক্ষার্থী তৈরিতে বিশ্বাস করি যারা ধর্মীয় এবং সমসাময়িক উভয় বিষয়ে পারদর্শী।",
    overviewVision: "আমাদের দৃষ্টিভঙ্গি",
    overviewVisionText: "এমন একটি নেতৃস্থানীয় প্রতিষ্ঠান হতে যা ইসলামিক বুদ্ধিবৃত্তি এবং আধুনিক বিজ্ঞান উভয় ক্ষেত্রে উৎকর্ষ সাধনকারী স্নাতক তৈরি করে, যারা সমাজে ইতিবাচক অবদান রাখে।",
    overviewAchievements: "মূল অর্জনসমূহ",
    overviewStats: "আমাদের পরিসংখ্যান",

    // 2. অধ্যক্ষের বাণী
    principalPageTitle: "অধ্যক্ষের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত",
    principalPageSubtitle: "আমাদের নেতার দিকনির্দেশনা",
    principalGreeting: "আসসালামু আলাইকুম ও স্বাগতম",
    principalMessageFull: "বাংলাদেশ সায়েন্স এন্ড টেকনোলজি মাদ্রাসায় আপনাকে স্বাগত জানাতে পেরে আমি সম্মানিত। আমাদের প্রতিষ্ঠান একীভূত শিক্ষার আলোকবর্তিকা হিসেবে দাঁড়িয়ে আছে, যেখানে ইসলামিক জ্ঞানের আলো আধুনিক বৈজ্ঞানিক আবিষ্কারের পথ আলোকিত করে। আমরা সুসম্পন্ন ব্যক্তিত্ব তৈরিতে প্রতিশ্রুতিবদ্ধ যাদের আধ্যাত্মিক গভীরতা এবং বুদ্ধিবৃত্তিক শক্তি উভয়ই রয়েছে।",
    principalBioTitle: "জীবনবৃত্তান্ত",
    principalEducation: "শিক্ষাগত যোগ্যতা",
    principalExperience: "পেশাগত অভিজ্ঞতা",
    principalAchievements: "উল্লেখযোগ্য অর্জনসমূহ",

    // 3. বৈশিষ্ট্য
    featuresPageTitle: "স্বতন্ত্র বৈশিষ্ট্য",
    featuresPageSubtitle: "যা আমাদের অনন্য করে তোলে",
    featuresIntegrated: "একীভূত পাঠ্যক্রম",
    featuresIntegratedText: "আমাদের অনন্য পাঠ্যক্রমে কুরআন অধ্যয়ন, হাদিস, ফিকহ এবং গণিত, বিজ্ঞান ও প্রযুক্তির সমন্বয় রয়েছে, যা শিক্ষার্থীদের উভয় জীবনে সফলতার জন্য প্রস্তুত করে।",
    featuresQualified: "উচ্চ যোগ্য শিক্ষকবৃন্দ",
    featuresQualifiedText: "আমাদের শিক্ষকগণ ইসলামিক স্টাডিজ এবং আধুনিক বিজ্ঞান উভয় ক্ষেত্রে উচ্চতর ডিগ্রিধারী, যা সব বিষয়ে দক্ষ নির্দেশনা নিশ্চিত করে।",
    featuresInfrastructure: "আধুনিক অবকাঠামো",
    featuresInfrastructureText: "অত্যাধুনিক শ্রেণীকক্ষ, সুসজ্জিত পরীক্ষাগার এবং ব্যাপক লাইব্রেরি সর্বোত্তম শিক্ষা পরিবেশ প্রদান করে।",
    featuresValues: "চরিত্র গঠন",
    featuresValuesText: "আমরা একাডেমিক উৎকর্ষতার পাশাপাশি নৈতিক শিক্ষা, নৈতিক মূল্যবোধ এবং চরিত্র বিকাশের উপর জোর দিই।",

    // 4. প্রতিষ্ঠার পরিকল্পনা
    establishmentTitle: "প্রতিষ্ঠার পরিকল্পনা",
    establishmentSubtitle: "উৎকর্ষতার ভিত্তি",
    establishmentVision: "প্রতিষ্ঠার দৃষ্টিভঙ্গি",
    establishmentVisionText: "আমাদের প্রতিষ্ঠান এমন একটি শিক্ষা পরিবেশ তৈরির মহৎ লক্ষ্য নিয়ে প্রতিষ্ঠিত হয়েছিল যেখানে ইসলামিক মূল্যবোধ এবং আধুনিক জ্ঞান একে অপরের পরিপূরক।",
    establishmentPhases: "উন্নয়ন পর্যায়সমূহ",
    establishmentPhase1: "পর্যায় ১: ভিত্তি স্থাপন (প্রাথমিক বছর)",
    establishmentPhase1Text: "মৌলিক অবকাঠামো স্থাপন এবং যোগ্য শিক্ষক নিয়োগ।",
    establishmentPhase2: "পর্যায় ২: সম্প্রসারণ",
    establishmentPhase2Text: "উন্নত সুবিধা, পরীক্ষাগার যোগ এবং পাঠ্যক্রম সম্প্রসারণ।",
    establishmentPhase3: "পর্যায় ৩: উৎকর্ষতা",
    establishmentPhase3Text: "প্রথম শ্রেণীর প্রতিষ্ঠান হিসেবে স্বীকৃতি এবং ক্রমাগত উন্নতি।",
    establishmentFuture: "ভবিষ্যৎ পরিকল্পনা",
    establishmentFutureText: "আমরা ডিজিটাল শিক্ষা প্ল্যাটফর্ম, গবেষণা কেন্দ্র এবং আন্তর্জাতিক সহযোগিতার পরিকল্পনা নিয়ে বিকশিত হচ্ছি।",

    // 5. লক্ষ্য ও উদ্দেশ্য
    missionTitle: "প্রতিষ্ঠার লক্ষ্য ও উদ্দেশ্য",
    missionSubtitle: "আমাদের উদ্দেশ্য এবং লক্ষ্যসমূহ",
    missionStatement: "মিশন বিবৃতি",
    missionStatementText: "উচ্চমানের শিক্ষা প্রদান যা শিক্ষার্থীদের বুদ্ধিবৃত্তিক, আধ্যাত্মিক এবং নৈতিক বিকাশে সহায়তা করে, তাদের দায়িত্বশীল নাগরিক এবং নেতা হিসেবে প্রস্তুত করে।",
    objectivesTitle: "মূল উদ্দেশ্যসমূহ",
    objective1: "একাডেমিক উৎকর্ষতা",
    objective1Text: "ইসলামিক এবং আধুনিক বিজ্ঞান উভয় ক্ষেত্রে অসাধারণ শিক্ষা প্রদান।",
    objective2: "চরিত্র গঠন",
    objective2Text: "শক্তিশালী নৈতিক মূল্যবোধ, নীতিশাস্ত্র এবং ইসলামিক নীতিমালা গড়ে তোলা।",
    objective3: "সামগ্রিক উন্নয়ন",
    objective3Text: "শারীরিক, মানসিক এবং সামাজিক বিকাশ প্রচার।",
    objective4: "সমাজসেবা",
    objective4Text: "শিক্ষার্থীদের সমাজে ইতিবাচক অবদান রাখতে উৎসাহিত করা।",
    objective5: "উদ্ভাবন ও গবেষণা",
    objective5Text: "সমালোচনামূলক চিন্তা, সৃজনশীলতা এবং গবেষণা সংস্কৃতি প্রচার।",

    // 6. গভর্নিং বডি
    governingBodyTitle: "গভর্নিং বডি",
    governingBodySubtitle: "নেতৃত্ব ও ব্যবস্থাপনা",
    governingBodyIntro: "আমাদের প্রতিষ্ঠান অভিজ্ঞ শিক্ষাবিদ, সমাজ নেতা এবং বিষয়বিশেষজ্ঞদের সমন্বয়ে গঠিত একটি নিবেদিত গভর্নিং বডি দ্বারা পরিচালিত।",
    chairperson: "সভাপতি",
    viceChairperson: "সহ-সভাপতি",
    members: "সদস্যবৃন্দ",
    secretary: "সচিব",
    treasurer: "কোষাধ্যক্ষ",
    governingBodyRole: "ভূমিকা ও দায়িত্বসমূহ",
    governingBodyRoleText: "গভর্নিং বডি কৌশলগত পরিকল্পনা, নীতি প্রণয়ন, আর্থিক ব্যবস্থাপনার তদারকি করে এবং প্রতিষ্ঠান উচ্চ শিক্ষাগত মান বজায় রাখা নিশ্চিত করে।",

    // 7. ক্যাম্পাস কমপ্লেক্স
    complexTitle: "ক্যাম্পাস কমপ্লেক্স",
    complexSubtitle: "আমাদের বিশ্বমানের সুবিধাদি",
    complexOverview: "ক্যাম্পাস সংক্ষিপ্ত বিবরণ",
    complexOverviewText: "আমাদের বিস্তৃত ক্যাম্পাস আধুনিক সুবিধা এবং সবুজ স্থান সহ একটি উপযুক্ত শিক্ষা পরিবেশ প্রদানের জন্য ডিজাইন করা হয়েছে।",
    academicBlock: "একাডেমিক ব্লক",
    academicBlockText: "আধুনিক শিক্ষা উপকরণ এবং প্রযুক্তি দিয়ে সজ্জিত সুবায়ুযুক্ত শ্রেণীকক্ষ।",
    scienceLabs: "বিজ্ঞান পরীক্ষাগার",
    scienceLabsText: "সম্পূর্ণ সজ্জিত পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং কম্পিউটার ল্যাব।",
    libraryFacility: "লাইব্রেরি সুবিধা",
    libraryFacilityText: "হাজার হাজার বই, জার্নাল এবং ডিজিটাল সম্পদ সহ একটি ব্যাপক লাইব্রেরি।",
    mosque: "মসজিদ",
    mosqueText: "দৈনিক নামাজ এবং ইসলামিক শিক্ষার জন্য একটি সুন্দর মসজিদ।",
    hostelFacilities: "হোস্টেল সুবিধা",
    hostelFacilitiesText: "বহিরাগত শিক্ষার্থীদের জন্য আরামদায়ক আবাসিক সুবিধা।",
    sportsGround: "ক্রীড়াঙ্গন",
    sportsGroundText: "ফুটবল, ক্রিকেট এবং অন্যান্য খেলার জন্য বিস্তৃত মাঠ।",
    cafeteria: "ক্যাফেটেরিয়া",
    cafeteriaText: "স্বাস্থ্যকর খাবার পরিবেশনকারী স্বাস্থ্যসম্মত ক্যাফেটেরিয়া।",

    // 8. শিক্ষক তথ্য
    teachersTitle: "শিক্ষকমন্ডলীর তথ্যবলী",
    teachersSubtitle: "আমাদের নিবেদিত শিক্ষকদের সাথে পরিচিত হোন",
    teachersIntro: "আমাদের শিক্ষক মণ্ডলী উচ্চ যোগ্য এবং অভিজ্ঞ শিক্ষাবিদদের নিয়ে গঠিত যারা শিক্ষার্থীদের সফলতার জন্য নিবেদিত।",
    islamicStudies: "ইসলামিক স্টাডিজ বিভাগ",
    modernSciences: "আধুনিক বিজ্ঞান বিভাগ",
    languageDept: "ভাষা বিভাগ",
    mathematicsDept: "গণিত বিভাগ",
    teacherQualifications: "যোগ্যতা",
    teacherExperience: "অভিজ্ঞতা",
    teacherSpecialization: "বিশেষত্ব",

    // 9. কর্মকর্তা ও কর্মচারী
    officersTitle: "কর্মকর্তা ও কর্মচারী",
    officersSubtitle: "আমাদের সহায়তা দল",
    officersIntro: "আমাদের নিবেদিত প্রশাসনিক এবং সহায়তা কর্মীরা মসৃণ কার্যক্রম এবং একটি উপযুক্ত শিক্ষা পরিবেশ নিশ্চিত করে।",
    administrativeStaff: "প্রশাসনিক কর্মীবৃন্দ",
    supportStaff: "সহায়তা কর্মীবৃন্দ",
    technicalStaff: "প্রযুক্তিগত কর্মীবৃন্দ",
    maintenanceStaff: "রক্ষণাবেক্ষণ কর্মীবৃন্দ",
    officeSecretary: "অফিস সচিব",
    accountant: "হিসাবরক্ষক",
    librarian: "গ্রন্থাগারিক",
    labAssistants: "ল্যাব সহকারী",

    /** =============================================
     *  ACADEMICS SECTION PAGES (বাংলা)
     * ============================================= */

    // 1. শ্রেণী শিক্ষক
    classTeachersTitle: "শ্রেণী শিক্ষক",
    classTeachersSubtitle: "আমাদের নিবেদিত শিক্ষকবৃন্দের সাথে পরিচিত হন",
    classTeachersIntro: "আমাদের শ্রেণী শিক্ষকগণ প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ ও নির্দেশনা প্রদানে প্রতিশ্র utiবদ্ধ, যা একাডেমিক উৎকর্ষতা এবং চরিত্র উন্নয়ন নিশ্চিত করে।",

    // 2. শিক্ষা স্তর
    levelsTitle: "শিক্ষা স্তর",
    levelsSubtitle: "প্রগতিশীল শিক্ষা পর্যায়",
    levelsIntro: "আমাদের ব্যাপক শিক্ষা ব্যবস্থা প্রাথমিক থেকে উচ্চতর পড়াশোনা পর্যন্ত একাধিক স্তরে কাঠামোবদ্ধ।",
    levelPrimary: "প্রাথমিক স্তর (শ্রেণী ১-৫)",
    levelPrimaryText: "ইসলামিক স্টাডিজ এবং মৌলিক একাডেমিক শিক্ষার ভিত্তি",
    levelSecondary: "মাধ্যমিক স্তর (শ্রেণী ৬-১০)",
    levelSecondaryText: "আধুনিক বিষয়ের সাথে উন্নত ইসলামিক জ্ঞান",
    levelHigher: "উচ্চ মাধ্যমিক (শ্রেণী ১১-১২)",
    levelHigherText: "ইসলামিক বিজ্ঞান এবং সমসাময়িক শিক্ষায় বিশেষীকরণ",

    // 3. পাঠ্যক্রম
    curriculumTitle: "পাঠ্যক্রম",
    curriculumSubtitle: "সমন্বিত শিক্ষা কাঠামো",
    curriculumIntro: "আমাদের পাঠ্যক্রম ঐতিহ্যবাহী ইসলামিক শিক্ষা এবং আধুনিক একাডেমিক বিষয়গুলিকে নির্বিঘ্নে মিশ্রিত করে।",
    curriculumIslamic: "ইসলামিক স্টাডিজ",
    curriculumIslamicText: "কুরআন, হাদিস, ফিকহ, আরবি ভাষা এবং ইসলামিক ইতিহাস",
    curriculumModern: "আধুনিক বিষয়সমূহ",
    curriculumModernText: "গণিত, বিজ্ঞান, ইংরেজি, বাংলা, সামাজিক বিজ্ঞান এবং কম্পিউটার সায়েন্স",

    // 4. সহপাঠ্যক্রম
    coCurriculumTitle: "সহপাঠ্যক্রম কার্যক্রম",
    coCurriculumSubtitle: "শ্রেণীকক্ষের বাইরে",
    coCurriculumIntro: "আমরা বিভিন্ন পাঠ্যক্রম বহির্ভূত কর্মসূচির মাধ্যমে সামগ্রিক উন্নয়নে বিশ্বাস করি।",
    coCurriculumSports: "ক্রীড়া ও খেলাধুলা",
    coCurriculumArts: "ইসলামিক শিল্প ও কারুশিল্প",
    coCurriculumDebate: "বিতর্ক ও প্রতিযোগিতা",
    coCurriculumCultural: "সাংস্কৃতিক অনুষ্ঠান",

    // 5. অনুষ্ঠান ও ইভেন্ট
    functionsTitle: "অনুষ্ঠান ও ইভেন্ট",
    functionsSubtitle: "আমাদের সম্প্রদায় উদযাপন",
    functionsIntro: "বছর জুড়ে, আমরা বিভিন্ন শিক্ষামূলক এবং সাংস্কৃতিক অনুষ্ঠান আয়োজন করি।",
    functionsAnnual: "বার্ষিক দিবস",
    functionsSports: "ক্রীড়া দিবস",
    functionsIslamic: "ইসলামিক অনুষ্ঠান",
    functionsAcademic: "একাডেমিক ইভেন্ট",

    // 6. ফলাফল
    resultsTitle: "একাডেমিক ফলাফল",
    resultsSubtitle: "পারফরম্যান্সে উৎকর্ষতা",
    resultsIntro: "আমাদের শিক্ষার্থীরা ধারাবাহিকভাবে বোর্ড পরীক্ষা এবং অভ্যন্তরীণ মূল্যায়ন উভয়ে অসাধারণ ফলাফল অর্জন করে।",

    // 7. পরীক্ষা পদ্ধতি
    examMethodTitle: "পরীক্ষা পদ্ধতি",
    examMethodSubtitle: "মূল্যায়ন ও পরিমাপ",
    examMethodIntro: "আমাদের পরীক্ষা ব্যবস্থা শিক্ষার্থীদের শিক্ষা এবং অগ্রগতি ব্যাপকভাবে মূল্যায়ন করার জন্য ডিজাইন করা হয়েছে।",
    examTypes: "পরীক্ষার ধরন",
    examInternal: "অভ্যন্তরীণ মূল্যায়ন",
    examTerminal: "ট্যার্মিনাল পরীক্ষা",
    examBoard: "বোর্ড পরীক্ষা",

    // 8. ছুটির তালিকা
    holidayListTitle: "ছুটির তালিকা",
    holidayListSubtitle: "একাডেমিক ক্যালেন্ডার বিরতি",
    holidayListIntro: "একাডেমিক বছর জুড়ে গুরুত্বপূর্ণ ছুটি এবং অবকাশের সময়কাল।",

    // 9. পরীক্ষার রুটিন
    examRoutineTitle: "পরীক্ষার রুটিন",
    examRoutineSubtitle: "নির্ধারিত মূল্যায়ন তারিখ",
    examRoutineIntro: "আসন্ন পরীক্ষা এবং মূল্যায়নের বিস্তারিত সময়সূচী।",

    // 10. ক্লাস রুটিন
    classRoutineTitle: "ক্লাস রুটিন",
    classRoutineSubtitle: "দৈনিক ক্লাস সময়সূচী",
    classRoutineIntro: "সমস্ত শ্রেণী এবং বিষয়ের জন্য কাঠামোবদ্ধ দৈনিক সময়সূচী।",

    /** =============================================
     *  ADMISSION SECTION PAGES (বাংলা)
     * ============================================= */

    // 1. ভর্তির সময়
    admissionTimeTitle: "ভর্তির সময় ও সূচি",
    admissionTimeSubtitle: "কখন আবেদন করবেন",
    admissionTimeIntro: "আমাদের ভর্তি প্রক্রিয়া প্রতি শিক্ষাবর্ষে নির্দিষ্ট সময়সূচি অনুযায়ী পরিচালিত হয়। একটি সুগম আবেদন প্রক্রিয়া নিশ্চিত করতে আগে থেকেই পরিকল্পনা করুন।",
    admissionSession: "শিক্ষাবর্ষ",
    admissionPeriod: "ভর্তির সময়কাল",
    admissionDeadline: "আবেদনের শেষ তারিখ",

    // 2. ভর্তি পরীক্ষা
    admissionTestTitle: "ভর্তি পরীক্ষা",
    admissionTestSubtitle: "মূল্যায়ন ও পরিমাপ",
    admissionTestIntro: "সকল প্রত্যাশী শিক্ষার্থীকে আমাদের সমন্বিত পাঠ্যক্রমের জন্য তাদের প্রস্তুতি প্রদর্শনের জন্য একটি ভর্তি পরীক্ষায় উত্তীর্ণ হতে হবে।",
    testSubjects: "পরীক্ষার বিষয়",
    testFormat: "পরীক্ষার ধরণ",
    testDuration: "পরীক্ষার সময়কাল",
    testPreparation: "কীভাবে প্রস্তুতি নেবেন",

    // 3. ভর্তি পদ্ধতি
    admissionProcedureTitle: "ভর্তি পদ্ধতি",
    admissionProcedureSubtitle: "ধাপে ধাপে নির্দেশিকা",
    admissionProcedureIntro: "আপনার ভর্তি আবেদন সফলভাবে সম্পন্ন করতে এই সহজ ধাপগুলি অনুসরণ করুন।",
    procedureStep1: "আবেদন ফর্ম সংগ্রহ করুন",
    procedureStep2: "প্রয়োজনীয় কাগজপত্র জমা দিন",
    procedureStep3: "আবেদন ফি পরিশোধ করুন",
    procedureStep4: "ভর্তি পরীক্ষায় অংশগ্রহণ করুন",
    procedureStep5: "মেধা তালিকা প্রকাশ",
    procedureStep6: "চূড়ান্ত ভর্তি ও ফি পরিশোধ",

    // 4. ভর্তি ফি
    admissionFeesTitle: "ভর্তি ফি",
    admissionFeesSubtitle: "ফি কাঠামো ও পেমেন্ট",
    admissionFeesIntro: "আমাদের ফি কাঠামো সাশ্রয়ী হওয়ার পাশাপাশি উচ্চমানের শিক্ষা মান বজায় রাখার জন্য ডিজাইন করা হয়েছে।",
    applicationFee: "আবেদন ফি",
    admissionFee: "ভর্তি ফি",
    monthlyTuition: "মাসিক বেতন",
    annualFees: "বার্ষিক ফি",
    paymentMethods: "পেমেন্ট পদ্ধতি",

    // 5. ভর্তির শর্তাবলী
    admissionTermsTitle: "শর্তাবলী",
    admissionTermsSubtitle: "গুরুত্বপূর্ণ নির্দেশনা",
    admissionTermsIntro: "ভর্তির জন্য আবেদন করার আগে অনুগ্রহ করে এই শর্তাবলী পড়ুন এবং বুঝুন।",
    eligibilityCriteria: "যোগ্যতার মানদণ্ড",
    requiredDocuments: "প্রয়োজনীয় কাগজপত্র",
    admissionRules: "ভর্তির নিয়মাবলী",
    withdrawalPolicy: "প্রত্যাহার নীতি",

    /** =============================================
     *  RESIDENTIAL SECTION PAGES (বাংলা)
     * ============================================= */

    // 1. হোস্টেল পরিচিতি
    hostelIntroTitle: "হোস্টেল পরিচিতি",
    hostelIntroSubtitle: "আপনার দ্বিতীয় ঘর",
    hostelIntroText: "আমাদের আবাসিক সুবিধাসমূহ শিক্ষার্থীদের জন্য একটি নিরাপদ, আরামদায়ক এবং সহায়ক জীবনযাত্রার পরিবেশ প্রদান করে, যা একাডেমিক উৎকর্ষতা এবং চরিত্র উন্নয়নে সহায়তা করে।",
    hostelFacilities: "হোস্টেল সুবিধা",
    hostelCapacity: "হোস্টেল ধারণক্ষমতা",
    hostelRooms: "রুমের ধরন",

    // 2. হোস্টেল পরিচালক
    hostelDirectorsTitle: "হোস্টেল পরিচালক ও কর্মীবৃন্দ",
    hostelDirectorsSubtitle: "নিবেদিত যত্ন ও তত্ত্বাবধান",
    hostelDirectorsIntro: "আমাদের অভিজ্ঞ হোস্টেল পরিচালক এবং ওয়ার্ডেনরা সকল আবাসিক শিক্ষার্থীদের কল্যাণ, নিরাপত্তা এবং নৈতিক উন্নয়ন নিশ্চিত করেন।",
    maleHostelDirector: "ছাত্র হোস্টেল পরিচালক",
    femaleHostelDirector: "ছাত্রী হোস্টেল পরিচালক",
    hostelWardens: "হোস্টেল ওয়ার্ডেন",
    hostelSupportStaff: "সহায়ক কর্মী",

    // 3. হোস্টেল নিয়মাবলী
    hostelRulesTitle: "হোস্টেল নিয়ম ও বিধিমালা",
    hostelRulesSubtitle: "সুসামঞ্জস্যপূর্ণ জীবনযাপনের নির্দেশিকা",
    hostelRulesIntro: "এই নিয়মগুলি শৃঙ্খলা বজায় রাখতে, নিরাপত্তা নিশ্চিত করতে এবং অধ্যয়ন ও ব্যক্তিগত বৃদ্ধির জন্য একটি অনুকূল পরিবেশ তৈরি করার জন্য ডিজাইন করা হয়েছে।",
    generalRules: "সাধারণ নিয়মাবলী",
    disciplineRules: "শৃঙ্খলা ও আচরণ",
    studyHours: "পড়াশোনার সময়",
    visitingRules: "দর্শনার্থী নিয়মাবলী",

    // 4. হোস্টেল চার্জ
    hostelChargesTitle: "হোস্টেল চার্জ",
    hostelChargesSubtitle: "সাশ্রয়ী আবাসিক ফি",
    hostelChargesIntro: "আমাদের হোস্টেল ফি কাঠামো মানসম্পন্ন বাসস্থান এবং সেবা প্রদানের পাশাপাশি সাশ্রয়ী হওয়ার জন্য ডিজাইন করা হয়েছে।",
    admissionCharge: "ভর্তি চার্জ",
    monthlyCharge: "মাসিক চার্জ",
    securityDeposit: "নিরাপত্তা জামানত",
    mealCharges: "খাবার চার্জ",
    utilityCharges: "ইউটিলিটি চার্জ",

    // 5. হোস্টেল নীতিমালা
    hostelPoliciesTitle: "হোস্টেল নীতিমালা",
    hostelPoliciesSubtitle: "গুরুত্বপূর্ণ নীতি নির্দেশিকা",
    hostelPoliciesIntro: "একটি মসৃণ আবাসিক অভিজ্ঞতা নিশ্চিত করতে অনুগ্রহ করে আমাদের হোস্টেল নীতিগুলির সাথে পরিচিত হন।",
    admissionPolicy: "ভর্তি নীতি",
    refundPolicy: "ফেরত নীতি",
    disciplinaryPolicy: "শাস্তিমূলক নীতি",
    emergencyPolicy: "জরুরী নীতি",

    // 6. দৈনিক সময়সূচী
    dailyScheduleTitle: "দৈনিক সময়সূচী",
    dailyScheduleSubtitle: "সাফল্যের জন্য কাঠামোবদ্ধ রুটিন",
    dailyScheduleIntro: "আমাদের দৈনিক সময়সূচী সামগ্রিক উন্নয়ন নিশ্চিত করতে একাডেমিক, উপাসনা, শারীরিক কার্যকলাপ এবং বিশ্রামের মধ্যে ভারসাম্য রাখে।",
    morningRoutine: "সকালের রুটিন",
    academicTime: "একাডেমিক সময়",
    eveningActivities: "সন্ধ্যার কার্যক্রম",
    nightRoutine: "রাতের রুটিন",
  },

  ar: {
    /** HEADER & BRAND **/
    instituteName: "مدرسة بنغلاديش للعلوم والتكنولوجيا",
    tagline: "التميز في التعليم الإسلامي والعلوم الحديثة",

    /** NAVBAR MAIN **/
    home: "الرئيسية",
    about: "التعريف",
    academics: "الأكاديميات",
    admission: "القبول",
    residential: "السكن",
    publication: "النشر",
    library: "المكتبة",
    branches: "الفروع",
    media: "الإعلام",
    contact: "اتصل بنا",
    login: "تسجيل الدخول",

    /** SUBMENU — ABOUT **/
    about_overview: "نظرة عامة على المؤسسة",
    about_principal: "رسالة المدير والسيرة الذاتية",
    about_features: "الميزات",
    about_establishmentPlan: "خطة التأسيس",
    about_mission: "الأهداف والرسالة",
    about_governingBody: "مجلس الإدارة",
    about_complex: "المجمع",
    about_teachers: "معلومات المعلمين",
    about_officers: "الضباط والموظفون",

    /** SUBMENU — ACADEMICS **/
    ac_classTeachers: "قائمة معلمي الصفوف",
    ac_levels: "المستويات التعليمية",
    ac_curriculum: "المنهج الدراسي",
    ac_cocurriculum: "الأنشطة المساندة",
    ac_functions: "البرامج والفعاليات",
    ac_results: "النتائج",
    ac_examMethod: "نظام الامتحانات",
    ac_holidayList: "قائمة الإجازات",
    ac_examRoutine: "جدول الامتحانات",
    ac_classRoutine: "جدول الحصص",

    /** SUBMENU — ADMISSION **/
    admission_time: "مواعيد القبول",
    admission_test: "اختبار القبول",
    admission_procedure: "إجراءات القبول",
    admission_fees: "الرسوم حسب الصف",
    admission_terms: "شروط القبول",

    /** SUBMENU — RESIDENTIAL **/
    res_hostelIntro: "مقدمة السكن",
    res_directors: "السكن الداخلي والمديرون",
    res_rules: "قوانين السكن",
    res_charges: "رسوم السكن",
    res_policies: "سياسات السكن",
    res_dailySchedule: "الجدول اليومي للسكن",

    /** SUBMENU — PUBLICATION **/
    pub_newBikash: "مجلة التطوير الشهرية",
    pub_eventSchedule: "جدول الفعاليات",
    pub_studyTour: "كتيب رحلة الدراسة",
    pub_yearlyActivity: "الأنشطة السنوية",
    pub_academicCalendar: "التقويم الأكاديمي",
    pub_sautunNajat: "مجلة سوتون نجات الفصلية",
    pub_wallMagazine: "مجلة الحائط",
    pub_others: "أخرى",

    /** SUBMENU — LIBRARY **/
    lib_intro: "مقدمة المكتبة",
    lib_catalog: "الفهرس",
    lib_policy: "السياسات",

    /** SUBMENU — BRANCHES **/
    br_takhssusi: "فرع التخصص",
    br_women: "فرع النساء",
    br_hifz: "قسم التحفيظ",
    br_orphanage: "اليتيم خانة",
    br_kitab: "قسم الكتب",

    /** SUBMENU — MEDIA **/
    media_photos: "معرض الصور",
    media_videos: "معرض الفيديو",

    /** SUBMENU — LOGIN **/
    login_student: "الطالب / ولي الأمر",
    login_teacher: "المعلم",
    login_software: "تسجيل دخول النظام",
    login_admin: "مدير الموقع",

    /* HERO SECTION */

    heroSlide1Title: "مرحبًا بكم في مؤسستنا",
    heroSlide1Subtitle: "نبني قادة المستقبل بالعلم والمعرفة",

    heroSlide2Title: "التميز في التعليم",
    heroSlide2Subtitle: "دمج القيم الإسلامية مع العلوم الحديثة",

    heroSlide3Title: "انضم إلى مجتمعنا",
    heroSlide3Subtitle: "التسجيل مفتوح للعام الدراسي الجديد",

    learnMore: "اعرف المزيد",
    applyNow: "سجل الآن",

    /** PAGES **/
    principal: "المدير",
    principalMessage: "رسالة من المدير",
    principalText:
      "مرحبًا بكم في مدرسة بنغلاديش للعلوم والتكنولوجيا. نحن ملتزمون بتقديم تعليم عالي الجودة يجمع بين القيم الإسلامية والمعرفة العلمية الحديثة. نسعى إلى إعداد طلاب متكاملين للنجاح الروحي والدنيوي.",

    latestNotices: "أحدث الإشعارات",
    quickLinks: "روابط سريعة",
    aboutUs: "معلومات عنا",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",

    /** FEATURES SECTION **/
    featuresAcademicTitle: "التميز الأكاديمي",
    featuresAcademicText:
      "يجمع منهجنا بين الدراسات الإسلامية التقليدية والتعليم العلمي الحديث، مما يُعدّ الطلاب للنجاح الروحي والدنيوي.",

    featuresFacilitiesTitle: "مرافق حديثة",
    featuresFacilitiesText:
      "توفر الفصول الرقمية والمختبرات الحديثة والمكتبة الواسعة دعمًا أكاديميًا يعزز تعلم الطلاب.",

    featuresHolisticTitle: "التنمية الشاملة",
    featuresHolisticText:
      "نطوّر الطلاب من خلال تدريب القيادة والأخلاق والذكاء العاطفي وأنشطة بناء الشخصية.",

    featuresCoCurricularTitle: "الأنشطة اللاصفية",
    featuresCoCurricularText:
      "يشارك الطلاب في الرياضة والمناظرات والروبوتات ومسابقة القرآن والفنون الإبداعية لاكتساب مهارات حياتية عملية.",

    featuresTeachersTitle: "معلمون مؤهلون وودودون",
    featuresTeachersText:
      "يوفر معلمونا ذوو الخبرة التوجيه الشخصي باستخدام أساليب تعليمية حديثة وفعّالة.",

    featuresSafetyTitle: "حرم آمن وداعم",
    featuresSafetyText:
      "يساعد الحرم الآمن والانضباط الإيجابي والدعم العاطفي الطلاب على التعلم والنمو بثقة.",


    /** FOOTER **/
    address: "العنوان",
    phone: "هاتف",
    email: "البريد الإلكتروني",

    /** =============================================
     *  ABOUT SECTION PAGES — محتوى تفصيلي
     * ============================================= */

    // 1. نظرة عامة على المؤسسة
    overviewTitle: "نظرة عامة على المؤسسة",
    overviewSubtitle: "لمحة عن مؤسستنا المرموقة",
    overviewIntro: "مدرسة بنغلاديش للعلوم والتكنولوجيا هي مؤسسة تعليمية رائدة تدمج بسلاسة التعليم الإسلامي التقليدي مع المعرفة العلمية الحديثة.",
    overviewHistory: "التاريخ والخلفية",
    overviewHistoryText: "تأسست المدرسة برؤية إنشاء بيئة تعليمية متوازنة، وقد خدمت مؤسستنا المجتمع لعقود. نؤمن بتنشئة طلاب متمكنين في كل من الموضوعات الدينية والمعاصرة.",
    overviewVision: "رؤيتنا",
    overviewVisionText: "أن نصبح مؤسسة رائدة تنتج خريجين يتفوقون في كل من العلوم الإسلامية والعلوم الحديثة، ويساهمون بشكل إيجابي في المجتمع.",
    overviewAchievements: "الإنجازات الرئيسية",
    overviewStats: "إحصائياتنا",

    // 2. رسالة المدير
    principalPageTitle: "رسالة المدير والسيرة الذاتية",
    principalPageSubtitle: "كلمات التوجيه من قائدنا",
    principalGreeting: "السلام عليكم ومرحباً بكم",
    principalMessageFull: "يشرفني أن أرحب بكم في مدرسة بنغلاديش للعلوم والتكنولوجيا. تقف مؤسستنا كمنارة للتعليم المتكامل، حيث ينير نور المعرفة الإسلامية طريق الاكتشاف العلمي الحديث. نحن ملتزمون بتطوير أفراد متميزين يمتلكون العمق الروحي والبراعة الفكرية.",
    principalBioTitle: "السيرة الذاتية",
    principalEducation: "الخلفية التعليمية",
    principalExperience: "الخبرة المهنية",
    principalAchievements: "الإنجازات البارزة",

    // 3. الميزات
    featuresPageTitle: "الميزات المتميزة",
    featuresPageSubtitle: "ما يجعلنا فريدين",
    featuresIntegrated: "منهج متكامل",
    featuresIntegratedText: "يجمع منهجنا الفريد بين دراسات القرآن والحديث والفقه مع الرياضيات والعلوم والتكنولوجيا، مما يُعد الطلاب للنجاح في كلا العالمين.",
    featuresQualified: "هيئة تدريس مؤهلة للغاية",
    featuresQualifiedText: "يحمل معلمونا درجات متقدمة في كل من الدراسات الإسلامية والعلوم الحديثة، مما يضمن التوجيه المتخصص في جميع المواد.",
    featuresInfrastructure: "بنية تحتية حديثة",
    featuresInfrastructureText: "توفر الفصول الدراسية الحديثة والمختبرات المجهزة جيداً والمكتبة الشاملة بيئة تعليمية مثالية.",
    featuresValues: "بناء الشخصية",
    featuresValuesText: "نؤكد على التعليم الأخلاقي والقيم الأخلاقية وتطوير الشخصية إلى جانب التميز الأكاديمي.",

    // 4. خطة التأسيس
    establishmentTitle: "خطة التأسيس",
    establishmentSubtitle: "أساس التميز",
    establishmentVision: "رؤية التأسيس",
    establishmentVisionText: "تأسست مؤسستنا بهدف نبيل هو إنشاء بيئة تعليمية تتكامل فيها القيم الإسلامية والمعرفة الحديثة.",
    establishmentPhases: "مراحل التطوير",
    establishmentPhase1: "المرحلة 1: التأسيس (السنوات الأولى)",
    establishmentPhase1Text: "إنشاء البنية التحتية الأساسية وتوظيف المعلمين المؤهلين.",
    establishmentPhase2: "المرحلة 2: التوسع",
    establishmentPhase2Text: "إضافة مرافق متقدمة ومختبرات وتوسيع المنهج.",
    establishmentPhase3: "المرحلة 3: التميز",
    establishmentPhase3Text: "تحقيق الاعتراف كمؤسسة رائدة والتحسين المستمر.",
    establishmentFuture: "الخطط المستقبلية",
    establishmentFutureText: "نواصل التطور مع خطط لمنصات التعلم الرقمي ومراكز البحث والتعاون الدولي.",

    // 5. الرسالة والأهداف
    missionTitle: "الرسالة والأهداف",
    missionSubtitle: "غرضنا وأهدافنا",
    missionStatement: "بيان الرسالة",
    missionStatementText: "تقديم تعليم عالي الجودة يغذي التطور الفكري والروحي والأخلاقي للطلاب، ويعدهم ليكونوا مواطنين مسؤولين وقادة.",
    objectivesTitle: "الأهداف الأساسية",
    objective1: "التميز الأكاديمي",
    objective1Text: "تقديم تعليم متميز في كل من العلوم الإسلامية والحديثة.",
    objective2: "تطوير الشخصية",
    objective2Text: "تعزيز القيم الأخلاقية القوية والأخلاق والمبادئ الإسلامية.",
    objective3: "النمو الشامل",
    objective3Text: "تعزيز التطور الجسدي والعاطفي والاجتماعي.",
    objective4: "خدمة المجتمع",
    objective4Text: "تشجيع الطلاب على المساهمة بشكل إيجابي في المجتمع.",
    objective5: "الابتكار والبحث",
    objective5Text: "تعزيز التفكير النقدي والإبداع وثقافة البحث.",

    // 6. مجلس الإدارة
    governingBodyTitle: "مجلس الإدارة",
    governingBodySubtitle: "القيادة والإدارة",
    governingBodyIntro: "تُدار مؤسستنا من قبل مجلس إدارة مكرس يضم معلمين ذوي خبرة وقادة مجتمع وخبراء متخصصين.",
    chairperson: "الرئيس",
    viceChairperson: "نائب الرئيس",
    members: "الأعضاء",
    secretary: "السكرتير",
    treasurer: "أمين الصندوق",
    governingBodyRole: "الأدوار والمسؤوليات",
    governingBodyRoleText: "يشرف مجلس الإدارة على التخطيط الاستراتيجي وصنع السياسات والإدارة المالية ويضمن أن تحافظ المؤسسة على معايير تعليمية عالية.",

    // 7. مجمع الحرم الجامعي
    complexTitle: "مجمع الحرم الجامعي",
    complexSubtitle: "مرافقنا ذات المستوى العالمي",
    complexOverview: "نظرة عامة على الحرم الجامعي",
    complexOverviewText: "تم تصميم حرمنا الجامعي الواسع لتوفير بيئة تعليمية مواتية مع مرافق حديثة ومساحات خضراء.",
    academicBlock: "المبنى الأكاديمي",
    academicBlockText: "فصول دراسية جيدة التهوية مجهزة بوسائل تعليمية حديثة وتكنولوجيا.",
    scienceLabs: "المختبرات العلمية",
    scienceLabsText: "مختبرات مجهزة بالكامل للفيزياء والكيمياء والأحياء والحاسوب.",
    libraryFacility: "مرفق المكتبة",
    libraryFacilityText: "مكتبة شاملة تضم آلاف الكتب والمجلات والموارد الرقمية.",
    mosque: "المسجد",
    mosqueText: "مسجد جميل للصلاة اليومية والتعلم الإسلامي.",
    hostelFacilities: "مرافق النزل",
    hostelFacilitiesText: "مرافق سكنية مريحة للطلاب من خارج المدينة.",
    sportsGround: "الملعب الرياضي",
    sportsGroundText: "ملاعب واسعة لكرة القدم والكريكيت والرياضات الأخرى.",
    cafeteria: "الكافتيريا",
    cafeteriaText: "كافتيريا صحية تقدم وجبات مغذية.",

    // 8. معلومات المعلمين
    teachersTitle: "معلومات المعلمين",
    teachersSubtitle: "تعرف على هيئة التدريس المتفانية",
    teachersIntro: "تضم هيئة التدريس لدينا معلمين مؤهلين تأهيلاً عالياً وذوي خبرة مكرسين لنجاح الطلاب.",
    islamicStudies: "قسم الدراسات الإسلامية",
    modernSciences: "قسم العلوم الحديثة",
    languageDept: "قسم اللغة",
    mathematicsDept: "قسم الرياضيات",
    teacherQualifications: "المؤهلات",
    teacherExperience: "الخبرة",
    teacherSpecialization: "التخصص",

    // 9. الضباط والموظفون
    officersTitle: "الضباط والموظفون",
    officersSubtitle: "فريق الدعم لدينا",
    officersIntro: "يضمن موظفونا الإداريون والداعمون المتفانون عمليات سلسة وبيئة تعليمية مواتية.",
    administrativeStaff: "الموظفون الإداريون",
    supportStaff: "موظفو الدعم",
    technicalStaff: "الموظفون التقنيون",
    maintenanceStaff: "موظفو الصيانة",
    officeSecretary: "سكرتير المكتب",
    accountant: "المحاسب",
    librarian: "أمين المكتبة",
    labAssistants: "مساعدو المختبر",

    /** =============================================
     *  ACADEMICS SECTION PAGES (عربي)
     * ============================================= */

    // 1. معلمو الصف
    classTeachersTitle: "معلمو الصف",
    classTeachersSubtitle: "تعرف على معلمينا المتفانين",
    classTeachersIntro: "يلتزم معلمو صفوفنا بتوفير الاهتمام والتوجيه الشخصي لكل طالب، مما يضمن التميز الأكاديمي وتنمية الشخصية.",

    // 2. مستويات التعليم
    levelsTitle: "مستويات التعليم",
    levelsSubtitle: "مراحل التعلم التقدمية",
    levelsIntro: "نظامنا التعليمي الشامل منظم عبر مستويات متعددة، من الدراسات الابتدائية إلى المتقدمة.",
    levelPrimary: "المستوى الابتدائي (الصف 1-5)",
    levelPrimaryText: "الأساس في الدراسات الإسلامية والأكاديمية الأساسية",
    levelSecondary: "المستوى الثانوي (الصف 6-10)",
    levelSecondaryText: "المعرفة الإسلامية المتقدمة مع المواد الحديثة",
    levelHigher: "الثانوية العليا (الصف 11-12)",
    levelHigherText: "التخصص في العلوم الإسلامية والتعليم المعاصر",

    // 3. المنهج الدراسي
    curriculumTitle: "المنهج الدراسي",
    curriculumSubtitle: "إطار التعلم المتكامل",
    curriculumIntro: "منهجنا الدراسي يمزج بسلاسة بين التعليم الإسلامي التقليدي والمواد الأكاديمية الحديثة.",
    curriculumIslamic: "الدراسات الإسلامية",
    curriculumIslamicText: "القرآن، الحديث، الفقه، اللغة العربية، والتاريخ الإسلامي",
    curriculumModern: "المواد الحديثة",
    curriculumModernText: "الرياضيات، العلوم، الإنجليزية، البنغالية، الدراسات الاجتماعية، وعلوم الحاسوب",

    // 4. الأنشطة المشتركة
    coCurriculumTitle: "الأنشطة اللامنهجية",
    coCurriculumSubtitle: "خارج الفصل الدراسي",
    coCurriculumIntro: "نؤمن بالتطوير الشامل من خلا ل برامج متنوعة خارج المنهج.",
    coCurriculumSports: "الرياضة والألعاب",
    coCurriculumArts: "الفنون والحرف الإسلامية",
    coCurriculumDebate: "المناظرات والمسابقات",
    coCurriculumCultural: "البرامج الثقافية",

    // 5. الفعاليات والأحداث
    functionsTitle: "الفعاليات والأحداث",
    functionsSubtitle: "احتفالات مجتمعنا",
    functionsIntro: "طوال العام، ننظم العديد من البرامج التعليمية والثقافية.",
    functionsAnnual: "اليوم السنوي",
    functionsSports: "يوم الرياضة",
    functionsIslamic: "البرامج الإسلامية",
    functionsAcademic: "الفعاليات الأكاديمية",

    // 6. النتائج
    resultsTitle: "النتائج الأكاديمية",
    resultsSubtitle: "التميز في الأداء",
    resultsIntro: "يحقق طلابنا باستمرار نتائج متميزة في امتحانات المجلس والتقييمات الداخلية.",

    // 7. طريقة الامتحان
    examMethodTitle: "طريقة الامتحان",
    examMethodSubtitle: "التقييم والتقويم",
    examMethodIntro: "نظام الامتحانات لدينا مصمم لتقييم تعلم الطلاب وتقدمهم بشكل شامل.",
    examTypes: "أنواع الامتحانات",
    examInternal: "التقييمات الداخلية",
    examTerminal: "الامتحانات النهائية",
    examBoard: "امتحانات المجلس",

    // 8. قائمة العطل
    holidayListTitle: "قائمة العطل",
    holidayListSubtitle: "استراحات التقويم الأكاديمي",
    holidayListIntro: "العطل المهمة وفترات الإجازات طوال العام الدراسي.",

    // 9. جدول الامتحانات
    examRoutineTitle: "جدول الامتحانات",
    examRoutineSubtitle: "تواريخ التقييم المجدولة",
    examRoutineIntro: "جدول مفصل للامتحانات والتقييمات القادمة.",

    // 10. جدول الصف
    classRoutineTitle: "جدول الصف",
    classRoutineSubtitle: "جدول الصف اليومي",
    classRoutineIntro: "جدول يومي منظم لجميع الصفوف والمواد.",

    /** =============================================
     *  ADMISSION SECTION PAGES (عربي)
     * ============================================= */

    // 1. وقت القبول
    admissionTimeTitle: "وقت القبول والجدول",
    admissionTimeSubtitle: "متى تتقدم",
    admissionTimeIntro: "تتم عملية القبول لدينا سنويًا مع جداول زمنية محددة لكل مستوى أكاديمي. خطط مسبقًا لضمان عملية تقديم سلسة.",
    admissionSession: "الجلسة الأكاديمية",
    admissionPeriod: "فترة القبول",
    admissionDeadline: "الموعد النهائي للتطبيق",

    // 2. اختبار القبول
    admissionTestTitle: "اختبار القبول",
    admissionTestSubtitle: "التقييم والتقويم",
    admissionTestIntro: "يجب على جميع الطلاب المحتملين اجتياز اختبار القبول لإثبات استعدادهم لمنهجنا المتكامل.",
    testSubjects: "مواد الاختبار",
    testFormat: "شكل الاختبار",
    testDuration: "مدة الاختبار",
    testPreparation: "كيفية التحضير",

    // 3. إجراءات القبول
    admissionProcedureTitle: "إجراءات القبول",
    admissionProcedureSubtitle: "دليل خطوة بخطوة",
    admissionProcedureIntro: "اتبع هذه الخطوات البسيطة لإكمال طلب القبول الخاص بك بنجاح.",
    procedureStep1: "جمع استمارة التقديم",
    procedureStep2: "تقديم المستندات المطلوبة",
    procedureStep3: "دفع رسوم التقديم",
    procedureStep4: "الحضور لاختبار القبول",
    procedureStep5: "نشر قائمة الاستحقاق",
    procedureStep6: "القبول النهائي ودفع الرسوم",

    // 4. رسوم القبول
    admissionFeesTitle: "رسوم القبول",
    admissionFeesSubtitle: "هيكل الرسوم والدفع",
    admissionFeesIntro: "تم تصميم هيكل الرسوم لدينا ليكون ميسور التكلفة مع الحفاظ على معايير التعليم عالية الجودة.",
    applicationFee: "رسوم التقديم",
    admissionFee: "رسوم القبول",
    monthlyTuition: "الرسوم الشهرية",
    annualFees: "الرسوم السنوية",
    paymentMethods: "طرق الدفع",

    // 5. شروط القبول
    admissionTermsTitle: "الشروط والأحكام",
    admissionTermsSubtitle: "إرشادات مهمة",
    admissionTermsIntro: "يرجى قراءة وفهم هذه الشروط والأحكام قبل التقدم للقبول.",
    eligibilityCriteria: "معايير الأهلية",
    requiredDocuments: "المستندات المطلوبة",
    admissionRules: "قواعد القبول",
    withdrawalPolicy: "سياسة الانسحاب",

    /** =============================================
     *  RESIDENTIAL SECTION PAGES (عربي)
     * ============================================= */

    // 1. مقدمة السكن
    hostelIntroTitle: "مقدمة السكن",
    hostelIntroSubtitle: "منزلك بعيدًا عن المنزل",
    hostelIntroText: "توفر مرافقنا السكنية بيئة معيشية آمنة ومريحة وداعمة للطلاب، مما يعزز التميز الأكاديمي وتنمية الشخصية.",
    hostelFacilities: "مرافق السكن",
    hostelCapacity: "سعة السكن",
    hostelRooms: "أنواع الغرف",

    // 2. مديرو السكن
    hostelDirectorsTitle: "مديرو السكن والموظفون",
    hostelDirectorsSubtitle: "رعاية وإشراف متفانية",
    hostelDirectorsIntro: "يضمن مديرو ومشرفو السكن ذوو الخبرة لدينا رفاهية وأمان والتطور الأخلاقي لجميع الطلاب المقيمين.",
    maleHostelDirector: "مدير سكن الذكور",
    femaleHostelDirector: "مديرة سكن الإناث",
    hostelWardens: "مشرفو السكن",
    hostelSupportStaff: "موظفو الدعم",

    // 3. قواعد السكن
    hostelRulesTitle: "قواعد وأنظمة السكن",
    hostelRulesSubtitle: "إرشادات للعيش المتناغم",
    hostelRulesIntro: "تم تصميم هذه القواعد للحفاظ على الانضباط وضمان السلامة وخلق بيئة مواتية للدراسة والنمو الشخصي.",
    generalRules: "القواعد العامة",
    disciplineRules: "الانضباط والسلوك",
    studyHours: "ساعات الدراسة",
    visitingRules: "قواعد الزيارة",

    // 4. رسوم السكن
    hostelChargesTitle: "رسوم السكن",
    hostelChargesSubtitle: "رسوم سكنية ميسورة",
    hostelChargesIntro: "تم تصميم هيكل رسوم السكن لدينا ليكون ميسور التكلفة مع توفير إقامة وخدمات عالية الجودة.",
    admissionCharge: "رسوم القبول",
    monthlyCharge: "الرسوم الشهرية",
    securityDeposit: "التأمين",
    mealCharges: "رسوم الوجبات",
    utilityCharges: "رسوم المرافق",

    // 5. سياسات السكن
    hostelPoliciesTitle: "سياسات السكن",
    hostelPoliciesSubtitle: "إرشادات السياسات المهمة",
    hostelPoliciesIntro: "يرجى التعرف على سياسات السكن لدينا لضمان تجربة سكنية سلسة.",
    admissionPolicy: "سياسة القبول",
    refundPolicy: "سياسة الاسترداد",
    disciplinaryPolicy: "السياسة التأديبية",
    emergencyPolicy: "سياسة الطوارئ",

    // 6. الجدول اليومي
    dailyScheduleTitle: "الجدول اليومي",
    dailyScheduleSubtitle: "روتين منظم للنجاح",
    dailyScheduleIntro: "جدولنا اليومي يوازن بين الأكاديميات والعبادة والأنشطة البدنية والراحة لضمان التنمية الشاملة.",
    morningRoutine: "الروتين الصباحي",
    academicTime: "الوقت الأكاديمي",
    eveningActivities: "الأنشطة المسائية",
    nightRoutine: "الروتين الليلي",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
