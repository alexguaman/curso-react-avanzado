import { useState, useEffect } from "react";

export function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            setLoading(true);
            // 1era forma
            // const response = await fetch(
            //     "https://petgram-server-edsf8xpy2.now.sh/categories"
            // );
            // const jsonData = await response.json();
            // setCategories(jsonData);

            //2da forma
            await fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
                .then((response) => response.json())
                .then((jsonData) => setCategories(jsonData));

            setLoading(false);
        }

        fetchCategories();
    }, []);

    return { categories, loading };
}
