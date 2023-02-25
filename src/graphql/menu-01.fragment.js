import { graphql } from "gatsby";

export const query = graphql`
    fragment Menu01 on Menu {
        id
        text
        path
    }
`;
