import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto flex items-center justify-center h-screen bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form action="https://formspree.io/f/xayrjbba" method="POST">
            <div className="mb-4">
              <label for="fname" className="block text-gray-700 font-semibold mb-2">
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
            <div class="mb-4">
              <label for="lname" className="block text-gray-700 font-semibold mb-2">
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
                for="country"
                className="block text-gray-700 font-semibold mb-2"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                className="border border-gray-300 rounded-lg p-2 w-full"
              >
                <option value="australia">Rwanda</option>
                <option value="canada">Europe</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="subject"
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
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
