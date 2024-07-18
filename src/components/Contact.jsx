import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto flex justify-between h-screen bg-cover">
      <div className="container mx-auto px-4 flex justify-between items-center w-2/3">
        <div className="w-1/2">
          <div className="max-w-lg mx-auto">
            <div className="about-text">
              <h3 className=" font-bold text-3xl mb-7">
                Let's create something amazing together
              </h3>
              <p className="text-gray-700   text-2xl">
                Start by<span className="text-[#adbc9f] font-bold"> saying hi</span>
              </p>
            </div>
          </div>
        </div>
        <form action="https://formspree.io/f/xayrjbba" method="POST" className="w-1/2">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700 font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Your name.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lname" className="block text-gray-700 font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Your last name.."
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              email
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="email..."
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              className="border border-gray-300 rounded-lg p-2 w-full h-32"
              placeholder="Write something.."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#ff6c1f] text-white px-4 py-2 rounded-lg hover:bg-pink-700"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
