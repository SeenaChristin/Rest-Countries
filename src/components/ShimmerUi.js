const ShimmerUi = () => {
  return (
    <>
      <div className="flex"></div>
      <div className="flex flex-wrap mt-24">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-60 bg-gray-200 m-7 
                  border border-solid border-gray-300 shadow-xl h-80"
            ></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerUi;
