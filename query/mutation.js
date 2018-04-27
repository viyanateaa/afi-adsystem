import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { Advertisers, Ads } from './types';
import {CreateAdvertisersInput, CreateAdsInput} from './input';
import { createAdvertisers,createAds } from '../db';

 const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createAdvertisers: {
      type: Advertisers,
      args: {
        input: {
          type: CreateAdvertisersInput
        },
      },
      resolve: (_,args)=> createAdvertisers(args.input)

    },
    createAds: {
      type: Ads,
      args: {
        input: {
          type: CreateAdsInput
        },
      },
      resolve: (_,args)=> createAds(args.input)
    },
  }
});

 export default Mutation;
