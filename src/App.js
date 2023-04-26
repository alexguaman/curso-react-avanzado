import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
    const urlParams = new URLSearchParams(location.search);
    const detailId = urlParams.get("detail");
    console.log(detailId);
    return (
        <>
            <GlobalStyles />
            <Logo />
            {detailId ? (
                <PhotoCardWithQuery id={detailId} />
            ) : (
                <>
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={2} />
                </>
            )}
        </>
    );
};
