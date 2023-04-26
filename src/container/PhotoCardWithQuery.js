import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import React from "react";
import { PhotoCard } from "../components/PhotoCard";

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            liked
            userId
        }
    }
`;

const renderProp = ({ loading, error, data }) => {
    console.log("data", data, loading, error);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    const { photo = {} } = data;
    return <PhotoCard {...photo} />;
};

// eslint-disable-next-line react/prop-types
export const PhotoCardWithQuery = ({ id }) => {
    return (
        <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
            {renderProp}
        </Query>
    );
};
