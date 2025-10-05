import Button from './Button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-black transform rotate-45 translate-x-48 -translate-y-48 border-4 border-white"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-32 bg-brand-black transform -skew-x-12 -translate-x-32"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-1 bg-brand-sage transform -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-1 bg-brand-sage transform rotate-12"></div>
      </div>

      <div className="hidden md:block absolute top-20 left-0 w-2 h-64 bg-brand-black transform -skew-y-12"></div>
      <div className="hidden md:block absolute bottom-32 right-12 w-2 h-48 bg-brand-sage"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-brand-black">
          Your Reliable Virtual Assistant Team
          <br />
          <span className="text-gray-600 font-bold">For Life Insurance Agents</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          At The CAS Group VA, we specialize in appointment setting for life insurance agents and brokers across the U.S., focusing on life insurance and mortgage protection. We make sure every call counts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto text-lg"
          >
            Get Started Today
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto text-lg"
          >
            View Our Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
