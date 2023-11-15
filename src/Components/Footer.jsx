const Footer = () => {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark ">
      <div className="container">
        <h1 className="text-center text-warning opacity-25 fw-bolder ">VicDiv</h1>
      </div>
      <div className=" footer_  ">

      </div>
      <div className="icon container-fluid d-flex  justify-content-center align-items-center">
        <ul className="d-flex gap-5 container">
          <li  className="list-group-item">
            <i className="bg-warning  text-dark fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="bg-warning  text-dark fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="bg-warning text-dark  fa-brands fa-facebook"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
