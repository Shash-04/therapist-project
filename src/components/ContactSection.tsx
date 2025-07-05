"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/ScrollAnimation"
import { Phone, Clock, MapPin } from "lucide-react"

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        consent: false,
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        if (!formData.email.includes("@")) newErrors.email = "Please enter a valid email"
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.message.trim()) newErrors.message = "Please tell us what brings you here"
        if (!formData.consent) newErrors.consent = "You must agree to be contacted"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            toast.success("Thank you for reaching out!", {
                description: "I'll get back to you within 24 hours to schedule your free consultation.",
            })

            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                preferredTime: "",
                consent: false,
            })
        }
    }

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    return (
        <section id="contact" className="section-padding">
            <div className="container-max">
                <ScrollAnimation direction="fade" delay={200}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Get Started Today</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Take the first step toward positive change. Reach out for a free consultation.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <ScrollAnimation direction="left" delay={400}>
                        <Card className="soft-shadow border-0 bg-[#f6f8f1]">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-serif mb-6 text-foreground">Send me a message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            placeholder="Your name *"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className={`${errors.name ? "border-destructive" : ""}`}
                                        />
                                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email address *"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className={`${errors.email ? "border-destructive" : ""}`}
                                        />
                                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            type="tel"
                                            placeholder="Phone number *"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            className={`${errors.phone ? "border-destructive" : ""}`}
                                        />
                                        {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            placeholder="Preferred time to reach you"
                                            value={formData.preferredTime}
                                            onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Textarea
                                            placeholder="What brings you here? Tell me a bit about what you'd like to work on... *"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            className={`min-h-32 ${errors.message ? "border-destructive" : ""}`}
                                        />
                                        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Checkbox
                                            id="consent"
                                            checked={formData.consent}
                                            onCheckedChange={(checked: boolean) => handleInputChange("consent", checked)}
                                            className={`mt-1 ${errors.consent ? "border-destructive" : ""}`}
                                        />
                                        <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                                            I agree to be contacted via phone or email to schedule a consultation.
                                            Your information will be kept confidential and secure.
                                        </label>
                                    </div>
                                    {errors.consent && <p className="text-destructive text-sm">{errors.consent}</p>}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>

                    {/* Contact Information */}
                    <ScrollAnimation direction="right" delay={600}>
                        <div className="space-y-8">
                            <Card className="soft-shadow border-0 bg-[#f9f8f3]">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-serif mb-6 text-foreground">Contact Information</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-foreground mb-1">Phone</h4>
                                                <p className="text-muted-foreground">(323) 555-0192</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-foreground mb-1">Office Location</h4>
                                                <p className="text-muted-foreground">
                                                    1287 Maplewood Drive<br />
                                                    Los Angeles, CA 90026
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-medium text-foreground mb-2">Office Hours</h4>
                                                <div className="space-y-2 text-muted-foreground">
                                                    <p><span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM</p>
                                                    <p><span className="font-medium">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="soft-shadow border-0 bg-[#f9f8f3]">
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-serif mb-4 text-foreground">Ready to begin?</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Starting therapy is a courageous step. I'm here to support you on your journey
                                        toward healing, growth, and well-being.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Email: <a href="mailto:serena@blakepsychology.com" className="text-primary hover:underline">
                                            serena@blakepsychology.com
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
