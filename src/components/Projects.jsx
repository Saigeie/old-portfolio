import "../assets/Divider.css"
import "../assets/Projects.css"
import TopBot from "../assets/img/Top.png"
import IIBot from "../assets/img/Luna.jpg"
import LaZyBot from "../assets/img/LaZ1en.jpg"
export default function Projects() {
    return (
        <>
            <main className="mainContainer">
                <div className="Project" data-aos="fade-up">

                    <div className="projectType">
                        <h2 className="type">CLIENT</h2>
                    </div>

                    <div className="projectmain">
                        <div className="Image">
                            <img src={TopBot} alt="TopBot Profile Picture" className="projectImage" />
                        </div>
                        <div className="aboutProject">
                            <h1 className="projectTitle">TopBot</h1>
                            <p className="aboutProjectText">A personalised discord bot  for <a href="https://www.youtube.com/c/TopRanker" className="channelName">Topranker</a>, influenced with a full moderation, leveling, logging, staff utilites + more.</p>
                        </div>
                    </div>

                    <div className="Button">
                      <a href="https://discord.gg/AT9QbcTz2x" className="exploreButton"><h1>EXPLORE</h1><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="Project" data-aos="fade-up">

                    <div className="projectType">
                        <h2 className="type">CLIENT</h2>
                    </div>

                    <div className="projectmain">
                        <div className="Image">
                            <img src={IIBot} alt="IIBot Profile Picture" className="projectImage" />
                        </div>
                        <div className="aboutProject">
                            <h1 className="projectTitle">IIBot</h1>
                            <p className="aboutProjectText">A discord bot created for <a href="https://www.youtube.com/c/iiLuna" className="channelName">IILuna</a>.<br/>The Bot includes music, leveling, welcome & leave messages, verification + more.</p>
                        </div>
                    </div>

                    <div className="Button">
                      <a href="https://discord.com/invite/Vm7KfW7NP3" className="exploreButton"><h1>EXPLORE</h1><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="Project" data-aos="fade-up">

                <div className="projectType">
                    <h2 className="type">CLIENT</h2>
                </div>

                <div className="projectmain">
                    <div className="Image">
                        <img src={LaZyBot} alt="LaZyBot Profile Picture" className="projectImage" />
                    </div>
                    <div className="aboutProject">
                        <h1 className="projectTitle">LaZyBot</h1>
                        <p className="aboutProjectText">A discord bot created for <a href="https://www.youtube.com/c/LaZ1en" className="channelName">LaZ1en</a>. The Bot includes music, leveling, welcome & leave messages and more.</p>
                    </div>
                </div>

                <div className="Button">
                <a href="https://discord.com/invite/Vm7KfW7NP3" className="exploreButton"><h1>EXPLORE</h1><i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                </div>
                
            </main>
        </>
    )
}