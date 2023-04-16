import React, { useEffect, useState } from "react";
import { Category } from "./../Category";
import { Item, List } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";
import { Skeleton } from "../Skeleton";

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY > 150;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {categories.map((category) => (
                <Item key={category.id}>
                    <Category {...category} />
                </Item>
            ))}
        </List>
    );

    return loading ? (
        <div>
            <Skeleton />
        </div>
    ) : (
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    );
};
