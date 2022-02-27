import React  from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";


const pageOne=()=>{
    return <h2>Page One</h2>;
};

const pageTwo=()=>{
    return <h2>Page Two</h2>;
};


const App=()=>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact component={pageOne} ></Route>
                    <Route path="/pagetwo" component={pageTwo} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;