/* eslint-disable jsx-a11y/anchor-is-valid */

const Prices = () => (
  <div className="py-12">
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">

        <div className="bg-slate-700 rounded-xl text-white">
          {/* <!-- Upper Container --> */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
              >Purchase
              </a>
            </div>
          </div>

          {/* <!-- Border --> */}
          <div className="border-t border-slate-700" />

          {/* <!-- Lower Container --> */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* <!-- List Container --> */}
            <div className="flex flex-col space-y-2">
              {/* <!-- List Item 1 --> */}
              <div className="flex justify-center">
                <span className="text-sm ml-1">100 GB of storage</span>
              </div>

              {/* <!-- List Item 2 --> */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Option to add members</span>
              </div>

              {/* <!-- List Item 3 --> */}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Prices;
