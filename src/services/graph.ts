import {ApolloClient, InMemoryCache} from '@apollo/client'

const graphqlClient = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache()
})

export default graphqlClient
