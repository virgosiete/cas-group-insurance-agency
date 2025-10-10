import Section from './Section';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'Share your business objectives and appointment goals with our team.',
    },
    {
      number: '02',
      title: 'VA Assignment',
      description: 'We match you with a trained appointment setter aligned with your needs.',
    },
    {
      number: '03',
      title: 'Launch & Outreach',
      description: 'Your dedicated VA begins contacting leads and scheduling appointments.',
    },
    {
      number: '04',
      title: 'Track & Scale',
      description: 'Monitor your pipeline growth and scale as your business expands.',
    },
  ];

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="mb-8">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get started in four simple steps and watch your pipeline fill with qualified opportunities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-lightGray via-brand-borderGray to-brand-lightGray -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="text-center relative group">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-b from-brand-mediumGray to-brand-black group-hover:h-12 transition-all duration-300"></div>
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-brand-black to-brand-darkGray border-4 border-brand-lightGray text-white rounded-lg mb-6 relative z-10 shadow-xl group-hover:bg-gradient-to-br group-hover:from-brand-darkGray group-hover:to-brand-mediumGray transition-all duration-300 group-hover:scale-110">
                <span className="text-4xl font-extrabold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
