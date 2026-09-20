const Functionality = () => {
  return (
    <div className=" pl-10 pr-5 mt-15 mb-10">
      <div className="mb-10">
        <h1 className="text-2xl text-black font-bold mb-2">
          Explore the{" "}
          <span className="bg-[linear-gradient(to_right,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* API Functionalities */}

      <div className="grid sm:flex items-center justify-start gap-10 "> 
        {/* Grand-Parent */}

        {" "}
        {/* Parent-1 */}
        <div className="card w-76 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              {/* <img src="" alt="img" /> */}
              <h1>Image</h1>
              <span className="badge badge-xs badge-warning">Most Popular</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold">React</h2>
            </div>

            <p className="mb-6 text-[#64748B]">
              The React framework for full-stack web applications with hybrid
              static & server rendering.
            </p>
            <hr className="border-[#64748B]/30" />

            <ul className="flex items-center justify-between mt-3 text-[#64748B]">
              <li className="rounded p-2 bg-gray-100">Forntend</li>
              <li>Intermediate</li>
              <li>4 Star</li>
            </ul>

            <div className="mt-6">
              <button className="btn btn-primary btn-block bg-black rounded-xl">
                Add to Stack
              </button>
            </div>
          </div>
        </div>
        {/* Parent-2  */}

        <div className="card w-76 bg-base-100 mb-22 shadow-sm p-10">
<h1 className="font-bold text-xl ">Your Stack</h1>
<p className="text-[#64748B]">No technologies selected yet.</p>
<div className="mt-10 text-center">
<p className="border border-[#E2E8F0] border-dashed rounded-xl p-6 text-[#64748B]">Your Stack is Empty</p>
</div>
        </div>




      </div>
    </div>
  );
};

export default Functionality;
