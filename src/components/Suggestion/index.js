import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLc0yxZszGQ34n4SZvZPqtMea0utjVeaR0gJkxK87LxEgh6yRx17IGMgNSc_fowk9Xp0&usqp=CAU`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>jadsilva</span>
                        <p>Jade Silva</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                
                     <div className="infos-suggestion">
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcznNBj8zDMIANNhFsvbsQj8SCMuDIsDqdep-3Uc5lnElfdw3IrPbvTSnWZxdlaxxkq8Q&usqp=CAU`} />
    
                        <div className="info-suggestion" >
                            <span>tzjorgin</span>
                            <p>Seguido por jorgin_.pasqual</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeqCD5CbGLntZt-Cmxcs5H11IIsBIB4pb47_6sgL9ctHIUiMWY3vXtLeTMAAan6Rj4wQ&usqp=CAU`} />
    
                        <div className="info-suggestion" >
                            <span>thomaascsouza</span>
                            <p>Seguido por sandradias</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion">
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsdsAXGOZMnF30IhjN1DYNJ3bVM00IK1bZwveLSF494WjS95lAdCV1nTcIx886YwBiZ0&usqp=CAU`} />
    
                        <div className="info-suggestion" >
                            <span>bcarlos.andrade</span>
                            <p>Seguido por ze.carlos_12</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>

               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}