import React from "react";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { PhotoCard } from "../PhotoCard";

// eslint-disable-next-line react/prop-types
export const ListOfPhotoCards = ({ categoryId }) => {
    const { data, loading, error } = useGetPhotos(categoryId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!!!</p>;

    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard
                    key={photo.id}
                    id={photo.id}
                    likes={photo.likes}
                    src={photo.src}
                />
            ))}
        </ul>
    );
};
