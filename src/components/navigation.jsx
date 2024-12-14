import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = ({ routes }) => {
  const location = useLocation();

  const NavLink = ({ to, children }) => (
    <Button asChild variant={location.pathname === to ? "secondary" : "ghost"}>
      <Link to={to}>{children}</Link>
    </Button>
  );

  const NavContent = () => (
    <>
      {routes.map(({ path, name, override }) => {
        return (
          <NavLink key={path} to={override ? override : path}>
            {name}
          </NavLink>
        );
      })}
    </>
  );

  return (
    <>
      <div className="hidden md:flex space-x-2">
        <NavContent />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col space-y-2 mt-8">
            <NavContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;
