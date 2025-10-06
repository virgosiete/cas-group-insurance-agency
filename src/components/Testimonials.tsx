import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Conrad is fantastic to work with and have as a virtual assistant. He handled appointment setting for me and drastically increased my weekly appointments. He is coachable when I had script suggestions, diligent to get his work done efficiently, is experienced and smart enough to give feedback on leads and other lead generation strategies. He is an asset to any business for his experience and for how coachable he is.",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6l8v6KfdVhJxWiaEhK2Gb6NtOCqVdSPDFpfz3y",
    name: "Jonathan Awoloi",
    role: "Commercial Account Executive",
  },
  {
    text: "If you are in the market or even considering bringing on a dialer, caller or appointment setter...whether you need it for new clients, recruits, potential customers...do yourself a solid and give a shout out to Conrad and his team! By far they have been a cut above any other company or crew out there that I have tried! I have been in the insurance space for almost 2 decades and I have to say they have impressed and continue to impress! My hats off on the professionalism, the attentiveness, and their ability to win on a constant basis for you and your team with positive intent and your best interest in mind!",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lm1oforxS9n0GkyVu2ri3eNIdcXhgoUmCL45Y",
    name: "Frank Coronel",
    role: "Life Insurance Agent at Symmetry Financial Group",
  },
  {
    text: "Conrad is an exceptional virtual assistant who excels in appointment setting, significantly boosting my weekly appointments. He is receptive to script suggestions, diligent in his work ethic, and possesses the expertise to provide valuable feedback on leads and lead generation strategies. Conrad's combination of experience and coachability makes him an invaluable asset to any business.",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lExGQerHqPsK4Vvtnpwa6O7SeMiZd9cyB0I1X",
    name: "Brian Reese",
    role: "Insurance Professional",
  },
  {
    text: "Conrad and his team made things so much easier for me by handling appointments and setting up interviews with prospective agents. I truly recommend their services.",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lDzTNnisvk3RVrOdGHctq5yPKhXeaUZQ1p6Mf",
    name: "Eric Prebula",
    role: "Symmetry Financial Group",
  },
  {
    text: "Conrad's team is amazing to work with. From texting and calling leads to helping me secure more quality appointments, they've given me more time freedom for myself and my family.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "David Wes Allen",
    role: "Symmetry Financial Group",
  },
  {
    text: "Conrad and his team are amazing to work with. They've helped my business grow by setting quality client appointments, allowing me to focus on sales, helping families, building my team, and strengthening relationships. They're truly an asset to my business!",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lbUcsPQ9HPgm2XAsTLOi3o6xpVkNJUQ0z85Sy",
    name: "Molly Fisher",
    role: "Symmetry Financial Group",
  },
  {
    text: "Excellent activity. Great job on being a powerhouse with digital leads. I'll focus more on those. Metrics look good at 50%, and the rescheduling has been handled well. Nothing else comes to mind for now.",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lNJEprMR4BP8yXGhTWY02NVn7QgEMxU3a5bkL",
    name: "Kim Bogden",
    role: "Symmetry Financial Group",
  },
];

const mobileColumn = testimonials;
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 5);
const thirdColumn = testimonials.slice(5, 7);

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
          <TestimonialsColumn testimonials={mobileColumn} duration={40} className="md:hidden" />
          <TestimonialsColumn testimonials={firstColumn} duration={30} className="hidden md:block" />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={32} />
        </div>
      </div>
    </section>
  );
}
