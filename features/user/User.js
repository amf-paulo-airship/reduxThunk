import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAsync, userData, } from './userSlice';
import { Button, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { getUserProfileAsync, userProfile } from './profileSlice';

export function User() {

  const loggedUser = useSelector(userData);
  const loggedUserProfile = useSelector(userProfile);

  const [history, setHistory] = useState([]);
  const [spin, setSpin] = useState(false);

  const dispatch = useDispatch();

  const updateUser = () => {

    setSpin(true);
    dispatch(updateUserAsync(loggedUser))
      .then(() => dispatch(getUserProfileAsync()))
      .then(() => {
        setHistory(actual => [...actual, new Date().toString()]);
        setSpin(false);
      });
  }

  const Item = ({ item }) => (
    <View key={item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Button
          title="Update User & Get Profile"
          onPress={() => updateUser()} />

        {spin
          ? <ActivityIndicator size="large" color="#00ff00" />
          : <View style={{ margin: 15, borderColor: "black", borderWidth: 2, backgroundColor: "yellow" }}>
            <Text style={{ color: "red" }}>{loggedUserProfile.tokenUsed} (REFRESHED)</Text>
            <Text style={{ color: "blue" }}>{loggedUser.accessToken} (USED)</Text>

            <Text style={{ marginTop: 15, color: "black" }}>{`User Profile: ${loggedUserProfile.first} ${loggedUserProfile.last} (${loggedUserProfile.age} y/o)`}</Text>
          </View>
        }


        <FlatList
          data={history}
          renderItem={({ item }) => <Item item={item} />}
          ListHeaderComponent={() => <Text style={{ alignSelf: 'center' }}>History</Text>}
        />


      </View>
    </View>
  );
}