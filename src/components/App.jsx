import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <div>
        <Link to={"/home"}>home</Link>
        <Link to={"/shop"}>shop</Link>
      </div>
      <Link to={"/cart"}>cart</Link>
      <Outlet />
    </>
  );
}

export default App;
