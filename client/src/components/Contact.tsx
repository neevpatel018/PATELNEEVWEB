import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Digital connection lines animation */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`connection-${index}`}
          className="absolute bg-gradient-to-r from-blue-500/10 to-cyan-500/10 h-[1px] z-0"
          style={{
            top: `${(index + 1) * 10}%`,
            left: '0',
            right: '0',
            opacity: 0.3
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            height: ['1px', '2px', '1px'],
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        />
      ))}
      
      {/* Glowing circular nodes */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute w-4 h-4 rounded-full bg-blue-500/30 z-0"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            boxShadow: [
              '0 0 0 0 rgba(59, 130, 246, 0.2)',
              '0 0 20px 10px rgba(59, 130, 246, 0.3)',
              '0 0 0 0 rgba(59, 130, 246, 0.2)'
            ]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Reach out to discuss how my expertise can help your organization.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email"
                            {...field}
                            className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can I help you?" 
                          {...field}
                          className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          {...field}
                          rows={5}
                          className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800 rounded-xl p-8 h-full border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:nexagen2105@gmail.com" className="text-blue-400 hover:text-blue-300">nexagen2105@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Phone</h4>
                    <a href="tel:+917984656184" className="text-blue-400 hover:text-blue-300">+91 7984656184</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-blue-500 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Location</h4>
                    <p className="text-gray-400">Panchmahal, Gujarat, India</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Connect on Social</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/neev-patel-640918315/" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-blue-500 hover:bg-gray-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://x.com/neevpatel_018" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-blue-500 hover:bg-gray-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="https://github.com/neevpatel018" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-blue-500 hover:bg-gray-600 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/neevpatel_018/" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-blue-500 hover:bg-gray-600 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
