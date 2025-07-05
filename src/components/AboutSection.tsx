import ScrollAnimation from "@/components/ScrollAnimation";


const AboutSection = () => {
    return (
        <section className="section-padding  bg-[#f9f8f3]">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <ScrollAnimation direction="left" delay={200}>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                                About Dr. Serena Blake
                            </h2>
                        </ScrollAnimation>

                        <ScrollAnimation direction="left" delay={400}>
                            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p>
                                    Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
                                    with eight years of experience and over 500 client sessions. She blends evidence-based
                                    approaches like cognitive-behavioral therapy and mindfulness with compassionate,
                                    personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                                </p>

                                <p>
                                    Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
                                    Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                                    Her therapeutic approach integrates psychodynamic and humanistic principles,
                                    enriched by positive psychology, mindfulness practices, and family systems theory.
                                </p>

                                <p>
                                    Dr. Blake believes that therapy offers a dedicated space for self-care, providing
                                    the support and tools needed to improve your well-being and achieve lasting change.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation direction="up" delay={600}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/80 p-6 rounded-lg soft-shadow">
                                    <h3 className="font-serif text-xl mb-2 text-primary">Experience</h3>
                                    <p className="text-muted-foreground">8 years, 500+ sessions</p>
                                </div>

                                <div className="bg-white/80 p-6 rounded-lg soft-shadow">
                                    <h3 className="font-serif text-xl mb-2 text-primary">License</h3>
                                    <p className="text-muted-foreground">PsyD, Clinical Psychology</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <ScrollAnimation direction="right" delay={300}>
                            <div className="relative">
                                <img
                                    src="serena-blake.jpg"
                                    alt="Dr. Serena Blake, Licensed Clinical Psychologist"
                                    className="w-full max-w-md rounded-lg soft-shadow hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg"></div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;