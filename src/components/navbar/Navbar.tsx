import "./Navbar.scss"

const Navbar = () => {

  const operacion = (num1:any, num2:any, op:any) => {
    const resultado = op(num1, num2);
    console.log(resultado);
    return resultado;
  }

  operacion(1, 2, (a:any, b:any) => a + b);
  operacion(1, 2, (a:any, b:any) => a - b);
  operacion(1, 2, (a:any, b:any) => a * b);
  operacion(1, 2, (a:any, b:any) => a / b);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Dash</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/thom-y.jpg" alt="avatar" />
          <span>Tomás</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />

      </div>
    </div>
  )
}

export default Navbar