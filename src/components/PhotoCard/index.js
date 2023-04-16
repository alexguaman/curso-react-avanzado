import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button, Img, ImgWrapper, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

// eslint-disable-next-line react/prop-types
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [liked, setLiked] = useLocalStorage(`like-${id}`, false);

    const [show, ref] = useNearScreen();

    return (
        <Article ref={ref}>
            {show && (
                <React.Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="imagen" />
                        </ImgWrapper>
                    </a>
                    <Button onClick={() => setLiked(!liked)}>
                        {console.log(id, liked)}{" "}
                        {liked ? (
                            <MdFavorite size="32px" />
                        ) : (
                            <MdFavoriteBorder size="32px" />
                        )}{" "}
                        {likes} likes!
                    </Button>
                </React.Fragment>
            )}
            {!show && <span>Cargando...</span>}
        </Article>
    );
};
