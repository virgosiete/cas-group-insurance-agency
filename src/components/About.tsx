import { Check } from 'lucide-react';
import Section from './Section';

export default function About() {
  const features = [
    'Contacting Fresh Leads',
    'Booking Quality Appointments',
    'Following Up & Ensuring Clients Show Up',
  ];

  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Looking for a reliable and skilled Virtual Assistant Team to help you grow your life insurance business? You've come to the right place!
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          We're a dedicated team focused on one thing: helping you close more deals by filling your calendar with qualified appointments.
        </p>

        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src="https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lWKtnF55oCETWHXhs1xnANjY3qJ8kOG9QVfw2"
              alt="Conrad Ferguson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Led by <strong>Conrad Ferguson</strong>, who brings over 5 years of experience in the insurance industry, our team is dedicated to helping agents hit their goals every week. We make sure every call counts — from contacting fresh leads and booking quality appointments to following up and ensuring clients show up.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          At CAS Group, your success is our priority. We turn your investment into real results through excellent service, consistent communication, and attention to detail.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center space-x-3 p-6 bg-white rounded-lg border-2 border-brand-black group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-8 h-8 bg-brand-sage rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-brand-black">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
