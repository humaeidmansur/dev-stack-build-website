import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center pl-5 pr-5 lg:pl-10 lg:pr-5 pt-8 lg:pt-10 pb-5 gap-8 lg:gap-0">

      {/* Banner Content */}
      <div className="w-full lg:w-auto text-center lg:text-left">

        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Build Your Ideal
        </p>

        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
          Development Stack
        </p>

        <br />

        <p className="text-[#64748B] text-sm sm:text-base">
          Explore frontend, backend, database, and tooling options,{" "}
          <br className="hidden lg:block" />
          compare them side by side, and put together the stack that fits your{" "}
          <br className="hidden lg:block" />
          next project.
        </p>

        <br />

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

          <button className="font-normal text-white w-full sm:w-50 h-10 btn border-none btn-primary bg-[linear-gradient(to_right,#F97316_0%,#EC4899_100%)]">
            Explore Technologies
          </button>

          <button className="btn btn-outline w-full sm:w-50 h-10 text-[#64748B] font-normal">
            Learn More
          </button>

        </div>
      </div>

      {/* Banner Image */}
      
      <div className="w-full lg:w-auto flex justify-center">
        <img
          src={BannerImg}
          alt="Banner"
          className="w-280px sm:w-350px lg:w-auto"
        />
      </div>

    </div>
  );
};

export default Banner;