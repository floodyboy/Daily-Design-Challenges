import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { SectionHeader, streams } from './HomePage';

const Details = props => {
  const game = props.navigation.getParam('game');
  const streams = props.navigation.getParam('streams');
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'red', height: '55%', width: '100%' }}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={game.image}>
          <LinearGradient
            ref={r => (this.gradiant = r)}
            locations={[0, 1.0]}
            colors={['rgba(0,0,0,0.20)', 'rgba(10,9,40,0.9)']}
            style={styles.linearGradient}>
            <View style={styles.headerContainer}>
              <View style={styles.navigationRow}>
                <Ionicons
                  onPress={() => props.navigation.goBack()}
                  name="ios-arrow-round-back"
                  size={50}
                  color="white"
                />
                <Ionicons
                  onPress={() => props.navigation.goBack()}
                  name="ios-search"
                  size={35}
                  color="white"
                />
              </View>
              <View
                style={{
                  height: '50%',
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.tags}>
                    <Text style={styles.tagsText}>FPS</Text>
                  </View>
                  <View style={{ ...styles.tags, width: 90 }}>
                    <Text style={styles.tagsText}>Shooter</Text>
                  </View>
                </View>
                <Text style={styles.name}>{game.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.metadata}>
                    <MaterialIcons name="person" size={20} color="#bbdefb" />
                    <Text style={styles.followersText}>10.7 M Followers</Text>
                  </View>
                  <View style={styles.totalViewers}>
                    <Ionicons name="md-eye" size={20} color="#bbdefb" />
                    <Text style={styles.totalViewersText}>
                      {game.views} Viewers
                    </Text>
                  </View>
                </View>
                <View style={styles.followingButtonRow}>
                  <View style={styles.followingButton}>
                    <Text style={styles.buttonText}>Following</Text>
                  </View>
                  <Entypo
                    name="dots-three-vertical"
                    size={30}
                    color="#bbdefb"
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, backgroundColor: '#010022' }}>
        <SectionHeader name="Top Live Channels" />
        {streams.map(stream => (
          <View style={{ marginHorizontal: 25, flexDirection: 'row' }}>
            <View style={styles.channelsContainer}>
              <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={stream.image}>
                <View style={styles.liveButton}>
                  <FontAwesome name="dot-circle-o" size={18} color="red" />
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flexGrow: 1, flex: 1 }}>
              <Text style={styles.streamTitle}>{stream.description}</Text>
              <View style={styles.streamViews}>
                <Ionicons name="md-eye" size={20} color="#bbdefb" />
                <Text style={styles.streamViewsText}>
                  {stream.views} Viewers
                </Text>
              </View>
              {/* <Text style={styles.streamer}>@{stream.name}</Text> */}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 25,
    paddingTop: 50,
    justifyContent: 'space-between',
    height: '100%',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  navigationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    paddingVertical: 3,
    borderRadius: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#bbdefb',
    marginRight: 20,
  },
  tagsText: {
    color: '#bbdefb',
    fontWeight: '600',
  },
  name: {
    fontSize: 45,
    fontWeight: '700',
    marginVertical: 10,
    color: 'white',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followersText: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: '500',
    color: '#bbdefb',
  },
  totalViewers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  totalViewersText: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: '500',
    color: '#bbdefb',
  },
  followingButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  followingButton: {
    backgroundColor: '#3643FF',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    paddingVertical: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  channelsContainer: {
    width: 180,
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  liveButton: {
    flexDirection: 'row',
    marginLeft: 15,
    paddingTop: 75,
  },
  liveText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    marginLeft: 5,
  },
  streamTitle: {
    color: 'white',
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10, //change to 5 if you include streamer name
  },
  streamViews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 5,
  },
  streamViewsText: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: '500',
    color: '#bbdefb',
  },
  streamer: {
    fontSize: 15,
    marginLeft: 15,
    fontWeight: '500',
    color: '#bbdefb',
    marginBottom: 5,
  },
});
