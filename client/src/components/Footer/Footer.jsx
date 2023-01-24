import {NavLink} from 'react-router-dom';
import ButtonAll from '../Button/ButtonAll/ButtonAll'
import './Footer.scss'
import {useState} from "react";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";

const Footer = () => {

  const [subscriberEmail, setSubscriberEmail] = useState("");
  const handleSubmit = () => {
    /*Fixme лист на пошту поки що не приходить, в перспективі можна зверстати тематичну newsletter, що буде надходити підписнику */
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
          alert('Successful subscribe')
        } else {
          console.log('FAIL')
        }
      })
      .catch(e => {
        console.error(e);
      })
  }
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__info'>
          <div className='footer__conteiner'>
            <img src="img/logo.png" alt="SoVa_logo" className='footer__img'/>
            <div className='table_buyer'>
              <p className='footer__title'>To the buyer</p>
              <ul>
                <NavLink to="/constract">
                  <li className='footer__list'>
                    Payment and delivery
                  </li>
                </NavLink>
                <NavLink to="/constract">
                  <li className='footer__list'>
                    Shops
                  </li>
                </NavLink>
              </ul>
            </div>
            <div className='table_about'>
              <p className='footer__title'>About</p>
              <ul>
                <NavLink to="/about">
                  <li className='footer__list'>About us</li>
                </NavLink>
                <NavLink to="/contact">
                  <li className='footer__list'>Contacts</li>
                </NavLink>
              </ul>
            </div>
            <div className='table_catalog'>
              <p className='footer__title' id='title'>Catalog</p>
              <ul>
                <NavLink to="/jewelry">
                  <li className='footer__list'>Jewelry</li>
                </NavLink>
                <NavLink to="/outlet">
                  <li className='footer__list'>Outlet</li>
                </NavLink>
              </ul>
            </div>
            <div className='table_work-time'>
              <p className='footer__title'>Work Time</p>
              <ul>
                <li className='footer__work-time'>Mon-Th 9:00 - 20:00</li>
                <li className='footer__work-time'>Fri 9:00 - 19:00</li>
                <li className='footer__work-time'>Sat 9:00 - 17:00</li>
              </ul>
            </div>
            <div className='table__subscribe'>
              <p className='footer__title'>Subscribe our Newsletters</p>
              <div className='table__input'>
                <input type="email" placeholder="Your email" className='input'
                       onChange={(e) => setSubscriberEmail(e.target.value)}
                />
                <ButtonAll text='Subscribe' className='section__btn-footer' onClick={handleSubmit}/>
              </div>
              <div className='footer__media'>
                <a href="https://www.facebook.com/daniteducation/">
                  <svg className='social' width="32" height="32" viewBox="0 0 32 32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_128_16815)">
                    <rect width="32" height="32" rx="16" fill="#EDE8E7"/>
                    <g clipPath="url(#clip0_128_16815)">
                      <path
                        d="M17.0813 23.9688H14.514C14.0852 23.9688 13.7364 23.6206 13.7364 23.1926V17.4133H12.2386C11.8098 17.4133 11.4609 17.0651 11.4609 16.6372V14.1608C11.4609 13.7328 11.8098 13.3846 12.2386 13.3846H13.7364V12.1445C13.7364 10.9149 14.1232 9.86877 14.855 9.11938C15.5901 8.36658 16.6174 7.96875 17.8258 7.96875L19.7837 7.97192C20.2118 7.97266 20.56 8.3208 20.56 8.74805V11.0474C20.56 11.4753 20.2113 11.8235 19.7826 11.8235L18.4644 11.824C18.0623 11.824 17.96 11.9044 17.9381 11.9291C17.902 11.97 17.8591 12.0856 17.8591 12.4048V13.3845H19.6835C19.8209 13.3845 19.954 13.4183 20.0683 13.4821C20.315 13.6196 20.4684 13.8798 20.4684 14.1609L20.4674 16.6373C20.4674 17.0651 20.1186 17.4132 19.6898 17.4132H17.8591V23.1926C17.8591 23.6206 17.5101 23.9688 17.0813 23.9688ZM14.6762 23.0308H16.9191V16.9934C16.9191 16.7076 17.1521 16.4752 17.4383 16.4752H19.5276L19.5285 14.3226H17.4382C17.152 14.3226 16.9191 14.0902 16.9191 13.8044V12.4048C16.9191 12.0383 16.9564 11.6216 17.2336 11.3084C17.5684 10.9297 18.0962 10.886 18.4641 10.886L19.6202 10.8855V8.90967L17.8251 8.90674C15.883 8.90674 14.6762 10.1475 14.6762 12.1445V13.8044C14.6762 14.0901 14.4433 14.3226 14.1571 14.3226H12.4008V16.4752H14.1571C14.4433 16.4752 14.6762 16.7076 14.6762 16.9934V23.0308ZM19.7819 8.90991H19.782H19.7819Z"
                        fill="#311C1C"/>
                    </g>
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#311C1C"/>
                  </g>
                  <defs>
                    <filter id="filter0_b_128_16815" x="-50" y="-50" width="132" height="132"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_128_16815"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_128_16815" result="shape"/>
                    </filter>
                    <clipPath id="clip0_128_16815">
                      <rect width="16" height="16" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                  </defs>
                </svg>
                </a>
                <a href="https://www.instagram.com/daniteducation/">
                <svg className='social' width="32" height="32" viewBox="0 0 32 32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_128_16818)">
                    <rect width="32" height="32" rx="16" fill="#EDE8E7"/>
                    <g clipPath="url(#clip0_128_16818)">
                      <path
                        d="M19.6689 8H12.331C9.94287 8 8 9.94287 8 12.331V19.669C8 22.0571 9.94287 24 12.331 24H19.669C22.0571 24 24 22.0571 24 19.669V12.331C24 9.94287 22.0571 8 19.6689 8V8ZM23.062 19.669C23.062 21.5399 21.5399 23.062 19.6689 23.062H12.331C10.4601 23.062 8.93799 21.5399 8.93799 19.669V12.331C8.93799 10.4601 10.4601 8.93799 12.331 8.93799H19.669C21.5399 8.93799 23.062 10.4601 23.062 12.331V19.669Z"
                        fill="#311C1C"/>
                      <path
                        d="M15.9999 11.625C13.5875 11.625 11.625 13.5875 11.625 15.9999C11.625 18.4122 13.5875 20.3747 15.9999 20.3747C18.4122 20.3747 20.3747 18.4122 20.3747 15.9999C20.3747 13.5875 18.4122 11.625 15.9999 11.625ZM15.9999 19.4368C14.1049 19.4368 12.563 17.895 12.563 15.9999C12.563 14.1049 14.1049 12.563 15.9999 12.563C17.895 12.563 19.4368 14.1049 19.4368 15.9999C19.4368 17.895 17.895 19.4368 15.9999 19.4368Z"
                        fill="#311C1C"/>
                      <path
                        d="M20.4802 10.0713C19.7673 10.0713 19.1875 10.6512 19.1875 11.364C19.1875 12.0769 19.7673 12.6569 20.4802 12.6569C21.1931 12.6569 21.7731 12.0769 21.7731 11.364C21.7731 10.6511 21.1931 10.0713 20.4802 10.0713ZM20.4802 11.7187C20.2847 11.7187 20.1255 11.5596 20.1255 11.364C20.1255 11.1683 20.2847 11.0093 20.4802 11.0093C20.6759 11.0093 20.8351 11.1683 20.8351 11.364C20.8351 11.5596 20.6759 11.7187 20.4802 11.7187Z"
                        fill="#311C1C"/>
                    </g>
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#311C1C"/>
                  </g>
                  <defs>
                    <filter id="filter0_b_128_16818" x="-50" y="-50" width="132" height="132"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_128_16818"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_128_16818" result="shape"/>
                    </filter>
                    <clipPath id="clip0_128_16818">
                      <rect width="16" height="16" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                  </defs>
                </svg>
                </a>
                <a href="https://www.linkedin.com/company/dan-it-education/">
                <svg className='social' width="32" height="32" viewBox="0 0 32 32" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_128_16823)">
                    <rect width="32" height="32" rx="16" fill="#EDE8E7"/>
                    <g clipPath="url(#clip0_128_16823)">
                      <path
                        d="M12.1362 12.7383H9.43896C9.1366 12.7383 8.89062 12.9843 8.89062 13.2866V23.4518C8.89062 23.754 9.1366 24 9.43896 24H12.1362C12.4385 24 12.6844 23.754 12.6844 23.4518V13.2866C12.6844 12.9843 12.4385 12.7383 12.1362 12.7383ZM11.7456 23.0611H9.82947V13.6771H11.7456V23.0611Z"
                        fill="#311C1C"/>
                      <path
                        d="M10.7876 8C9.73291 8 8.875 8.85791 8.875 9.91247C8.875 10.9672 9.73291 11.8251 10.7876 11.8251C11.842 11.8251 12.7001 10.9672 12.7001 9.91247C12.7001 8.85791 11.8422 8 10.7876 8ZM10.7876 10.8862C10.2506 10.8862 9.81384 10.4495 9.81384 9.91247C9.81384 9.37561 10.2506 8.93884 10.7876 8.93884C11.3245 8.93884 11.7612 9.37561 11.7612 9.91247C11.7612 10.4493 11.3245 10.8862 10.7876 10.8862Z"
                        fill="#311C1C"/>
                      <path
                        d="M21.408 13.9299C20.7632 13.3917 19.9435 13.1039 19.1007 13.1195C18.5773 13.1291 18.0658 13.2554 17.6023 13.4839V13.262C17.6023 12.9728 17.3678 12.7383 17.0786 12.7383H14.3323C14.0431 12.7383 13.8086 12.9728 13.8086 13.262V23.4762C13.8086 23.7655 14.0431 23.9999 14.3323 23.9999H17.1328C17.3921 23.9999 17.6023 23.7897 17.6023 23.5305V17.4405C17.6023 16.9192 18.0103 16.478 18.5312 16.4625C19.0728 16.4465 19.5183 16.8822 19.5183 17.4202V23.5403C19.5183 23.794 19.7241 23.9999 19.9779 23.9999H22.6694C22.9232 23.9999 23.129 23.794 23.129 23.5403V17.6063C23.129 16.183 22.5017 14.8429 21.408 13.9299ZM22.1902 23.061H20.4573V17.4202C20.4573 16.3743 19.6063 15.5233 18.5603 15.5233C17.5144 15.5233 16.6635 16.3743 16.6635 17.4202V23.061H14.7474V13.677H16.6635V14.3592H16.6641C16.6639 14.4698 16.7024 14.5809 16.7815 14.6704C16.9532 14.8645 17.25 14.8826 17.4441 14.7107C17.9066 14.3013 18.5011 14.0696 19.118 14.0581C19.7356 14.0464 20.335 14.2571 20.8064 14.6506C21.6859 15.3848 22.1902 16.462 22.1902 17.6063V23.061Z"
                        fill="#311C1C"/>
                    </g>
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#311C1C"/>
                  </g>
                  <defs>
                    <filter id="filter0_b_128_16823" x="-50" y="-50" width="132" height="132"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_128_16823"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_128_16823" result="shape"/>
                    </filter>
                    <clipPath id="clip0_128_16823">
                      <rect width="16" height="16" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                  </defs>
                </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className='container'>
        <div className='line'></div>
        <p className='design'>© 2022 Watches. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;