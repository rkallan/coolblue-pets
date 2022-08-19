import { useEffect } from "react";

import { useIsFirstRender } from "@coolblue/react-hooks";

function useUpdateEffect(effect, deps) {
    const isFirst = useIsFirstRender();

    useEffect(() => {
        if (!isFirst) return effect();
    }, deps);
}

export default useUpdateEffect;
