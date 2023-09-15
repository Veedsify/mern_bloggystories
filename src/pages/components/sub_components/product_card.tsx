import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <li>
        <div className="group block overflow-hidden">
          <Link to="/product/1">
            <img
              src="/images/img3.jpg"
              alt=""
              className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />
          </Link>

          <div className="relative bg-white pt-3">
            <Link to="/product/1">
              <h3 className="text-lg p-2 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Basic Tee
              </h3>
            </Link>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-sm inline-block mb-4 p-2 text-gray-900">
                £24.00 GBP.
              </span>
              <div className="p-2">
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center justify-around border  rounded mb-3">
                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    &minus;
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="0"
                    className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    +
                  </button>
                </div>
                <button className="flex items-center w-full py-2 justify-center gap-2 text-white bg-red-400  border rounded">
                  Add to Cart <BsCart2 />
                </button>
              </div>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
