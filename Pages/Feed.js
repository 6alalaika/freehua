import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import styles from '../Styles/stylesFeed';
import BookCard from '../Assets/BookCard';
import {getFeedByGenres, searchBookTitle} from '../Scripts/Booker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as Animatable from 'react-native-animatable';

export default function Feed({navigation}) {
  const [isFeedEmpty, setIsFeedEmpty] = useState(true);
  const [isOffline, setIsOffline] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searches, setSearches] = useState();
  const [feed, setFeed] = useState();
  
  const genres = [
    ['adventure', 'xianxia', 'romance' ],
    ['Aventura ⚔️', 'Cultivo (Xianxia) 🍃','Romance ❤️', ]
  ];

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const fetchedFeed = await getFeedByGenres(genres[0]);

        if (fetchedFeed === undefined) {
          const rescuedFeed = await EncryptedStorage.getItem('localFeed');
          setFeed(JSON.parse(rescuedFeed));
          setIsFeedEmpty(false);
          setIsOffline(true);
          return;
        }

        setIsOffline(false);
        setFeed(fetchedFeed);
        setIsFeedEmpty(false);
        await EncryptedStorage.setItem(
          'localFeed',
          JSON.stringify(fetchedFeed),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeed();
  }, []);

  

  const BookRoll = ({bookcase, title}) => {
    return (
      <Animatable.View 
      style={styles.strip}
      animation="bounceIn"
      useNativeDriver
      >
           
      
        <Text style={styles.genre}>{title}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flexDirection: 'row'}}>
          {bookcase !== [] &&
            bookcase !== undefined &&
            bookcase.map((book, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Book', {source: JSON.stringify(book)})
                }
                key={index}>
                <BookCard
                  place={index}
                  title={book.book_title}
                  cover={book.cover_url}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </Animatable.View>
    );
  };

  const search = async () => {
    if (inputText === '') {
      setIsSearching(false);
      return;
    }
    try {
      setIsSearching(true);
      const searchedBooks = await searchBookTitle(inputText);
      console.log(JSON.stringify(searchedBooks));
      if (searchedBooks) setSearches(searchedBooks);
    } catch (error) {
      alert(error);
    }
  };
  
 

  

  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.box_feed}>
      <View style={styles.box_search_header}>
        {(!isOffline && (
          <>
            <TextInput
              style={styles.text_search}
              onChangeText={newInputText => setInputText(newInputText)}
              value={inputText}
              placeholder='Pesquisar...'
            />
            <TouchableOpacity style={styles.icon_search} onPress={search}>
              <Ionicons name="search" color={"white"} size={32}/>
            </TouchableOpacity>

            

            
          </>
        )) || (
          <Text style={{color: 'orange', fontStyle: 'italic', fontSize: 36}}>
            Modo Local
          </Text>
        )}
      </View>
      
        {!isFeedEmpty &&
          !isSearching &&
          feed.map(
            (genre, index) =>
              !genre.isEmpty && (
                <BookRoll
                  key={index}
                  bookcase={genre.data}
                  title={genres[1][index]}
                />
              ),
          )}
        {isSearching && <BookRoll bookcase={searches} title={inputText}/>}
        
      </ScrollView>
    </View>
  );
}
