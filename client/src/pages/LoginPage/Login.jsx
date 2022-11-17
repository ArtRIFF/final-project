import Header from '../../components/Header/Header';
import Button from '../../components/Button/BattonAll/ButtonAll';
import Footer from '../../components/Footer/Footer';
import './Login.scss';
import { useState } from 'react';



const Login = () => {
const [precentBar, setPrecentBar] = useState('');
const [passInputChange, setPassInputChange] = useState('');
const [passInputClasses, setPassInputClasses] = useState('pass-input-passive');
const [toggleIcon, setToggleIcon] = useState('✅');
const [toggleIconClasses, setToggleIconClasses] = useState('toggle-icon-passive');
const [ripple, setRipple] = useState('');
const [passLable, setPassLable] = useState('Strength');
const [type, setType] = useState('password');

const addClass = (className) => {
    setPrecentBar('')
    if(className) {
        setPrecentBar(className)
    }
}

const handlePassInput = (e) => {
    setPassInputChange(e.target.value)
    if(passInputChange.length === 0) {
        setPassLable('Strength');
        addClass()
    } else if (passInputChange.length <= 4) {
        setPassLable('Weak')
        addClass('weak')
    } else if (passInputChange.length <= 7) {
        setPassLable('Not Bad')
        addClass('avarage')
    }else{
        setPassLable('Strong');
        addClass('strong')
    }
}

const togglePassInput = (e) => {
    if(type === 'password'){
        setType('text')
        setToggleIcon('✅')
        setRipple('ripple-active')
        setPassInputClasses('toggle-icon-classes')
    } else {
        setType('password')
        setToggleIcon('❌')
        setRipple('ripple-passive')
        setPassInputClasses('pass-input-passive')
        setToggleIconClasses('toggle-icon-passive')
    }
}
    return(
        <>
            <Header/>
            <section className='login__section'>
                <div className='container'>
                    <h2 className='login__breadcrumbs'>Shop / <span>Login</span></h2>
                    <form className='login__form'>
                        <h2 className='login__section-title'>Login</h2>
                        <label>
                            <h3 className="login__section-email">Email adress</h3>
                            <input type="text" placeholder='Email Adress' className='login__section-input'/>
                        </label>
                        <label>
                            <h3 className="login__section-email">Password</h3>
                            <div className='login__show-hide'>
                                <input 
                                type={type} 
                                placeholder='Password' 
                                className={passInputClasses} 
                                value={passInputChange} 
                                onChange={handlePassInput}
                                id='login__section-input'/>
                                <span onClick={togglePassInput} className={`toggle ${toggleIconClasses}`} id='hide_show'>{toggleIcon}</span>
                                <span className={`ripple ${ripple}`}></span>
                            </div>
                            <div className="pass-strength">
                                <div className="strength-percent">
                                    <span className={precentBar}></span>
                                </div>
                                <span className='strength-lable'>{passLable}</span>
                            </div>
                        </label>
                        <div className='login__registration-section'>
                            <h4 className='login__registration-title'>Don't have an account yet?<a href="" className='login__registration-link'> Register</a></h4>
                        </div>
                        <div className='login__section-btn'>
                        <Button text="Continue" className="section__btn-checkout"/>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login;