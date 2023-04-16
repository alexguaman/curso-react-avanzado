import { useRef, useState, useEffect } from "react";

export function useNearScreen() {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(
        function () {
            Promise.resolve(
                typeof IntersectionObserver !== "undefined"
                    ? IntersectionObserver
                    : import("intersection-observer")
            ).then(() => {
                const observer = new IntersectionObserver(function (entries) {
                    const { isIntersecting } = entries[0];
                    if (isIntersecting) {
                        setTimeout(() => {
                            setShow(true);
                        }, 500);
                        observer.disconnect();
                    }
                });
                observer.observe(ref.current);
            });
        },
        [ref]
    );

    return [show, ref];
}
