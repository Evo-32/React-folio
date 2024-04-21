import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto flex items-center justify-center h-screen bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="about-text">
              <h3 className="text-xl font-semibold mb-4">
                I'm Evodie Umuhuza and
                <span className="text-blue-500"> Web Developer</span>
              </h3>
              <p className="text-gray-700">
                With a strong foundation in HTML and CSS, I bring a meticulous
                approach to web development. Passionate about crafting visually
                appealing and functionally robust online experiences, my
                expertise extends beyond mere coding. I possess a deep
                understanding of design principles and user experience, allowing
                me to seamlessly integrate aesthetics with functionality.
              </p>
            </div>
            <div className="personal-info">
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Birthday: <span className="font-semibold">12 June 1200</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Age: <span className="font-semibold">824</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Gender: <span className="font-semibold">Lady</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Email:
                  <span className="font-semibold">vodospearl@gmail.com</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Degree: <span className="font-semibold">A1</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Phone: <span className="font-semibold">+250798976523</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p class="text-gray-600">
                  City: <span className="font-semibold">Kigali</span>
                </p>
              </div>
              <div className="info-item mb-2">
                <p className="text-gray-600">
                  Freelance: <span className="font-semibold">Free</span>
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
