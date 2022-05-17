import "./style.css";
import Storys from "../Storys";
import Feed from "../Feed";
import { Suggestion } from "../Suggestion";


export default function Body(){
    return(
        <>
            <div className="MainGrid">
                <div className="first-column" style={{gridArea: "firstColumn"}}>
                    <div className="storys">
                        <Storys/>
                    </div>
                    <div className="posts" style={{margin:"30px 0"}}>
                        <Feed/>
                    </div>
                </div>
                <div className="suggestions" style={{gridArea: "secondColumn"}}>
                    <Suggestion/>
                </div>
            </div>
        </>
    );
}