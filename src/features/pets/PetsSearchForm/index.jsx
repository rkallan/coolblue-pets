/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import loadable from "@loadable/component";
import Loading from "@coolblue/ui-library/Loading";
import { objectAsUrlParams, urlParamsAsObject, validations } from "@coolblue/js-helpers";
import { useDebounce, useIsFirstRender } from "@coolblue/react-hooks";
import { setSearchValue } from "features/pets/petsSlice";
import { useDispatch } from "react-redux";
import formData from "./constants/searchForm";

const Form = loadable(() => import(/* webpackChunkName: "Form" */ "@coolblue/ui-library/Form"), {
    fallback: <Loading />,
});

function PetsSearchForm() {
    const isFirstRender = useIsFirstRender();
    const dispatch = useDispatch();
    const searchFormData = formData();
    const [currentValue, setCurrentValue] = useState(() => undefined);
    const debouncedCurrentValue = useDebounce(currentValue, 500);

    const formOnChangeHandler = (event) => {
        const element = event.target;
        const { name, value } = element || {};

        setCurrentValue(`${name}:${value.trim()}`);
    };

    useEffect(() => {
        if (debouncedCurrentValue || validations.isEmpty(debouncedCurrentValue)) {
            const currentUrlSearch = window.location.search;
            const currentUrlSearchAsObject = urlParamsAsObject(currentUrlSearch);
            const [key, value] = debouncedCurrentValue?.split(":") || [];

            const searchObject = {
                ...currentUrlSearchAsObject,
                page: isFirstRender ? currentUrlSearchAsObject.page : undefined,
                [key]: value ?? currentUrlSearchAsObject[key],
            };
            const search = objectAsUrlParams(searchObject);
            const isSearchCurrentUrlSearch = search === currentUrlSearch;

            const payloadValue = searchObject.q;

            dispatch(setSearchValue(payloadValue));

            if (!isSearchCurrentUrlSearch) window.history.pushState({}, "", !search ? window.location.pathname : search);
        }
    }, [debouncedCurrentValue, dispatch, isFirstRender]);

    return (
        <Form
            customEventHandler={formOnChangeHandler}
            customSubmitHandler={undefined}
            disableForm={undefined}
            resetForm={undefined}
            submitButtonDisabled={undefined}
            {...searchFormData}
            postFormWithApiCall
            postData={undefined}
        />
    );
}

export default PetsSearchForm;
