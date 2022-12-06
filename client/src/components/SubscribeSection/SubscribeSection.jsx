import './style.scss'
import ButtonAll from '../Button/BattonAll/ButtonAll'
import {useState} from "react";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";


const SubscribeSection = () => {

  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubmit = () => {
    const newSubscriber = {
      email: subscriberEmail,
      letterSubject: "Welcome subscribe letter from Jewelry Store",
      letterHtml: "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>"
    };

    sendRequest(`${API}subscribers`, 'POST',
      {
        body: JSON.stringify(newSubscriber),
        headers: {'Content-Type': 'application/json'}
      })
      .then(r => {
        if (r.success) {
          console.log('Successful subscribe')
        } else {
          console.log('FAIL')
        }
      })
      .catch(e => {
        console.error(e);
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
      </div>
    </section>
  );
}

export default SubscribeSection;