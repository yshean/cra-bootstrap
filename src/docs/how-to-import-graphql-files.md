https://facebook.github.io/create-react-app/docs/loading-graphql-files

Then, whenever you want to load .gql or .graphql files, import the loader from the macro package:

import { loader } from 'graphql.macro';

const query = loader('./foo.graphql');
