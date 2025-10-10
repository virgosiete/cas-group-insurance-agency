import { motion } from "motion/react";
import Section from "./Section";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Conrad Ferguson",
    role: "Founder",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6loEKWeXrgeBapu6HzZIG278Xjd9JqcNSQYKE4",
    bio: "Conrad Ferguson has been consistently delivering outstanding results for insurance agents across the United States. Based in Manila, Philippines, he leads and oversees CAS Group's operations in the country. His excellence in the industry is unmatched — from effectively managing teams to mastering appointment setting. With his experience and dedication, Conrad continues to empower agents and inspire growth within the insurance industry.",
  },
  {
    name: "Wes Allen",
    role: "Co-Founder",
    image: "https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6l3QT1uGrZgv6WhE2iyDlb9HLnSmd8sPFCA5MI",
    bio: "Meet Wes Allen — a licensed insurance agent, passionate leader, and driving force behind CAS Group. Based in the United States, Wes serves as our compliance expert and trusted partner, dedicated to helping businesses reach new heights through our appointment-setting services. His vision and commitment have been instrumental in establishing CAS Group as a trusted name in the insurance industry.",
  },
];

export default function Team() {
  return (
    <Section id="team" className="bg-brand-veryLightGray">
      <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="border-2 border-brand-mediumGray bg-gradient-to-r from-brand-darkGray to-brand-black text-white py-2 px-6 rounded-lg font-bold shadow-md">
            Our Team
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center"
        >
          Meet Our Leadership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-5 opacity-75 text-gray-600"
        >
          The visionaries driving CAS Group's success
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-lightGray hover:shadow-xl hover:border-brand-borderGray transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${
                  member.name === "Wes Allen" ? "object-[center_20%]" : "object-center"
                }`}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-black mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-semibold text-lg mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
