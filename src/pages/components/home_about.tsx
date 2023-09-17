import Marquee from "react-fast-marquee";

const HomeAbout = () => {
  return (
    <>
      <section className="py-10" id="home_about">
        <div className="max-w-screen-xl mx-auto mb-16 mt-14 px-4 py-3 md:px-7 md:py-5 flex justify-center">
          <div className="bg-black bg-opacity-50 rounded-md write-creative backdrop-blur-xl">
            <div className="p-10 md:p-36">
              <h2 className="OF font-medium text-4xl md:text-6xl mb-6 text-center text-white leading-snug">
                Write creative blog post, on any topic, anytime anywhere
              </h2>
              <p className="text-white md:text-lg text-center leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                nesciunt atque harum ipsum. Sequi at doloremque, quibusdam
                voluptatum
              </p>
            </div>
            <Marquee speed={100} autoFill={true}>
              <div className="grid grid-cols-3 justify-center h-96">
                <img
                  src="/images/img1.jpg"
                  className="w-96 aspect-square block object-cover "
                  alt="images"
                />

                <img
                  src="/images/img2.jpg"
                  className=" w-96 aspect-square block object-cover "
                  alt="images"
                />

                <img
                  src="/images/img3.jpg"
                  className=" w-96 aspect-square block object-cover "
                  alt="images"
                />
              </div>
            </Marquee>
            <Marquee speed={100} autoFill={true} direction="right">
              <div className="flex justify-center h-96">
                <img
                  src="/images/img1.jpg"
                  className="w-96 aspect-square block object-cover "
                  alt="images"
                />

                <img
                  src="/images/img2.jpg"
                  className=" w-96 aspect-square block object-cover "
                  alt="images"
                />

                <img
                  src="/images/img3.jpg"
                  className=" w-96 aspect-square block object-cover "
                  alt="images"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
