import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-10 text-white">
        <section className="max-w-screen-xl mx-auto px-4 py-3 md:px-7 md:py-5">
          <div className="flex flex-col gap-8 items-center justify-center">
            <ul className="flex gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
            <div>
              <p className="text-sm">
                @ BloggyStories Inc. All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
