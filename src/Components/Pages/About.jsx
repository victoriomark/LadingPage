const About = () => {
  return (
    <section className="container-fluid container-lg  bg-dark  align-items-center justify-content-center d-sm-grid p-sm-1 d-lg-flex">
      <div className=" container text-secondary p-sm-5">
        <h1 className="text-warning fw-bolder opacity-50">About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic
          vitae repellat ab magnam ratione nostrum, commodi eligendi delectus
          facere dolorum expedita fuga dignissimos vel explicabo a cupiditate.
          Quam deleniti ducimus minima nisi culpa inventore repellendus quia
          pariatur. Quia debitis sapiente harum itaque explicabo alias autem
          officiis sed ad ipsam.
        </p>
      </div>
      <div className="container p-2 d-flex justify-content-between ">
        <img src="/assets/About.avif" width="500" class="img-fluid rounded-5" />
      </div>
    </section>
  );
};

export default About;
