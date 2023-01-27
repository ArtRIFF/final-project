import './style.scss'
import ButtonAll from '../Button/ButtonAll/ButtonAll'
import {useState} from "react";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import React from "react";


const SubscribeSection = () => {

  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeResult, setSubscribeResult] = useState('');
  const [errSubscribe, setErrSubscribe] = useState('')


  const handleSubmit = () => {
      const newSubscriber = {
      email: subscriberEmail,
      letterSubject: "Welcome subscribe letter from Jewelry Store",
      letterHtml: "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> div { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <div><h2>You have successfully subscribed to our newsletter</h2><p>We will keep you updated on discount and new collection information!</p></div></body></html>"
    };

    sendRequest(`${API}subscribers`, 'POST',
      {
        body: JSON.stringify(newSubscriber),
        headers: {'Content-Type': 'application/json'}
      })
      .then(r => {
        if (r.subscriber.enabled) {
         setSubscribeResult("You are successfully subscribed to our newsletter")
        }
      })
      .catch(e => {
        setErrSubscribe("You are already subscribed")
      })
  }

  return (
    <section className="subscribe-section">
      <div className="container">
        <h2 className="subscribe-section__title">Subscribe to our Newsletter</h2>
        <div className="subscribe-section__container">
          <p className="subscribe-section__text">We promise to be polite and not bore you</p>
          <div className="subscribe-section__input">
            <input
              onChange={(e) => setSubscriberEmail(e.target.value)}
              className="subscribe-section__input-email" type="email" placeholder="Your email" />
            <ButtonAll type='submit' text='Subscribe' className='section__btn-subscribe' onClick={handleSubmit}/>
          </div>
        </div>
        {subscribeResult && <p className="login__registration-error">{subscribeResult}</p>}
        {errSubscribe && <p className="login__registration-error">{errSubscribe}</p>}
      </div>
    </section>
  );
}

export default SubscribeSection;