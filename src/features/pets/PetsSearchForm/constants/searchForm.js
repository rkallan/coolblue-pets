const searchForm = () => {
    return {
        attributes: {
            method: "get",
            name: "search-tv-shows-form",
            autoComplete: "off",
            "data-required": true,
            action: process.env.REACT_APP_API_SHOWS_SEARCH,
            noValidate: true,
        },
        fieldsets: [
            {
                id: 1,
                caption: null,
                disabled: false,
                form: null,
                name: null,
                elements: [
                    {
                        id: 1,
                        name: "q",
                        title: "Search tv shows by title",
                        type: "search",
                        validationTypes: {
                            hasMinimalAndMaximalCharacters: { minCharacters: 2, maxCharacters: 256 },
                        },
                        defaultValue: undefined,
                        disabled: false,
                        node: "input",
                    },
                ],
            },
        ],
    };
};

export default searchForm;
