import React from "react";

const Project = () => {
  return (
      <section id="project" className="project section bg-white py-16 container mx-auto px-6">
        <div className="container mx-auto px-4">
          <div className="projects-container">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://miro.medium.com/v2/resize:fit:1000/0*pwDqZoXvHo79MoT7.png"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">

                <a href="https://evo-32.github.io/Rock-paper-scissor-game/">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                   ROCK-PAPER-SCISSOR GAME
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://t4.ftcdn.net/jpg/04/29/88/39/360_F_429883941_N6iYMsuE70OHbQDIPKpiaavbJrzBBASO.jpg"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">

                <a href="https://evo-32.github.io/dice/">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                   DICE ROLL
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">

                <a href="https://evo-32.github.io/Emoji-face/">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    RANDOM EMOJIE 
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">

                <a href="https://evo-32.github.io/architects/">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    ARCHITECTURE PROJECT
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Project;
