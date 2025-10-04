import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2, AlertCircle, Clock, DollarSign, Users, Award, FileText } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  collection: z.string().min(1, "Please select a collection"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  budget: z.string().min(1, "Please select a budget range"),
  requirements: z.string().max(500, "Requirements must be less than 500 characters").optional(),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp"]),
});

type FormData = z.infer<typeof formSchema>;

const RequestProposal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactMethod: "Email",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const requestId = crypto.randomUUID();
    const payload = {
      requestId,
      timestamp: new Date().toISOString(),
      customer: {
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        phone: data.phone || null,
      },
      proposal: {
        collection: data.collection,
        quantity: data.quantity,
        budget: data.budget,
        requirements: data.requirements || "",
        contactMethod: data.contactMethod,
      },
      metadata: {
        source: "landing-page",
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
      },
    };

    try {
      // TODO: Replace with actual webhook URL
      const webhookUrl = "https://webhook.site/your-unique-url";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitSuccess(true);
      toast.success("Proposal request sent! Check your email within 24 hours.");
      reset();
    } catch (error) {
      toast.error("Failed to send request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: FileText, text: "Personalized Proposals" },
    { icon: Clock, text: "Response within 24h" },
    { icon: DollarSign, text: "Competitive Pricing" },
    { icon: Users, text: "Expert Consultation" },
    { icon: Award, text: "No Obligation" },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Request Your Custom Proposal
          </h2>
          <p className="luxury-text text-muted-foreground">
            Get a personalized quote within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form - 60% */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-elegant">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Smith"
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@company.com"
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="company" className="text-foreground">
                  Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Your Company Ltd."
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.company && (
                  <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+351 912 345 678"
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Perfume Collection */}
              <div>
                <Label htmlFor="collection" className="text-foreground">
                  Perfume Collection <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("collection", value)} disabled={isSubmitting}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a collection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Arabian Peninsula">Arabian Peninsula</SelectItem>
                    <SelectItem value="Switzerland">Switzerland</SelectItem>
                    <SelectItem value="Portugal">Portugal</SelectItem>
                    <SelectItem value="France">France</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Japan">Japan</SelectItem>
                    <SelectItem value="Mixed Selection">Mixed Selection</SelectItem>
                  </SelectContent>
                </Select>
                {errors.collection && (
                  <p className="text-destructive text-sm mt-1">{errors.collection.message}</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <Label htmlFor="quantity" className="text-foreground">
                  Quantity <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  {...register("quantity", { valueAsNumber: true })}
                  placeholder="50"
                  className="mt-2"
                  disabled={isSubmitting}
                />
                {errors.quantity && (
                  <p className="text-destructive text-sm mt-1">{errors.quantity.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget" className="text-foreground">
                  Estimated Budget <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("budget", value)} disabled={isSubmitting}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Under €500">Under €500</SelectItem>
                    <SelectItem value="€500 - €1,000">€500 - €1,000</SelectItem>
                    <SelectItem value="€1,000 - €5,000">€1,000 - €5,000</SelectItem>
                    <SelectItem value="€5,000 - €10,000">€5,000 - €10,000</SelectItem>
                    <SelectItem value="Over €10,000">Over €10,000</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-destructive text-sm mt-1">{errors.budget.message}</p>
                )}
              </div>

              {/* Additional Requirements */}
              <div>
                <Label htmlFor="requirements" className="text-foreground">
                  Additional Requirements
                </Label>
                <Textarea
                  id="requirements"
                  {...register("requirements")}
                  placeholder="Tell us about specific needs, customization, packaging preferences..."
                  maxLength={500}
                  className="mt-2 min-h-[100px]"
                  disabled={isSubmitting}
                />
                {errors.requirements && (
                  <p className="text-destructive text-sm mt-1">{errors.requirements.message}</p>
                )}
              </div>

              {/* Contact Method */}
              <div>
                <Label className="text-foreground mb-3 block">
                  Preferred Contact Method <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  defaultValue="Email"
                  onValueChange={(value) => setValue("contactMethod", value as "Email" | "Phone" | "WhatsApp")}
                  disabled={isSubmitting}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Email" id="email-contact" />
                    <Label htmlFor="email-contact" className="cursor-pointer">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Phone" id="phone-contact" />
                    <Label htmlFor="phone-contact" className="cursor-pointer">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="WhatsApp" id="whatsapp-contact" />
                    <Label htmlFor="whatsapp-contact" className="cursor-pointer">WhatsApp</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full btn-luxury"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Request Proposal"
                )}
              </Button>

              {/* Success/Error Messages */}
              {submitSuccess && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5" />
                  <p>Proposal request sent! Check your email within 24 hours.</p>
                </div>
              )}
            </form>
          </div>

          {/* Benefits - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-elegant h-full">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="luxury-text text-muted-foreground text-sm">
                  Our team of fragrance experts will work with you to create the perfect proposal 
                  tailored to your needs. We pride ourselves on quick response times and competitive 
                  pricing without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestProposal;
