const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

export const Advertisers = new GraphQLObjectType({
    name: 'Advertisers',
    fields: {
        id: { type: GraphQLString},
        userID: { type: GraphQLInt },
        identifier: { type: GraphQLInt }
    }
});

export const Ads = new GraphQLObjectType({
    name: 'Ads',
    fields:{
        ad_id: { type: GraphQLString },
        ad_advertiserPrice: { type: GraphQLInt },
        ad_productPrice: { type: GraphQLInt },
        ad_content: { type: GraphQLString },
        ad_title:{ type: GraphQLString },
        ad_advertiserID:{ type: GraphQLString},///
        }
});
