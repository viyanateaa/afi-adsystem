import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import{Advertisers, Ads} from './types';
import { selectAll } from '../db'

export const CreateAdvertisersInput = new GraphQLInputObjectType({
  name: 'CreateAdvertisersInput',
  fields: {
     // id: { type: GraphQLInt },
      userID: { type: GraphQLInt },
      identifier: { type: GraphQLInt }
  }
});

export const CreateAdsInput = new GraphQLInputObjectType({
  name: 'CreateAdsInput',
  fields: {
      //ad_id: { type: GraphQLInt },
      ad_advertiserPrice: { type: GraphQLInt },
      ad_productPrice:{type:GraphQLInt},
      ad_content: { type: GraphQLString },
      ad_title:{ type: GraphQLString },
      ad_advertiserID:{ type: GraphQLString},
  }
});
