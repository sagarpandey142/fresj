// LinkedInPage.js

import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { UpdateProfile } from "../../../services/operations/ProfileHandler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DecodedTokenHandler } from '../../../services/operations/generate&verifyOTP';
import { FindByEmail } from "../../../services/operations/ProfileHandler";
import  tw from 'twrnc';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const LinkedInPage = () => {
    const [linkedin, setLinkedin] = useState('');

    async function handleUpdate() {
        try {
         
          const token = await AsyncStorage.getItem('token');
          const decodedEmail = await DecodedTokenHandler(token);
          const Email = decodedEmail.data.Email;
          const User_Profile = await FindByEmail(Email);
      
          User_Profile.data.response.LinkedIn = linkedin; 
          await UpdateProfile({ data: User_Profile.data.response });
         
          navigation.navigate('Profile');
        } catch (error) {
          console.error('Error updating skills:', error);
        }
      }
      

    return (
      <View style={tw`h-full m-5 mt-18`}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tw`text-2xl font-bold m-4`}>Update LinkedIn URL:</Text>
            <TextInput
                value={linkedin}
                onChangeText={setLinkedin}
                placeholder="Enter LinkedIn URL"
                style={tw`m-4 text-lg border border-gray-300 px-2 py-1 rounded-full`}
            />
            <View style={tw`mt-4 mx-auto mt-20 mb-8 border-t border-gray-300 w-full`}>
                <TouchableOpacity onPress={handleUpdate}>
                  <Text style={tw`bg-green-600 p-3 px-6 rounded-full text-white font-bold text-center`}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LinkedInPage;
