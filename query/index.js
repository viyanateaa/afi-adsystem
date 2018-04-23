import {GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {Advertisers,Ads} from './types';
import {selectAll} from '../db'
const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Advertisers: {
      type: new GraphQLList(Advertisers),
      resolve: () => selectAll('advertisers')
  },
    Ads: {
        type: new GraphQLList (Ads),
        resolve: () => selectAll('ads')
        }
    }
});


export default Query;
