import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "white",
  },
  resultText: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
  },
  historyText: {
    color: "black",
    fontSize: 30,
    marginRight: 10,
    alignSelf: 'flex-end',
  }
});