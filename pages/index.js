export default function Example() {
  return (
    <>
      <body>
        <header className="text-black-600 body-font bg-gray-900 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github bg-white text-white p-1 rounded-full"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <span className="ml-3 text-xl"></span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 text-white flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-400">Product</a>
              <a className="mr-5 hover:text-gray-400">Team </a>
              <a className="mr-5 hover:text-gray-400">Enterprice</a>
              <a className="mr-5 hover:text-gray-400">Explore</a>
              <a className="mr-5 hover:text-gray-400">MarketPlace</a>
              <a className="mr-5 hover:text-gray-400">Pricing</a>
            </nav>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-100px bg-white-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign In
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
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Let's build from here together.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                The complete developer platform to build, scale, and deliver
                secure software.
              </p>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
              <div className="relative sm:mb-0 flex-grow w-full">
                <label
                  for="full-name"
                  className="leading-7 text-sm text-gray-400"
                ></label>
              </div>
              <div className="relative sm:mb-0 flex-grow w-full">
                <label for="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white-800 bg-opacity-40 rounded border border-black-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-green-500 border-1 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {" "}
                SignUp
              </button>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  83+ million
                </h2>
                <p className="leading-relaxed">Developers</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  4+ Million
                </h2>
                <p className="leading-relaxed">Organization</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  200+ Million
                </h2>
                <p className="leading-relaxed">Repositories</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  90%
                </h2>
                <p className="leading-relaxed">Fortune 100</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-medium mb-3">
                      Build like the best with GitHub Enterprise
                    </h2>
                    <p className="leading-relaxed text-base">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </p>
                    <a className="mt-3 text-indigo-400 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-white text-lg title-font font-medium mb-3">
                      The Catalyzer
                    </h2>
                    <p className="leading-relaxed text-base">
                      Blue bottle crucifix vinyl post-ironic four dollar toast
                      vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                    <a className="mt-3 text-indigo-400 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-800 inline-flex items-center leading-none border-indigo-500 text-white tracking-wider rounded-t">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Code
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                Collaborate
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
                Developers
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Automate
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Secure
              </a>
              <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Community
              </a>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider"></h2>
                    <p className="leading-relaxed">
                      Ready player two. Scale your team to any size in the
                      cloud.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-20">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider"></h2>
                    <p className="leading-relaxed">
                      Better code starts with pull requests—conversations around
                      your code where you can experiment, squash bugs, and build
                      new features.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider"></h2>
                    <p className="leading-relaxed">
                      Code review is built in. Pull requests cover the entire
                      review flow: propose changes, browse code, ask for input,
                      make a suggestion, and sign off in one place.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider"></h2>
                    <p className="leading-relaxed">
                      Know when your pull request is ready to merge when
                      everything’s green. Reviews approved? Check. Tests
                      passing? Check check. No conflicts? Ship it already
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider"></h2>
                    <p className="leading-relaxed">
                      Put it all on the table, or board, with Projects. Manage
                      your team's work at any scale easier than ever with the
                      all-new Projects. Built like a spreadsheet, Projects give
                      you a live canvas to filter, sort, group issues and pull
                      requests, create custom views, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Make your contribution
              </h1>
              <p className="mb-8 leading-relaxed">
                Small experiments, inspired inventions, and the software
                everyone depends on—the code you write on GitHub can reach one
                codebase or millions.
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                  <label
                    for="hero-field"
                    className="leading-7 text-sm text-white-400"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-ug">
                  {" "}
                  Signup{" "}
                </button>
                <button className="inline-flex text-white bg-black-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-ug">
                  {" "}
                  Contact Sales{" "}
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                Neutra shabby chic ramps, viral fixie.
              </p>
              <div className="flex lg:flex-row md:flex-col text-gray-300">
                <button className="bg-white-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none" />
              </div>
            </div>
          </div>
        </section>

        <footer className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="octicon octicon-mark-github bg-white text-white p-1 rounded-full"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <span className="ml-3 text-xl">GitHub</span>
              </a>
              <p className="mt-2 text-sm text-gray-500"></p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">Product</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">features</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Team</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Security</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Team</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Enterprise</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">platform</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Partners</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Automate</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">Support</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Docs</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">
                      Professional Servicesk
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"></h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">Company</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">About</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Careers</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-75">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2020 GITHUB—
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-500 ml-1"
                  target="_blank"
                >
                  @GitHub
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
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
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    className="w-5 h-5"
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
      </body>{" "}
    </>
  );
}
