import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="about-text">
              <h3 className="text-xl font-semibold mb-2">
                I'm Evodie Umuhuza, a <span >Web Developer</span>
              </h3>
              <p className="text-gray-700">
                With a strong foundation in HTML and CSS, I bring a meticulous approach to web development. Passionate about crafting visually appealing and functionally robust online experiences, my expertise extends beyond mere coding. I possess a deep understanding of design principles and user experience, allowing me to seamlessly integrate aesthetics with functionality.
              </p>
            </div>
            <div className="personal-info p-4 rounded-md">
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Birthday:</span> 12 June 2005
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Age:</span> 19
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Gender:</span> Lady
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> vodospearl@gmail.com
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Degree:</span> A1
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span> +250798976523/+250788494997
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">City:</span> Kigali
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Freelance:</span> Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
