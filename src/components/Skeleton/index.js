import React from "react";
import { ItemSkeleton } from "./styles";
import { Item, List } from "../ListOfCategories/styles";

export const Skeleton = () => {
    return (
        <List>
            {[1, 2, 3, 4].map((id) => (
                <Item key={id}>
                    <ItemSkeleton key={id} />
                </Item>
            ))}
        </List>
    );
};
