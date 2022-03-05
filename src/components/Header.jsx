import ProfilePicture from "../assets/img/pfp.png"
import "../assets/Header.css"
import "../assets/LinkDash.css"
import Time from "./GetTime"
import GetTime from "./GetTime"

export default function Header() {
  let time = GetTime();
  console.log(GetTime())
  setTimeout(() => {
    time = GetTime()
  }, 60000);
  return (
    <>
      <div className="Whole" data-aos="fade-up">
        <div className="main">
            <h1 className="name" id="name">Saige</h1>
        </div>
        <div className="extra">
          <div className="icons">
            <div className="icons__dash"></div>
            <a href="https://dribbble.com/Saigeee"><i class="fa-brands fa-dribbble"></i></a>
            <a href="https://discord.com/users/462936117596127232"><i class="fa-brands fa-discord"></i></a>
            <a href="https://github.com/LavenderCantCode"><i class="fa-brands fa-github"></i></a>
          </div>
          <div className="about">
              <p>2+ Years development experience.</p>
              <p>6+ months design experience.</p>
              <p>Based in England, UK {time}</p>
              <p><a href="mailto:me@saige.cloud" className="link">Contact</a> me for anymore info.</p>
          </div>
        </div>
      </div>
    </>
  )
}


