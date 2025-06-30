import githubLogo from "../Images/githubLogo.png"
import fbLogo from "../Images/fb.png"
import igLogo from "../Images/ig.png"
import treadLogo from "../Images/tred.png"

export default function Footer() {
    return(
        <div className="footer-wrapper">

            <div className="bg-tread">
            <a href="https://www.threads.com/@indrawan10__?xmt=AQF0aUlDH6B6meovt_M-NPBrRY-X7lIkAT5QB-mqG0zrRfU"><img src={treadLogo} alt="namecard logo" className="treadLogo"  /></a>
            </div>
            <div className="bg-fb">
            <a href="https://www.instagram.com/indrawan10__/"><img src={igLogo} alt="namecard logo" className="igLogo" /></a>
            </div>
            <div className="bg-ig">
            <a href="https://www.facebook.com/profile.php?id=61568222841876&locale=id_ID"><img src={fbLogo} alt="namecard logo" className="fbLogo" /></a>
            </div>
            <div className="bg-git">
            <a href="https://github.com/Indrawan-maker"><img src={githubLogo} alt="namecard logo" className="gitLogo" /></a>
            </div>
        </div>
    )
}