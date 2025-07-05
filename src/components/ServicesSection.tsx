"use client";

import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

const services = [
    {
        title: "Anxiety & Stress Management",
        description:
            "Helping clients manage overwhelming thoughts, reduce tension, and build healthier coping strategies for daily life challenges.",
        image: "/anxiety-therapy.jpg",
        features: [
            "Cognitive-behavioral techniques",
            "Mindfulness practices",
            "Stress reduction strategies",
            "Panic attack management",
        ],
    },
    {
        title: "Relationship Counseling",
        description:
            "Supporting couples and individuals to strengthen communication, resolve conflict, and build deeper, more meaningful connections.",
        image: "/relationship-counseling.jpg",
        features: [
            "Communication skills",
            "Conflict resolution",
            "Intimacy building",
            "Trust restoration",
        ],
    },
    {
        title: "Trauma Recovery",
        description:
            "Using evidence-based techniques to gently navigate healing from past experiences and reclaim your inner peace and strength.",
        image: "/trauma-recovery.jpg",
        features: [
            "EMDR therapy",
            "Trauma-informed care",
            "Safety planning",
            "Post-traumatic growth",
        ],
    },
];

const ServicesSection = () => {
    return (
        <section className="section-padding">
            <div className="container-max">
                <ScrollAnimation direction="fade" delay={200}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                            Therapeutic Services
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Comprehensive mental health care tailored to your unique needs and goals
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollAnimation key={index} direction="up" delay={300 + index * 200}>
                            <Card className="group hover:scale-105 transition-all duration-300 soft-shadow border-0 bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-serif mb-4 text-[#7ca89e] group-hover:text-primary/80 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation direction="up" delay={800}>
                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        {/* Individual Sessions Card */}
                        <Card className="group hover:scale-105 transition-all duration-500 soft-shadow border-0  overflow-hidden">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-serif mb-2 text-[#7ca89e] ">Individual Sessions</h3>
                                    <div className="text-4xl font-bold text-foreground mb-2">$200</div>
                                    <p className="text-muted-foreground">per 50-minute session</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "One-on-one personalized therapy",
                                        "Evidence-based treatment approaches",
                                        "Anxiety, depression, and trauma focus",
                                        "In-person or virtual sessions",
                                        "Flexible scheduling options",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-primary/20">
                                    <p className="text-sm text-muted-foreground text-center">
                                        Superbill provided for insurance reimbursement
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Couples Sessions Card */}
                        <Card className="group hover:scale-105 transition-all duration-500 soft-shadow border-0 bg-gradient-to-br from-accent/30 to-accent/50 overflow-hidden">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-serif mb-2 text-[#7ca89e] ">Couples Sessions</h3>
                                    <div className="text-4xl font-bold text-foreground mb-2">$240</div>
                                    <p className="text-muted-foreground">per 60-minute session</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Relationship counseling for couples",
                                        "Communication skills development",
                                        "Conflict resolution strategies",
                                        "Trust and intimacy building",
                                        "Both partners participate together",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-primary/20">
                                    <p className="text-sm text-muted-foreground text-center">
                                        Extended sessions for deeper exploration
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default ServicesSection;
