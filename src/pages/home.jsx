import { useMemo } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

const Home = () => {
  const filteredRoutes = useMemo(
    () => routes.filter(({ path }) => path !== "/"),
    []
  );
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <nav className="w-full max-w-4xl mx-auto">
        <ul className="space-y-12">
          {filteredRoutes.map(({ path, name, override }) => (
            <li key={path} className="w-full flex justify-center">
              <Link
                to={override ? override : path}
                className="inline-block text-6xl font-normal hover:font-bold transition-all duration-300 ease-in-out"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
