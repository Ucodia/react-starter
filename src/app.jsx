import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/contexts/theme";
import ThemeToggle from "@/components/theme-toggle";
import routes from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="bg-background border-b">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                {/* Mobile Layout */}
                <div className="flex items-center md:hidden">
                  <Navigation routes={routes} />
                  <h1 className="text-xl font-bold ml-4">
                    Ucodia's Playground 👾
                  </h1>
                </div>

                {/* Desktop Layout */}
                <h1 className="text-xl font-bold hidden md:block">
                  Ucodia's Playground 👾
                </h1>
                <div className="hidden md:flex items-center space-x-4">
                  <Navigation routes={routes} />
                  <ThemeToggle />
                </div>

                {/* Theme Toggle for Mobile */}
                <div className="md:hidden">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          <main className="flex-grow w-full">
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route
                path="*"
                element={<Navigate to={routes[0].path} replace />}
              />
            </Routes>
          </main>

          <footer className="bg-background border-t py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center">
                <span>Built by </span>
                <a
                  href="https://ucodia.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
                >
                  Ucodia
                </a>
                <span>- 2024</span>
                <img
                  src="/diamond.svg"
                  alt="Diamond"
                  height={24}
                  width={24}
                  className="ml-2 inline-block"
                />
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
