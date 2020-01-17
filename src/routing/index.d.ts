// https://stackoverflow.com/questions/43058801/typescript-path-mapping-for-react-native-android-ts-and-ios-ts-modules/43531355#43531355
// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.
import DefaultIos from './index.native';
import * as ios from './index.native';
import DefaultAndroid from './index.web';
import * as android from './index.web';

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from './index.native';
export default DefaultIos;
