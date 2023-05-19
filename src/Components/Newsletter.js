import React, { Component } from "react";


export default class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false
    };
  }

  handleChange(value) {
    this.setState({
      email: value,
      error: false
    });
  }

  handleSubmit() {
    const { email } = this.state;
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );

    if (error) {
      this.setState({ error });
    } else {
      console.log(email);
    }
  }

  render() {
    const { email, error } = this.state;

    return (
      
        <section className="newsletter-body">
        <img src = "https://themewagon.github.io/alazea/img/core-img/leaf.png" />
        <div className="Container">
        <div className="newsletter-left">
          <h2>Join the newsletter</h2>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
</div>
          <div className="newsletter-right" >
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={e => {
                this.handleChange(e.target.value);
              }}
            />
            <button className="alazea-btn"
              onClick={() => {
                this.handleSubmit();
              }}
            >
             Subscribe
            </button>
          </div>
          </div>
        </section>
        
   
    );
  }
}
