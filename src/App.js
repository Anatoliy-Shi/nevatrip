import {TaskSelect} from "./components/TaskSelect/TaskSelect";
import {TaskLayout} from "./components/TaskLayout/TaskLayout";
import {Routes, Route} from "react-router-dom";
import {Navigate} from "./components/navigate/Navigate";

export const App = () => {
    return (
        <div>
            <Navigate />
            <Routes>
                <Route path="/" element={<TaskLayout/>}/>
                <Route path="task-select" element={<TaskSelect/>}/>
            </Routes>

        </div>
    )
}
