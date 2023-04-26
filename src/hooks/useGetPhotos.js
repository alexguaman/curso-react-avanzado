import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

export const useGetPhotos = (categoryId) => {
    const GET_PHOTOS = gql`
        query getPhotos($categoryId: ID) {
            photos(categoryId: $categoryId) {
                id
                categoryId
                src
                likes
                userId
                liked
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_PHOTOS, {
        variables: { categoryId: categoryId },
    });

    return { data, loading, error };
};
