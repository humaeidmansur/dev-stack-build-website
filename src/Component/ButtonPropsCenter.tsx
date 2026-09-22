 import type { Technology } from "../TechnologyType";
import { RxCross2 } from "react-icons/rx";


interface TechCardProps {
  technology: Technology;
  removeBtn: (id: string) => void;
}

const ButtonPropsCenter = ({technology,removeBtn} : TechCardProps) => {

 return (
    <div>
      <div className="flex justify-between items-center  border gap-15 border-[#E2E8F0] border-dashed rounded-xl p-6 text-[#64748B]">

        <div>
          <div className="flex gap-3 items-center">
            <img
              className="w-10 h-10"
              src={technology.icon}
              alt={technology.name}
            />
                                                                                                                                     
            <h2 className="text-xl font-bold text-black">
              {technology.name}
            </h2>
          </div>

          <p className="ml-13 text-sm">
            {technology.category}
          </p>
        </div>



        <button
          onClick={() => removeBtn(technology.id)}
          className="text-xl cursor-pointer hover:text-red-500"
          aria-label={`Remove ${technology.name}`}
        >
          <RxCross2 />
        </button>

      </div>
    </div>
  );
};

export default ButtonPropsCenter;