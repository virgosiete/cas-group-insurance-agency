import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="relative p-10 rounded-2xl border-2 border-brand-black shadow-xl max-w-xs w-full bg-white overflow-hidden group" key={i}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-sage opacity-20 transform rotate-45 translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-0 bg-brand-sage group-hover:h-full transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-gray-700 leading-relaxed">{text}</div>
                    <div className="flex items-center gap-3 mt-5">
                      <img
                        width={60}
                        height={60}
                        src={image}
                        alt={name}
                        className="h-15 w-15 rounded-lg object-cover border-2 border-brand-sage"
                      />
                      <div className="flex flex-col">
                        <div className="font-bold tracking-tight leading-5 text-brand-black">{name}</div>
                        <div className="leading-5 opacity-70 tracking-tight text-gray-600 font-medium">{role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
