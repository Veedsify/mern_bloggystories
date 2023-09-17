import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <li>
        <div className="group block overflow-hidden rounded-lg shadow-xl">
          <Link to="/product/1">
            <img
              src="/images/img3.jpg"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
          </Link>

          <div className="relative bg-white pt-3">
            <Link to="/product/1" className="flex items-center border-b py-3">
              <h3 className="text-2xl p-2 md:p-4 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Basic Tee
              </h3>
              <span className="ml-auto p-2 md:p-4 tracking-wider text-base inline-block  text-gray-900">
                £24.00
              </span>
            </Link>
            <div className="p-2 md:p-4">
              <div className="flex gap-3 items-center">
                <Link to="/author/1">
                  <img
                    src="/images/img1.jpg"
                    className="rounded-full aspect-square object-cover w-16 border-4 border-white shadow-md"
                    alt=""
                  />
                </Link>
                <div>
                  <small className="italic">By</small>
                  <Link to="/author/1">
                    <h5>HastyTimesBlogs</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
