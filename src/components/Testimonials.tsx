import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Conrad is fantastic to work with and have as a virtual assistant. He handled appointment setting for me and drastically increased my weekly appointments. He is coachable when I had script suggestions, diligent to get his work done efficiently, is experienced and smart enough to give feedback on leads and other lead generation strategies. He is an asset to any business for his experience and for how coachable he is.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Jonathan Awoloi",
    role: "Commercial Account Executive",
  },
  {
    text: "Working with Conrad and the CAS Group team has been a game-changer for my business. Their professionalism and dedication to getting results is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    name: "David Martinez",
    role: "Life Insurance Broker",
  },
  {
    text: "The CAS Group VA team transformed our appointment setting process. We went from struggling to fill our calendar to having consistent, qualified appointments every week.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Sarah Johnson",
    role: "Insurance Agent",
  },
  {
    text: "I was skeptical about outsourcing appointment setting, but CAS Group exceeded all expectations. Their attention to detail and commitment to our success is remarkable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Jennifer Williams",
    role: "Senior Insurance Advisor",
  },
  {
    text: "The best investment I've made in my business. CAS Group's VAs are professional, reliable, and truly understand the insurance industry.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Robert Thompson",
    role: "Agency Owner",
  },
  {
    text: "Conrad and his team have been instrumental in growing our agency. Their appointment setting skills are top-notch and they always deliver quality leads.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    name: "Amanda Chen",
    role: "Insurance Specialist",
  },
  {
    text: "CAS Group's service is exceptional. They handle our lead follow-ups professionally and ensure our clients show up to appointments. Highly recommend!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    name: "Michael Brown",
    role: "Mortgage Protection Advisor",
  },
  {
    text: "The ROI from working with CAS Group has been incredible. My calendar is full, my closing rate has improved, and I can focus on what I do best - closing deals.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    name: "Lisa Anderson",
    role: "Life Insurance Producer",
  },
  {
    text: "Working with the CAS Group team feels like having an in-house VA at a fraction of the cost. Their communication is excellent and they truly care about our success.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    name: "James Wilson",
    role: "Independent Agent",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-white my-20 relative">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border-2 border-brand-black bg-brand-sage text-white py-2 px-6 rounded-lg font-bold shadow-md">
              Testimonials
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
