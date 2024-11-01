import { assets } from "../assets/assets";
const Result = () => {
  return (
    <div className="bg-cyan-400 mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-slate-200">
        {/* Image Container */}
        <div>
          {/* Left Side */}
          <div>
            <p>Original</p>
            <img src={assets.image_w_bg} alt="" />
          </div>
          {/* Right Side */}
          <div>
            <p>Background Removed</p>
            <img src={assets.image_wo_bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
