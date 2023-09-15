const BlogHeader = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-3 md:px-7 md:py-5">
          <div className="mt-28 flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto text-white">
              <div
                role="main"
                className="flex flex-col items-center justify-center"
              >
                <h1 className="text-4xl font-semibold leading-9 text-center OF">
                  All Articles
                </h1>
                <p className=" leading-normal text-base text-center mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                  If you're looking for random paragraphs, you've come to the
                  right place. When a random word or a random sentence isn't
                  quite enough
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHeader;
