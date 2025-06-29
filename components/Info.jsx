import Image from "../Images/Indra.jpg"
import Logo from "../Images/Email.png"
import lin from "../Images/linkedin.png"

export default function Info() {
    return (
        <>
        <img className="main-image" src={Image} alt="Indra"/>
        <div className="main-text">
        <h1>Muhammad Indrawan Ismail</h1>
        <h4>Frontend Developer</h4>
        <p className="main-p">use reactjs for development</p>
        </div>
        <div className="main-button">
            <a href="https://mail.google.com/mail/u/0/#inbox"><button className="email-btn"><img src={Logo} alt="email" className="email-logo"/> Email</button></a>
            <a href="https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/"><button className="lin-btn"><img src={lin} alt="email" className="email-logo" /> LinkedIn</button></a>
        </div>
        </>
    )
}
