import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        description
        gallery
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GetCategory = (id) => {
  return gql`
  query {
    category(input:{title: \"${id}\"}){
      name
    products{
      id
      name
      inStock
      description
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
    }
  }
  `;
};

export const GetProduct = (id) => {
  return gql`
  query {
    product(id:\"${id}\"){
      id
      name
      inStock
      category
      description
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      brand
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
    }
  `;
};
