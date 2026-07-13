const Welcome = () => {
  return (
    <div className="bg-iesc-darkBrown-100 flex flex-row">
      <div className="w-1/2 pl-10">
        <div className="font-iesc-passionOne text-iesc-lightYellow-50 mt-9 text-4xl md:text-6xl lg:text-8xl">
          LET'S <br></br> CONNECT
        </div>

        <p className="font-iesc-beVietnam text-iesc-lightYellow-50 mb-9 pr-16 text-lg md:text-xl">
          Whether you may have questions, ideas or feedback, please send us a
          message. Your voice matters in fostering change and strengthening our
          local community.
        </p>

        <div className="text-iesc-darkBrown-100 bg-iesc-vividRed-200 font-iesc-beVietnam mb-9 w-11/12 p-5 text-center text-lg font-bold md:text-xl">
          Email: iesc@gmail.com <br></br>
          Social Media: @IESC
        </div>
      </div>

      <div className="bg-iesc-darkBrown-100 w-1/2">
        <div className="bg-iesc-lightYellow-50">HI</div>
      </div>
    </div>
  );
};

export default Welcome;
