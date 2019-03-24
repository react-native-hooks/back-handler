# @rnhooks/back-handler [![Build Status](https://travis-ci.com/react-native-hooks/back-handler.svg?branch=master)](https://travis-ci.com/react-native-hooks/back-handler) [![Maintainability](https://api.codeclimate.com/v1/badges/0a91baa4c70c55b096c1/maintainability)](https://codeclimate.com/github/react-native-hooks/back-handler/maintainability) <a href="https://github.com/pritishvaidya/react-native-hooks/back-handler/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> React Native hook for [Back Handler](https://facebook.github.io/react-native/docs/backhandler#docsNav)

```
import useBackHandler from '@rnhooks/back-handler';

function backhandler () {
  // ... Custom Setup
}

function App() {
  const count = useBackHandler(backhandler);
  
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{`Count: ${count}`}</Text>
    </View>
  );
}
```

### Input
| Name          | Type                | Default | Description                                                                     |
| :------------ | :------------------ | ------: | :-------------------------------------------------------------------------------|
| `backhandler` | `function \ string` | `exit`  | Either provide with custom back handler method or `exit` string to exit the app |


### Output
| Name  | Type   | Default | Description      |
| :---- | :----- | -------:| :----------------|
| count | Number | `0`       | Back press count |


## Contribution
- [@pritishvaidya](mailto:pritishvaidya94@gmail.com) The main author.

## Questions

Feel free to [contact me](mailto:pritishvaidya94@gmail.com) or [create an issue](https://github.com/react-native-hooks/back-handler/issues/new)
