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
        id: { type: GraphQLInt },
        userID: { type: GraphQLInt },
        identifier: { type: GraphQLInt }
    }
});

export const Ads = new GraphQLObjectType({
    name: 'Ads',
    fields:{
        ad_id: { type: GraphQLInt },
        ad_advertiserPrice: { type: GraphQLInt },
        ad_content: { type: GraphQLString },
        ad_title:{ type: GraphQLString },
        ad_advertiserID:{ type: GraphQLInt},
        }
});
