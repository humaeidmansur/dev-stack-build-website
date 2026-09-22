import type { Technology } from "../TechnologyType";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ButtonPropsCenter from "./ButtonPropsCenter";



function Functionality() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stackName, setStackName] = useState<Technology[]>([]);

 // ADD
  const handleAddStack = (technology: Technology) => {
    setStackName((lastStack) => {
      const existsData = lastStack.some(
        (item) => item.id === technology.id
      );

      if (existsData) {
        return lastStack;
      }

      return [...lastStack, technology];
    });
  };

  // REMOVE
  const handleRemoveStack = (id: string) => {
    setStackName((lastStack) =>
      lastStack.filter(
        (technology) => technology.id !== id
      )
    );
  };


  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

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

        {/* Parent-1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="card w-76 bg-base-100 shadow-sm"
            >
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <img
                    className="w-10 h-10"
                    src={technology.icon}
                    alt={technology.name}
                  />
                  <span className="badge badge-xs badge-warning">
                    {technology.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold">{technology.name}</h2>

                <p className="mb-6 text-[#64748B]">{technology.description}</p>

                <hr className="border-[#64748B]/30" />

                <ul className="flex items-center justify-between mt-3 text-[#64748B]">
                  <li className="rounded p-2 bg-gray-100">
                    {technology.category}
                  </li>
                  <li>{technology.difficulty}</li>
                  <li className="flex gap-1 justify-center items-center">
                    {" "}
                    <FaStar className="text-yellow-500" /> {technology.rating}
                  </li>
                </ul>

                <div className="mt-6">
                  <button className="btn btn-primary btn-block bg-black rounded-xl" 
                  onClick={()=>handleAddStack(technology)}>
                    Add to Stack
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE  */}

         <div className="card  bg-base-100 shadow-sm p-13 mb-319 h-fit ">

          <h1 className="font-bold text-xl">
            Your Stack
          </h1>

          <p className="text-[#64748B]">
            {stackName.length === 0
              ? "No technologies selected yet."
              : `${stackName.length} technology${
                stackName.length > 1 ? "ies" : ""
                } selected.`}
          </p>


       {/* Empty  */}

          {stackName.length === 0 ? (

            <div className="mt-10 text-center">

              <p className="border border-[#E2E8F0] border-dashed rounded-xl p-6 text-[#64748B]">
                Your Stack is Empty
              </p>

            </div>

          ) : (

        // Selected 

            <div className="mt-2 gap-2">

              {stackName.map((technology) => (
                <ButtonPropsCenter
                  key={technology.id}
                  technology={technology}
                  removeBtn={handleRemoveStack}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


export default Functionality;
