import "./style.css";
import {FiMoreHorizontal} from "react-icons/fi";
import {IoMdHeartEmpty} from "react-icons/io";
import {BsChat} from "react-icons/bs";
import {FiSend} from "react-icons/fi";
import {BsBookmark} from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function Feed(){
    return(
        <>
            <header className="post-header">
                <div className="info-post">
                    <img className="image-post"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N04NeTL1rp55vHT17CfBbnpyuFI_17HNEHSBDkmibi3_HVSeniAEnQu2B2u-rlnpxaE&usqp=CAU"/>
                    <p>sandradias</p>
                </div>
                <FiMoreHorizontal/>
            </header>
            <div className="image-post">
                <img src="https://images.memphistours.com/large/1384dab11b121931eba246f2ef0a42ec.jpg"/>
            </div>
            <div className="post-bottom">
                <IconContext.Provider value={{size:"30px"}}>
                <section className="icons-section">
                    <div className="icons">
                        <div>
                            <IoMdHeartEmpty/>
                        </div>
                        <div>
                            <BsChat/>
                        </div>
                        <div>
                            <FiSend/>
                        </div>
                    </div>
                <div>
                    <BsBookmark/>
                </div>
                </section>
                </IconContext.Provider>
                <section className="like">
                    <span>
                        <p>72 curtidas</p>
                    </span>
                </section>
                <div className="legend">
                    <p>
                        <strong>sandradias</strong> It's summer time!
                    </p>
                </div>
                <div className="time">
                    <time>Há 1 hora</time>
                </div>
                <div className="comment">
                   <div className="input-comment">
                            <IconContext.Provider value={{size:"25px"}}>
                                <div>
                                    <BsEmojiSmile/>
                                </div>
                            </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div> 
                    <button>Publicar</button>
                </div>
            </div>
            <header className="post-header">
                <div className="info-post">
                    <img className="image-post"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULfK78iYgPBEUMTULNGP4TVUwfGEV48Op70RI-wNNwLp3qq0gCNLd2zRgaNXDD4FkR8U&usqp=CAU"/>
                    <p>jorgin_.pasqual</p>
                </div>
                <FiMoreHorizontal/>
            </header>
            <div className="image-post">
                <img src="https://hypescience.com/wp-content/uploads/2014/04/sig-barbecue.jpg"/>
            </div>
            <div className="post-bottom">
                <IconContext.Provider value={{size:"30px"}}>
                <section className="icons-section">
                    <div className="icons">
                        <div>
                            <IoMdHeartEmpty/>
                        </div>
                        <div>
                            <BsChat/>
                        </div>
                        <div>
                            <FiSend/>
                        </div>
                    </div>
                <div>
                    <BsBookmark/>
                </div>
                </section>
                </IconContext.Provider>
                <section className="like">
                    <span>
                        <p>152 curtidas</p>
                    </span>
                </section>
                <div className="legend">
                    <p>
                        <strong>jorginlpasqual</strong> Churras brabo!
                    </p>
                </div>
                <div className="time">
                    <time>Há 3 hora</time>
                </div>
                <div className="comment">
                   <div className="input-comment">
                            <IconContext.Provider value={{size:"25px"}}>
                                <div>
                                    <BsEmojiSmile/>
                                </div>
                            </IconContext.Provider>
                        <input placeholder="Adicione um comentário..."/>
                    </div> 
                    <button>Publicar</button>
                </div>
            </div>
        </>
        
    );
}