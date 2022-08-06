import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Subscribe } from "../page/Subscribe";
import { Platform } from "../page/Platform";

export function Router() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Subscribe />} />
                    <Route path="/platform" element={<Platform />} />
                    <Route path="/platform/lesson/:slug" element={<Platform />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
} 
