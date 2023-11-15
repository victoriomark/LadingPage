const Contact = () => {
  return (
    <section className="container d-flex justify-content-around align-items-center">
      <form className="form p-4  container text-dark bg- d-flex  flex-column gap-3 " action="#">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
          <input
            type="phone"
            class="form-control"
            id="floatingPhone"
            placeholder="Phone Number"
          />
          <label for="floatingPassword">PhoneNumber</label>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingPhone"
            placeholder="Email"
          />
          <label for="floatingPassword">Email</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingPhone"
            placeholder="Message"
          />
          <label for="floatingPassword">Message</label>
        </div>
        <button className="btn btn-warning  fw-bolder text-light ">Send</button>
      </form>
    </section>
  );
};

export default Contact;
