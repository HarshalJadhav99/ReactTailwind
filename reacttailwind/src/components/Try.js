import React from "react";

const Try = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 hover:text-cyan-500 mb-4 md:mb-0 cursor-pointer">
            <span className="text-xl">TailWindSite</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-cyan-600 hover:border-b-2 hover:border-cyan-500 cursor-pointer">
              Home
            </a>
            <a className="mr-5 hover:text-cyan-600 hover:border-b-2 hover:border-cyan-500 cursor-pointer">
              Service
            </a>
            <a className="mr-5 hover:text-cyan-600 hover:border-b-2 hover:border-cyan-500 cursor-pointer">
              ContacUs
            </a>
            <a className="mr-5 hover:text-cyan-600 hover:border-b-2 hover:border-cyan-500 cursor-pointer">
              Project
            </a>
          </nav>
          <button className="inline-flex items-center bg-cyan-500 text-white border py-1 px-3 focus:outline-none hover: border-cyan-500 hover:bg-transparent hover:text-cyan-500 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div>
        <div className="container mx-auto grid grid-rows-1 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="mt-10 mx-4 lg:mt-10 md:pt-10 lg:pt-14">
              <h1 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-5">
                Site build using tailwind
              </h1>
              <p className="mb-2 lg:mb-5 w-2/2 md:text-sm lg:w-2/3 lg:text-[16px] lg:leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores atque voluptatem nesciunt, facilis sed temporibus.
              </p>
              <button className="bg-[#00acee] shadow-md shadow-[#00acee]/40 hover:shadow-md  hover:transition-transform hover:transition-all hover:shadow-cyan-500  text-white w-1/2 lg:w-1/5 px-4 py-2 rounded-lg mt-2 border-0 hover:bg-transparent hover:border border-cyan-500 hover:text-cyan-500 border border-cyan-500">
                Click me
              </button>
            </div>
            <div>
              <img
                className="w-80 h-full md:h-full lg:h-full mx-auto md:w-screen lg:w-screen"
                src="https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg?size=338&ext=jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container mx-auto grid grid-rows-1 md:mt-10">
          <div className="grid grid-cols-1 gap-y-3 px-3 lg:grid-cols-3 gap-x-7 lg:mx-5 lg:mb-5 ">
            <div className="border-2 px-4 py-4 border-cyan-400/30 rounded-lg shadow-lg shadow-cyan-300/60 hover:translate-y-4">
              <h1 className="text-2xl font-bold mb-3">Web Service</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores atque voluptatem nesciunt, facilis sed temporibus. Dolor
                quae similique debitis, sequi reiciendis molestiae rerum
                accusantium velit atque sunt impedit? Consequuntur.
              </p>
              <button className="bg-cyan-500 text-fuchsia-50 py-2 px-4 rounded-md mt-4 hover:bg-transparent hover:border border-cyan-500 hover:text-cyan-500 border border-cyan-500 ">
                Show More
              </button>
            </div>
            <div className="border-2 px-4 py-4 border-cyan-400/30 shadow-lg rounded-lg shadow-cyan-300/60 hover:translate-y-4">
              <h1 className="text-2xl font-bold mb-3">Mobile Friendly App</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores atque voluptatem nesciunt, facilis sed temporibus. Dolor
                quae similique debitis, sequi reiciendis molestiae rerum
                accusantium velit atque sunt impedit? Consequuntur.
              </p>
              <button className="bg-cyan-500 text-fuchsia-50 py-2 px-4 rounded-md mt-4 border border-cyan-500 hover:bg-transparent hover:border border-cyan-500 hover:text-cyan-500">
                Show More
              </button>
            </div>
            <div className="border-2 px-4 py-4 border-cyan-400/30 shadow-lg rounded-lg shadow-cyan-300/60 hover:translate-y-4">
              <h1 className="text-2xl font-bold mb-3">Business Solution</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores atque voluptatem nesciunt, facilis sed temporibus. Dolor
                quae similique debitis, sequi reiciendis molestiae rerum
                accusantium velit atque sunt impedit? Consequuntur.
              </p>
              <button className="bg-cyan-500 text-fuchsia-50 py-2 px-4 rounded-md mt-4 hover:bg-transparent hover:border border-cyan-500 hover:text-cyan-500 border border-cyan-500 ">
                Show More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="container mx-auto grid grid-rows-1 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div>
                <img
                  className="w-80 h-full md:h-full lg:h-full mx-auto md:w-screen lg:w-screen"
                  src="https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg?size=338&ext=jpg"
                  alt=""
                />
              </div>
              <div className="mt-10 mx-4 lg:mt-10 md:pt-10 lg:pt-14">
                <h1 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-5">
                  Site build using tailwind
                </h1>
                <p className="mb-2 lg:mb-5 w-2/2 md:text-sm lg:w-2/3 lg:text-[16px] lg:leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolores atque voluptatem nesciunt, facilis sed temporibus.
                </p>
                <button className="bg-[#00acee] shadow-md shadow-[#00acee]/40 hover:shadow-md  hover:transition-transform hover:transition-all hover:shadow-cyan-500  text-white w-1/2 lg:w-1/5 px-4 py-2 rounded-lg mt-2 border-0 hover:bg-transparent hover:border border-cyan-500 hover:text-cyan-500 border border-cyan-500">
                  Click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <footer class="text-gray-600 body-font bg-slate-400/5">
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span class="text-xl">TailwindSite</span>
              </a>
              <p class="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Service</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">ContactUs</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Projects</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Location</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Service</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">ContactUs</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Projects</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Location</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Service</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">ContactUs</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Projects</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Location</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Service</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">ContactUs</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Projects</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Location</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div class="bg-slate-400/5">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
              <span class="flex sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Try;
