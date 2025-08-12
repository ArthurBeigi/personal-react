interface IStep {
  step: 1 | 2 | 3 | 4;
}
export const SignUpProgressBar = ({ step }: IStep) => {
  return (
    <div className="  h-20 pt-2 pr-16">
      <div className=" h-10 gap-1 flex items-center">
        <div
          className={`border ${
            step == 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } border-blue-500  w-9 h-9 rounded-md flex justify-center items-center text-2xl font-bold`}
        >
          1
        </div>
        <div className={`${step > 1 ? "text-blue-500" : "text-gray-300"} w-20  border-dotted-wide`} />

        <div
          className={`border ${
            step == 2 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } border-blue-500  w-9 h-9 rounded-md flex justify-center items-center text-2xl font-bold`}
        >
          2
        </div>
       <div className={`${step > 2 ? "text-blue-500" : "text-gray-300"} w-20  border-dotted-wide`} />
        <div
          className={`border ${
            step == 3 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } border-blue-500  w-9 h-9 rounded-md flex justify-center items-center text-2xl font-bold`}
        >
          3
        </div>
        <div className={`${step > 3 ? "text-blue-500" : "text-gray-300"} w-20  border-dotted-wide`} />
        <div
          className={`border ${
            step == 4 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          } border-blue-500  w-9 h-9 rounded-md flex justify-center items-center text-2xl font-bold`}
        >
          4
        </div>
      </div>
      <div className="bg-blue-50 mt-1 h-5">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};
