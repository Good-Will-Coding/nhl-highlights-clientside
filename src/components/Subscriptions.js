import React, { useState } from "react";
import axios from "axios";

const Subscriptions = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onChangeInput = e => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      saveSubscription(email);
    } else {
      console.log("Invalid Email");
      setEmailError(!emailError);
    }
  };

  const saveSubscription = email => {
    axios
      .post("https://frozen-journey-27456.herokuapp.com/subscriptions", {
        email
      })
      .then(() => {
        setSubscribed(!subscribed);
        setEmail("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="subscribe_panel">
      <h3>{subscribed ? `Thanks for subscribing!` : `Subscribe to us`}</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={onChangeInput}
          />
          <div className="email_error">{emailError ? `Whoops! Please double check your email.` : null }</div>
        </form>
      </div>
      <small>
      Enjoy unlimited access on NHL Highlights and in the app. Access latest news and gossip of your favorite teams in the league.
      </small>
    </div>
  );
};

export default Subscriptions;
