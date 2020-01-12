# Cycle expo native starter kit

A starter kit with:
 - Cycle.js for the fractal component architecture. Following [manyverse](https://github.com/staltz/manyverse)
 - Expo for the development tooling, and React Native and React Native Web to [Write Once, Render Everywhere](https://github.com/peggyrayzis/asburyagile-universal-components).
 - [Expo Native Starter Kit](https://github.com/codersera-repo/expo-native-starter-kit) to allow developing ejected apps keeping the non-ejected tooling. Note that this is a fairly new project.

## Getting Started

This is just glue for existing technologies. You'll need to refer to the documentation for the [Expo Native Starter Kit](https://github.com/codersera-repo/expo-native-starter-kit).

```
npm i
npm run init # configure Expo Native Starter Kit (app name without dashes)
npm run web  # start the web dev build
npm run ios
```

## Notes

- I haven't tested this in native mode yet.
- Note that this doesn't use `cycle-react-native` which I believe is not the recommended way to go anymore, if the [manyverse](https://github.com/staltz/manyverse) code from @satlz is an indication.
