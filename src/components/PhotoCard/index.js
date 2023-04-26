import React from "react";
import { Img, ImgWrapper, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../Favbutton";
import { useToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

// eslint-disable-next-line react/prop-types
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
    const [show, ref] = useNearScreen();
    const { mutation, mutationLoading, mutationError } =
        useToggleLikeMutation();

    return (
        <Article ref={ref}>
            {show && (
                <React.Fragment>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="imagen" />
                        </ImgWrapper>
                    </a>
                    <FavButton
                        liked={liked}
                        likes={likes}
                        onClick={() => {
                            !liked &&
                                mutation({
                                    variables: {
                                        input: { id },
                                    },
                                });

                            setLiked(!liked);
                        }}
                    />
                </React.Fragment>
            )}
        </Article>
    );
};
