/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Redux imports
import {useSelector} from 'react-redux';

//Icons
import Icons from 'react-native-vector-icons/Feather';
import Icons2 from 'react-native-vector-icons/Ionicons';

//components
import {
  HomeScreenContainer,
  ChatSceenContainer,
  ProfileScreenContainer,
  SearchScreenContainer,
  SecondScreenContainer
} from '../../index';
import {ChatView} from '../../components';

//ROUTES
import {HOME, CHATS, SEARCH, PROFILE} from '../ROUTE';

const {height} = Dimensions.get('window');

const Home = () => {
  return <HomeScreenContainer />;
};

const Profile = () => {
  return <ProfileScreenContainer />;
};

const Chat = () => {
  return <ChatSceenContainer />;
};

const Search = () => {
  return <SearchScreenContainer />;
};

const SecondScreen= () => {
  return <SecondScreenContainer />
}

const Tab = createBottomTabNavigator();

const Container = () => {
  const RouteName = useSelector((state: any) => state.chatReducer.DefaultRoute);
  
  return (
    <View style={{height: height}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {borderTopWidth: 0, elevation: 0},
          }}
          initialRouteName={RouteName}>
          <Tab.Screen
            name={HOME}
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="home"
                  size={25}
                  color={focused ? '#000' : 'grey'}
                />
              ),
            }}
          />

          <Tab.Screen
            name={'SECOND_SCREEN'}
            component={SecondScreen}
            options={{
              tabBarButton: () => null
            }}
          />

          <Tab.Screen
            name={SEARCH}
            component={Search}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="search"
                  size={25}
                  color={focused ? '#000' : 'grey'}
                />
              ),
            }}
          />

          <Tab.Screen
            name={CHATS}
            component={Chat}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons2
                  name="chatbubble-outline"
                  size={25}
                  color={focused ? '#000' : 'grey'}
                />
              ),
            }}
          />

          <Tab.Screen
            name={PROFILE}
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => (
                <Icons
                  name="user"
                  size={25}
                  color={focused ? '#000' : 'grey'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Navigator = () => {
  const openChat = useSelector((state: any) => state.chatReducer.user);
  return <>{openChat ? <ChatView user={openChat} /> : <Container />}</>;
};

export default Navigator;
