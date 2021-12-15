/* eslint-disable prettier/prettier */
import React, {useState, FC} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

interface AvailableProps {
  availableState:(e:boolean)=>void,
}

const AvailabilitySwitch:FC<AvailableProps> = ({availableState}): JSX.Element => {
  const [isEnabled, setIsEnabled] = useState(true);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch = () => {
    setIsEnabled(prevState => !prevState);
    availableState(isEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Availability</Text>
      <Switch
        trackColor={{false: '#767577', true: '#60A40B'}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default AvailabilitySwitch;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
    opacity: 0.7,
    paddingBottom: 5,
    paddingRight: 10,
  },
});
