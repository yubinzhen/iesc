const Welcome = () => {
  return (
    <div className="bg-iesc-darkBrown-100 flex flex-row">
      <div className=" w-1/2 pl-10">
        <div className="font-iesc-passionOne text-iesc-lightYellow-50 mt-9 text-4xl md:text-6xl lg:text-8xl">
          LET'S <br></br> CONNECT
        </div>

        <p className="font-iesc-beVietnam pr-16 text-lg md:text-xl text-iesc-lightYellow-50 mb-9">
          Whether you may have questions, ideas or feedback, please send us a message. Your voice matters in fostering change and strengthening our local community.
        </p>

        <div className="text-iesc-darkBrown-100 bg-iesc-vividRed-200 text-lg md:text-xl font-iesc-beVietnam p-5  mb-9 text-center w-11/12 font-bold">
            Email: iesc@gmail.com <br></br>
            Social Media: @IESC
        </div>

      </div>

      <div className="w-1/2 bg-iesc-darkBrown-100">
        <div className="bg-iesc-lightYellow-50">
            HI
        </div>
      </div>
    </div>
  );
};

export default Welcome;

