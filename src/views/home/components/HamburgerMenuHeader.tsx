import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated, Easing, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

const HamburgerMenuHeader = ({ searchEngine, searchText  }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(-300)); // Animación inicial fuera de la pantalla a la izquierda
  const navigation = useNavigation();

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

 
  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: -300, 
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  return (
    <View>
      
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={openMenu}>
            <Icon name="bars" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>App</Text>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#333" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={searchEngine}
          />
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={closeMenu}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={closeMenu}
        >
          <Animated.View style={[styles.menuContainer, { transform: [{ translateX: menuAnimation }] }]}>
            <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
              <Icon name="times" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => { navigation.navigate('RegisterScreen') }}>
              <Text style={styles.menuItem}>Agregar Producto</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6200EE',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  menuContainer: {
    backgroundColor: '#333',
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0, 
    bottom: 0,
    width: 250,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    justifyContent: 'flex-start',
  },
  menuItem: {
    padding: 10,
    fontSize: 18,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

export default HamburgerMenuHeader;
