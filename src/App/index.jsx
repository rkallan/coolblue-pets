import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";

const Template = loadable(() => import(/* webpackChunkName: "Template" */ "Template"), {
    fallback: <Loading />,
});

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Template />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
