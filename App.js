/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TabMenu(props) {
  return <Text style={{ color: '#b9c2d2' }}>{props.text}</Text>
}

function ActiveTabMenu(props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: '#38b6f6' }}>{props.text}</Text>
      <View style={{ marginTop: 7, width: 8, height: 8, borderRadius: 4, backgroundColor: '#38b6f6' }} />
    </View>
  );
}

function Card(props) {
  return (
    <View style={{ flexDirection: 'row', height: 120, borderRadius: 20, backgroundColor: '#f7f7f9', marginBottom: 15 }}>
      <Image
        source={{ uri: props.imageUrl }}
        style={{ width: '45%', borderRadius: 20, height: '100%', backgroundColor: 'black' }}
      />
      <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
        <Text style={{ color: '#162449', fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="star" color="#fdaa5c" style={{ marginRight: 7 }} />
          <Icon name="star" color="#fdaa5c" style={{ marginRight: 7 }} />
          <Icon name="star" color="#fdaa5c" style={{ marginRight: 7 }} />
          <Icon name="star" color="#fdaa5c" style={{ marginRight: 7 }} />
          <Icon name="star" color="#fdaa5c" style={{ marginRight: 7 }} />
          <Text style={{ color: '#fdaa5c', marginLeft: 5 }}>4.5</Text>
        </View>
        <Text style={{ color: '#99a8bd' }}>{props.description}</Text>
      </View>
    </View>
  )
}

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ paddingHorizontal: 30, paddingTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#c2c2c2' }}>Hai, Ulul!</Text>
          <Image
            source={require('./assets/developer.png')}
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#e8e8e8',
              borderRadius: 30
            }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 43, color: '#122046' }}>Mau</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 43, color: '#122046' }}>Liburan Kemana, bos?</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40 }}>
          <ActiveTabMenu text="Indonesia" />
          <TabMenu text="Jepang" />
          <TabMenu text="Amerika" />
          <TabMenu text="Afrika" />
        </View>
        <View style={{ marginTop: 30 }}>
          <Card
            imageUrl="https://cdn-media-1.freecodecamp.org/images/1*zVDcaM6mqhi9m0LP_Sq4Ag.jpeg"
            title="Bali"
            description="Lorem ipsum dolor amet sit. Lorem ipsum dolor"
          />
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgt-twcpWMCw82eJ0wHKO1-tNAYGMwvPxVe1kcek1zbUff0UFC&s"
            title="Bali"
            description="Lorem ipsum dolor amet sit. Lorem ipsum dolor"
          />
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Tmu741L14Mqu2M0UFC7cV2UGQIBTjQhUEKqOyA8p3vqy6Z-Zfw&s"
            title="Bali"
            description="Lorem ipsum dolor amet sit. Lorem ipsum dolor"
          />
          <Card
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1A0svN1cG1MthqafUmmhU0JluYcgWZbM8SQRrGjpKawUqW8-P&s"
            title="Bali"
            description="Lorem ipsum dolor amet sit. Lorem ipsum dolor"
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
