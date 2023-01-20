import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAsync, userData, } from './userSlice';
import { Button, Text, View } from 'react-native';

export function User() {

  const loggedUser = useSelector(userData);
  const dispatch = useDispatch();

  const getProfile = () => {

    //use LoggedUser Info here
    console.log("final", JSON.stringify(loggedUser));
  }

  const updateUser = () => {
    dispatch(updateUserAsync(
      {
        email: "paulo@teamairship.com",
        accessToken: new Date().toString(),
        refreshToken: false,
        gwxBrandIds: 1
      }
    ))
      .then(() => getProfile())
  }

  return (
    <View>
      <View>
        <Button
          title="Update User"
          onPress={() => updateUser()} />
        <Text>{loggedUser.accessToken}</Text>
      </View>
    </View>
  );
}