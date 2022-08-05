function FirstComponent(){
    return (
        <div>
            <header>
                <nav>
                    <img width="40px" src="react-logo.png" />
                </nav>
            </header>
            <h1>Reasons I am excited to learn React</h1>
            <ol>
                <li>To build my own projects</li>
                <li>It is an awesome JavaScript library, and highly in demand skill</li>
                <li>So that my personal projects are prettier</li>
            </ol>
            <footer>
                <small>2022 Saadman development. All rights reserved.</small>
            </footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);