import BannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex justify-between items-center pl-10 pr-5 pt-10 pb-5">
      <div>
        <p className="text-5xl font-bold">Build Your Ideal</p>
        <p className="text-5xl font-bold bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
          Development Stack
        </p>{" "}
        <br />
        <p>
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>
        <br />
        <div className="flex gap-3">
          <button className=" w-50 h-10 btn border-none btn-primary bg-[linear-gradient(to_right,#F97316_0%,#EC4899_100%)] text-white ">Explore Technologies</button>
          <button className=" btn btn-outline w-50 h-10">Learn More</button>
        </div>
      </div>

      <div>
        <img src={BannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
