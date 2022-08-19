import { Suspense } from "react";
import loadable from "@loadable/component";
import { Loading } from "@coolblue/ui-library";

const InputfieldText = loadable(() => import(/* webpackChunkName: "InputfieldText" */ "@coolblue/ui-library/FormElements/InputfieldText"), {
    fallback: <Loading />,
});

const Container = loadable(() => import(/* webpackChunkName: "MainRoutes" */ "@coolblue/ui-library/Container"), {
    fallback: <Loading />,
});

const Checkbox = loadable(() => import(/* webpackChunkName: "Checkbox" */ "@coolblue/ui-library/FormElements/Checkbox"), {
    fallback: <Loading />,
});

const InputTypeRadio = loadable(() => import(/* webpackChunkName: "Checkbox" */ "@coolblue/ui-library/FormElements/InputTypeRadio"), {
    fallback: <Loading />,
});

const Button = loadable(() => import(/* webpackChunkName: "Checkbox" */ "@coolblue/ui-library/FormElements/Button"), {
    fallback: <Loading />,
});

function Example() {
    return (
        <>
            <Suspense>
                <Container>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </Container>
            </Suspense>
            <Suspense>
                <Container variant="red">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur semper nisl, accumsan posuere mauris
                        iaculis sit amet. In nunc libero, maximus ac viverra eget, tempus et dui. Donec tincidunt commodo nibh eu
                        ullamcorper. Nullam scelerisque ex sed orci varius rhoncus. Nam pretium rhoncus neque, in pellentesque ipsum congue
                        at. Vivamus vitae ultricies augue, <a href="#example">non congue tellus</a>. Pellentesque maximus gravida justo. Sed
                        sodales nec tortor id molestie. Integer feugiat tortor eu neque egestas, quis sodales odio sodales. Donec ac aliquet
                        risus.
                    </p>
                </Container>
            </Suspense>
            <Suspense>
                <Container variant="white">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur semper nisl, accumsan posuere mauris
                        iaculis sit amet. In nunc libero, maximus ac viverra eget, tempus et dui. Donec tincidunt commodo nibh eu
                        ullamcorper. Nullam scelerisque ex sed orci varius rhoncus. Nam pretium rhoncus neque, in pellentesque ipsum congue
                        at. Vivamus vitae ultricies augue, <a href="#example">non congue tellus</a>. Pellentesque maximus gravida justo. Sed
                        sodales nec tortor id molestie. Integer feugiat tortor eu neque egestas, quis sodales odio sodales. Donec ac aliquet
                        risus.
                    </p>
                </Container>
            </Suspense>
            <Suspense>
                <Container variant="white">
                    <InputfieldText id={1} title="test" name="test" type="email" required validationTypes={{ email: null }} />
                    <Checkbox id={1} title="checkbox 1" name="checkbox-test" />
                    <InputTypeRadio id={1} title="test" name="radio-test" />
                    <InputTypeRadio id={2} title="test-2" name="radio-test" />
                    <InputTypeRadio id={3} title="test-3" name="radio-test" />
                    <Button>Button</Button>
                </Container>
            </Suspense>
        </>
    );
}

export default Example;
