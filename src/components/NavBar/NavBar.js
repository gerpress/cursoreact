import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>AVTIVE SPORT</h3>
      <div>
        <button>INICIO</button>
        <button>CARRITO</button>
        <button>SOBRE NOSOTROS</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
