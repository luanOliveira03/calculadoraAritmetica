import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 60,
    flex: 2,
  },
  buttonOther: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    minHeight: 30,
    flex: 2,
  },
  textButton: {
    color: "black",
    fontSize: 20,
  },
});