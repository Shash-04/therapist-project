import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "@/components/ScrollAnimation";

const faqs = [
    {
        question: "Do you accept insurance?",
        answer: "I do not directly accept insurance, however I provide a detailed superbill that you can submit to your insurance company for possible reimbursement. Many clients receive partial or full reimbursement depending on their out-of-network benefits."
    },
    {
        question: "Are online sessions available?",
        answer: "Yes! I offer secure video sessions via a HIPAA-compliant platform. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM. Many clients find online therapy just as effective as in-person sessions."
    },
    {
        question: "What is your cancellation policy?",
        answer: "I require 24-hour notice for cancellations. Cancellations made with less than 24 hours notice may be subject to the full session fee unless due to emergency circumstances."
    },
    {
        question: "How long are therapy sessions?",
        answer: "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. I recommend weekly sessions initially, though frequency can be adjusted based on your needs and progress."
    },
    {
        question: "What should I expect in the first session?",
        answer: "The first session focuses on understanding your current concerns, mental health history, and goals for therapy. We'll discuss confidentiality, my approach to treatment, and begin developing a plan tailored to your specific needs."
    },
    {
        question: "Do you offer a free consultation?",
        answer: "Yes, I offer a complimentary 15-minute phone consultation to discuss your needs and determine if we're a good fit. This helps ensure you feel comfortable before scheduling your first full session."
    }
];

const FAQSection = () => {
    return (
        <section className="section-padding bg-[#f9f8f3]">
            <div className="container-max">
                <ScrollAnimation direction="fade" delay={200}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Common questions about therapy, sessions, and getting started
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={400}>
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white/80 rounded-lg soft-shadow border-0 px-6 py-2 hover:bg-white/90 transition-colors"
                                >
                                    <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={600}>
                    <div className="mt-16 text-center">
                        <div className="bg-white/60 p-8 rounded-xl max-w-3xl mx-auto soft-shadow hover:bg-white/70 transition-colors">
                            <h3 className="text-2xl font-serif mb-4 text-foreground">Still have questions?</h3>
                            <p className="text-muted-foreground mb-6">
                                I'm here to help you feel comfortable and informed about starting therapy.
                            </p>
                            <a
                                href="#contact"
                                className="text-primary hover:text-primary/80 font-medium underline transition-colors"
                            >
                                Get in touch for a free consultation
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default FAQSection;