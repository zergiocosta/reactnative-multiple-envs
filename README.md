# React Native - Multiple Environments

### POC for setting multiple environments in React Native

Setting up your environment:

```sh
  # installing dependencies
  $ yarn
```

#### iOS

Running:

```sh
  # local env
  $ yarn ios

  # homolog env
  $ yarn ios:homolog

  # production env
  $ yarn ios:production
```

[Building](#working-with-builds):

```sh
  # local env
  $ yarn build:ios

  # homolog env
  $ yarn build:ios:homolog

  # production env
  $ yarn build:ios:production
```

#### Android

Running:

```sh
  # local env
  $ yarn android

  # homolog env
  $ yarn android:homolog

  # production env
  $ yarn android:production
```

[Building](#working-with-builds):

```sh
  # local env
  $ yarn build:android

  # homolog env
  $ yarn build:android:homolog

  # production env
  $ yarn build:android:production
```


### Working with builds

Before creating a build, you must setup your own build config in `./package.json`

```json
  // Line 19:
  "_build:ios": "react-native bundle --platform ios ..."

  // Line 29:
  "_build:android": "react-native bundle --platform android ..."
```