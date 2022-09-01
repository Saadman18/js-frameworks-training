
// ---------------------Declarative--------------------

// function MyAwesomeHeader(){
//     return(
//         <h1>I am learning React</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         <MyAwesomeHeader />

//     </div>,
//     document.getElementById("root")
// )

// ----------------------Iterative-------------------

// const h1 = document.createElement("h1");
// h1.innerText = "Hello";
// h1.className = "header";
// document.getElementById("root").append(h1);

const page = (
    <div>
        <h1>Hello</h1>
        <p>I am learning React</p>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById("root")
);