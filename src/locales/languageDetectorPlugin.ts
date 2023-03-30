import * as RNLocalize from "react-native-localize";

const languageDetectorPlugin = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async function () {
    try {
      return RNLocalize.getLocales()[0].languageCode;
    } catch (error) {
      console.log("Error reading language", error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      console.info(language);
    } catch (error) {}
  },
};

export default languageDetectorPlugin;
