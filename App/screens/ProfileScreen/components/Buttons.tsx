/* eslint-disable prettier/prettier */
import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {red} from '../../../config/colors';

interface ButtonProps {
  iconLabel: string;
  label: string;
  setAvaliable: (e: boolean) => void,
  logout: () => void
}

const Button: FC<ButtonProps> = ({iconLabel, label, setAvaliable, logout}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
    setAvaliable(isEnabled)
  };

  let extraButton = (
    <Switch
      trackColor={{false: '#767577', true: red}}
      thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.Extra}
    />
  );

  if (iconLabel !== 'bell-off') {
    extraButton = <TouchableWithoutFeedback onPress={logout}>
                      <Icon name="chevron-right" size={30} color={'#000'} />
                  </TouchableWithoutFeedback>;
  }

  let button = 
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={styles.container}>
        <View style={styles.Main}>
          <View style={styles.IconContainer}>
            <Icon name={iconLabel} color="#fff" size={20} />
          </View>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View style={styles.Extra}>{extraButton}</View>
      </View>
    </TouchableWithoutFeedback>

  if(iconLabel !== 'bell-off'){
    button = <TouchableWithoutFeedback onPress={logout}>
        <View style={styles.container}>
          <View style={styles.Main}>
            <View style={styles.IconContainer}>
              <Icon name={iconLabel} color="#fff" size={20} />
            </View>
            <Text style={styles.text}>{label}</Text>
          </View>
          <View style={styles.Extra}>{extraButton}</View>
        </View>
      </TouchableWithoutFeedback>
  }

  return (
    <>
      {button}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  IconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
  },
  Main: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Extra: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default Button;
