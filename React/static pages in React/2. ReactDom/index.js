const nav = (
    <nav>
        <h1>React Navbar</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);
// React 18 update. The Hello react syntax of doing the same thing is React 17 update. 

// ReactDOM.createRoot(document.getElementById("root")).render(nav);

// Another way of doing the same thing above

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nav);