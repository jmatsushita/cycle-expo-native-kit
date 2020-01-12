# Cycle expo native starter kit

A starter kit with:
 - Cycle.js for the fractal component architecture. Following [manyverse](https://github.com/staltz/manyverse) in how react-native is setup.
 - Expo for the development tooling, and React Native and React Native Web to [Write Once, Render Everywhere](https://github.com/peggyrayzis/asburyagile-universal-components).
 - [Expo Native Starter Kit](https://github.com/codersera-repo/expo-native-starter-kit) to allow developing ejected apps keeping the non-ejected tooling. Note that this is a fairly new project.

## Getting Started

```bash
npm i
npm run web  # start the web dev build
npm run ios  # start the ios simulator
```

This is just a light wrapper template for existing technologies. You'll need to refer to the documentation for the [Expo Native Starter Kit](https://github.com/codersera-repo/expo-native-starter-kit). A few commands you're likely to need:

```bash
npm run init # configure your app name (without dashes!) and slug. This will only work once...
npm run ios-native # switch to ejected mode.
npm run ios-expo # switch back to expo mode.
```

## Notes

- I haven't tested this in native mode yet.
- Note that this doesn't use `cycle-react-native` which I believe is not the recommended way to go anymore, if the [manyverse](https://github.com/staltz/manyverse) code from @satlz is an indication. https://github.com/cyclejs/react-native/issues/17
