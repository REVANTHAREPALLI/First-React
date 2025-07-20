import logo from '../public/vite.svg'
import react1 from './assets/react.svg'
import './entry.css'

export default function Entry(){
    return(
        <>
        <div className="outer">
        <img src={logo} alt="None" width={100}/>
        <div className="right">
            <div className="top">
                <h2><u>About</u></h2>
                <h3><u>Vite</u></h3>
            </div>
            <div className="bottom">
                <ul>
                <li>Left side given logo is of vite</li>
                <li>To launch vite+react in terminal</li>
                <li>npm create vite@5 react-folder -- --template react</li>
                <li>5 represents vite version but 7 is now in usage</li>
                </ul>
            </div>
        </div>
        
        </div><div className="outer">
        <img src={react1} alt="None" width={100}/>
        <div className="right">
            <div className="top">
                <h2><u>About</u></h2>
                <h3><u>React</u></h3>
            </div>
            <div className="bottom">
                <ul>
                <li>Left side given logo is of vite</li>
                <li>To launch vite+react in terminal</li>
                <li>npm create vite@5 react-folder -- --template react</li>
                <li>5 represents vite version but 7 is now in usage</li>
                </ul>
            </div>
        </div>
        
        </div>
        </>
    )
}