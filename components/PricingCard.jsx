const PricingCard = ({ color = 'rgb(51 65 85)', type, title, price, CTA, data }) => (
  <div className="rounded-xl text-white" style={{ backgroundColor: `${color}` }}>
    {/* <!-- Upper Container --> */}
    <div className="mx-3 px-3 py-8 mt-3 rounded-t-xl bg-slate-800 xl:w-[400px]">
      <div className="text-center ">
        <span className="bg-violet-600 hover:bg-violet-800 duration-200 cursor-pointer text-xs px-2.5 py-0.5 rounded-full">{type}</span>
      </div>
      <h2 className="mt-10 text-3xl text-center">{title}</h2>
      <h3 className="mt-2 text-center">{price} میلیون تومان</h3>
      <div className="flex justify-center">
        <span className="inline-block px-4 py-3 my-6 text-center cursor-pointer border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800">{CTA}</span>
      </div>
    </div>

    {/* <!-- Border --> */}
    <div style={{ borderTop: `1px solid ${color}` }} />

    {/* <!-- Lower Container --> */}
    <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
      {/* <!-- List Container --> */}
      <div className="flex flex-col space-y-2">
        {/* <!-- List Item --> */}
        {data.map((item) => (
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
            <span className="text-sm mr-1">{item}</span>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default PricingCard;
