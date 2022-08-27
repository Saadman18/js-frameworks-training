function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="image" src="react-logo.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>
            <small>2022 Saadman development. All rights reserved.</small>
        </footer>
    )
}

function MainContent(){
    return(
        <div>
            <h1>Reasons I am excited to learn React</h1>
            <ol>
                <li>To build my own projects</li>
                <li>It is an awesome JavaScript library, and highly in demand skill</li>
                <li>So that my personal projects are prettier</li>
            </ol>
        </div>
    )
}

function MainPage(){
    return (
           <div>
               <Header/>
               <MainContent/> 
               <Footer/>
           </div>            
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainPage />);