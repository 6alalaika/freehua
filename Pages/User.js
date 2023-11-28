import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ScrollView, View, Image, Text} from 'react-native';
import styles from '../Styles/stylesUser';
import {getUserData, getUserHistory} from '../Scripts/Logger';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function User({navigation, route}) {
  const [userData, setUserData] = useState([]);
  const [userHistory, setUserHistory] = useState([]);
  const [historyDropped, setHistoryDropped] = useState(false);
  const [userBiography, setUserBiography] = useState('');
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tookUser = await getUserData();
          console.log(tookUser);
        if (tookUser === undefined || tookUser.length === 0) {
          const rescuedUserData = await EncryptedStorage.getItem('localUser');
          setUserData(JSON.parse(rescuedUserData));
          setHasUser(true);
          return;
        }
        setUserData(tookUser);
        setHasUser(true);
        await EncryptedStorage.setItem('localUser', JSON.stringify(tookUser));
        if (tookUser.user_biography !== '')
          setUserBiography(tookUser.user_biography);
      } catch (error) {
        alert(error);
        setHasUser(false);
      }
    };

    fetchUser();
  }, []);

  const toggleHistory = async () => {
    if (historyDropped) {
      setUserHistory([]);
      setHistoryDropped(false);
      return;
    }

    try {
      const takenHistory = await getUserHistory();
        if (takenHistory === undefined) return;
      setUserHistory(takenHistory);
      setHistoryDropped(true);
    } catch (error) {
      alert(error);
    }
  };

  const UserProfile = () => {
    return (
      <>
        <View style={styles.front}>
          <Image style={styles.picture} source={{uri: userData.user_picture}} />
          <Text style={styles.username}>{userData.user_name}</Text>
          <Text style={styles.karma}>{userBiography}</Text>
        </View>
        <View style={styles.box_history}>
          <TouchableOpacity
            onPress={() => toggleHistory()}
            style={styles.box_history_header_update}>
            <Text style={styles.text_history_header}>Ver Histórico</Text>
          </TouchableOpacity>
          <HistoryEntries />
        </View>
      </>
    );
  };

  const HistoryEntries = () => {
    return (
      userHistory.length > 0 &&
      userHistory.map((entry, index) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Book', {
              source: JSON.stringify(entry.chapter_parent_data),
            });
          }}
          style={styles.box_entry}
          key={index}>
          <Text style={styles.text_entry}>
            Capítulo {entry.chapter_order} de {entry.chapter_parent_name}
          </Text>
        </TouchableOpacity>
      ))
    );
  };

  return <ScrollView>{hasUser && <UserProfile />}</ScrollView>;
}
