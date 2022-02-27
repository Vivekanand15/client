import React  from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";


const App=()=>{
    return (
        <div className="ui container">
            <BrowserRouter>
                    <Header  />
                <Routes>
                    <Route path="/" element={< StreamList />} />
                    <Route path="/stream/new" element={ < StreamCreate />} />
                    <Route path="/stream/edit" element={<StreamEdit />} />
                    <Route path="/stream/delete" element={<StreamDelete />} />
                    <Route path="/stream/show" element={<StreamShow />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};


export default App;