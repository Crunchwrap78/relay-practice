import mongoose from 'mongoose';
import graphql from 'graphql';
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import PostType from './post_type';
const Post = mongoose.model('post');


const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields: () => ({
    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find({});
      }
    },
    post: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Song.findById(id);
      }
    }
  });
});

export default RootQuery;
