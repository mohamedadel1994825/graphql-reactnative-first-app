import * as React from "react";
import Home from "./src/Home";
import CoffeePage from "./src/CoffeePage";
import { View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
const client = new ApolloClient({
  uri: "https://yq42lj36m9.sse.codesandbox.io/",
});
import gql from "graphql-tag";
const QUERY = gql`
{
    coffee {
        beans {
            key
            name
            price
            blend
            color
            productImage
        }
    }
}
`;
const Stack = createStackNavigator();
const NavCont = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoffeePage" component={CoffeePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default (App = () => {
  return (
    <ApolloProvider client={client}>
      <Query query={QUERY}>
         {({ loading, error, data }) => {
             console.log("data1===================",data) 
            if (loading || error) return <View />
            return <View style={{ flex: 1 }}>
            <NavCont /> 
            </View>
        }}
      </Query>
    </ApolloProvider>
  );
});
