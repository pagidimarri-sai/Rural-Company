const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Select Service",
      description: "Choose from our wide range of services and book online",
    },
    {
      number: "2",
      title: "Get Matched",
      description: "We'll match you with the right professional for your needs",
    },
    {
      number: "3",
      title: "Schedule Time",
      description: "Pick a convenient time slot that works for you",
    },
    {
      number: "4",
      title: "Get It Done",
      description: "Professional arrives on time and completes the service",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Book a service in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
