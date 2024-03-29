# Sample React-Native-Web App
# Code architecture followed by 55Tech developers.
This repository showing that how we are using clean code architecture, folder structure, and component reusability.

# Features
Functionality : Work correctly, efficiently, and robustly.

Readability : The primary audience for our code is other developers.

Extensibility : Well-designed code should be extensible as a building block for solving new problems.

Scalability : The code that can scale along with the need of your business.

## Setup instructions

### 1. Install dependencies
```sh
# Clone the example app repo
git clone https://github.com/shivanipandey55/sampleReactNativeWebApp
```
```sh
cd sampleReactNativeWebApp
```
```sh
# Install dependencies
yarn
```
### 2. Start your app 
```sh
# Start on web 
yarn run web 
open http://localhost:8080/
```
```sh
# Start on android 
yarn run android 
```
```sh
# Start on ios
cd ios && pod install 
yarn run ios
```


## Libraries
- [React native web](https://github.com/necolas/react-native-web) - Run React Native components and APIs on the web using React DOM
- [Web pack](https://webpack.js.org/) - Module bundling system.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Easier to write good Redux applications and speeds up development
- [StoryBook](https://storybook.js.org/) - Organizes every UI component and its stories and run it in a separate node process from the app.
  ```sh
  # Start storybook on web 
  yarn storybook
  ```
  ```sh
  # Build storybook for web
  yarn build-storybook
  ```
- [React Native Paper](https://reactnativepaper.com/) - Cross-platform UI kit library containing a collection of customizable and production-ready    components and to support custom themes
- [Reacti18next](https://react.i18next.com/getting-started) - Helps to translate your JSON internationalization files
- [React navigation](https://reactnavigation.org/docs/getting-started/) - Enables to implement navigation functionality
- [Axios](https://www.npmjs.com/package/axios#features)
- [Netinfo](https://github.com/react-native-netinfo/react-native-netinfo) - Helps to get Network Info for Android, iOS and macOS
- [React Native Firebase](https://rnfirebase.io/) - React Native Firebase is the officially recommended collection of packages that brings React Native support for all Firebase services on both Android and iOS apps. (services integrated in the project : performance Monitoring & Crashlytics)
# Config variables
- [react-native-config](https://github.com/luggit/react-native-config) - Module to expose config variables in Android and Ios
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) - for web
