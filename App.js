import * as React from "react";
import Home from "./src/Home";
import CoffeePage from "./src/CoffeePage";
import { View, Text, Image, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
const client = new ApolloClient({
  uri: "https://yq42lj36m9.sse.codesandbox.io/",
});
import gql from "graphql-tag";
import { FlatList } from "react-native-gesture-handler";
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
          console.log("data1===================", data);
          if (loading || error) return <View />;
          return (
              // {/* <NavCont />  */}
              <>
                <FlatList
                style={{flex:1,marginTop:20}}
                  data={data.coffee.beans}
                  keyExtractor={(item) => item.key + ""}
                  renderItem={({ item, index }) => (
                    <View style={{ width:'100%', backgroundColor:'green',marginBottom:20}}>
                                            <Text style={{fontSize:30,color:'white',textAlign:'center'}}>hello</Text>
                      <Text style={{fontSize:30,color:'white',textAlign:'center'}}>{item.name}</Text>
                      <Text  style={{fontSize:30,color:'white',textAlign:'center'}}>{item.price}</Text>
                      <Text  style={{fontSize:30,color:'white',textAlign:'center'}}>{item.blend}</Text>
                      <Text  style={{fontSize:30,color:'white',textAlign:'center'}}>{item.color}</Text>
                      <Image style={{width:300,height:100,alignSelf:'center'}}
                      source={{uri:item.productImage}}
                      />
                    </View>
                  )}
                />
                </>
          );
        }}
      </Query>
    </ApolloProvider>
  );
});
