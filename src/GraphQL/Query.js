import { gql } from '@apollo/client'

const query = {
    pokemons: gql`
        query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
                results {
                    url
                    id
                    name
                    image
                }
            }
        }
    `,
    byName: gql`
        query pokemon($name: String!) {
            pokemon(name: $name) {
                id
                name
                sprites {
                    front_default
                }
                moves {
                    move {
                        name
                    }
                }
                types {
                    type {
                        name
                    }
                }
            }
        }
    `,
}

export default query
