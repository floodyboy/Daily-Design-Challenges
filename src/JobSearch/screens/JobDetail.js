import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export const Requirements = [
  'Exceptional communication skills and team-working skills',
  'Know the principles of animation and you can create high fidelity prototypes',
  'Direct experience using Adobe Premiere, Adobe After Effects & other tools used to create videos, animations e.t.c',
  'Good UI/UX knowledge',
];

const JobDetail = props => {
  const job = props.navigation.getParam('job');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <View>
            <Ionicons
              name="ios-arrow-back"
              color="black"
              size={30}
              onPress={() => props.navigation.goBack()}
            />
          </View>
          <View style={styles.company}>
            <Text style={styles.name}>{job.company}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.scrollerTop} />
        <View style={styles.logo}>
          <Image style={{ height: 55, width: 55 }} source={job.logo} />
        </View>
        <View style={styles.job}>
          <Text
            style={{ fontSize: 30, fontWeight: '600', textAlign: 'center' }}>
            {job.job}
          </Text>
        </View>
        <Text style={styles.location}>{job.location}</Text>
        <View style={styles.metadata}>
          <View style={styles.type}>
            <Text
              style={{ fontSize: 18, fontWeight: '500', color: job.fontColor }}>
              {job.type}
            </Text>
          </View>
          <Text style={{ fontSize: 38, fontWeight: '300' }}>${job.pay}/h</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.requirementHeading}>Requirements</Text>
          <View>
            <ScrollView>
              {Requirements.map(requirement => (
                <View style={styles.requirement}>
                  <View>
                    <Entypo name="dot-single" size={20} color="#616161" />
                  </View>
                  <Text style={styles.requirementText}>{requirement}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.ctaContainer}>
          <View style={styles.callToAction}>
            <View style={styles.like}>
              <Ionicons name="md-heart-empty" size={26} color="#FF4243" />
            </View>
            <View style={styles.apply}>
              <Text style={styles.applyText}>Apply Now</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default JobDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 55,
    backgroundColor: '#eeeeee',

    height: 160,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginTop: -40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 10,
    backgroundColor: 'white',
  },
  scrollerTop: {
    width: '18%',
    backgroundColor: '#eeeeee',
    height: 6,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 40,
  },
  job: {
    width: '70%',
    alignSelf: 'center',
  },
  company: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  location: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    fontWeight: '500',
    marginVertical: 15,
  },
  metadata: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  type: {
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  requirementHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 25,
    marginVertical: 20,
  },
  requirement: {
    marginLeft: 25,
    marginRight: 40,
    flexDirection: 'row',
    marginBottom: 15,
  },
  requirementText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#616161',
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  callToAction: {
    marginHorizontal: 40,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  like: {
    backgroundColor: '#eeeeee',
    width: 60,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apply: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FF4243',
    height: 45,
    justifyContent: 'center',
  },
  applyText: {
    fontSize: 22,
    fontWeight: '500',
    paddingHorizontal: 40,
    color: 'white',
  },
});
