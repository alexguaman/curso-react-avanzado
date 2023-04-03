import React from "react";
import { Item, List } from "./styles";
import data from "../../../api/db.json";
import { Category } from "../category";

export const ListOfCategories = () => {
    return (
        <List>
            {data.categories.map((category) => (
                <Item key={category.id}>
                    <Category { ...category } />
                </Item>
            ))}
        </List>
    );
};
