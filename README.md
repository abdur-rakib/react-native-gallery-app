# Gallery App

Gallery app that displays a list of photos, built with [React Native](https://reactnative.dev/) and [Unsplash API](https://unsplash.com/documentation#list-photos)

## Screenshots

[![Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-11.png](https://i.postimg.cc/zBt9xqG1/Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-11.png)](https://postimg.cc/k6S143Sj)[![Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-45.png](https://i.postimg.cc/FzcXz2h5/Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-45.png)](https://postimg.cc/ctsb5kKX)
[![Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-56.png](https://i.postimg.cc/q7gYg9Gb/Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-08-56.png)](https://postimg.cc/KKSQHpwB)[![Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-10-29.png](https://i.postimg.cc/595P94V9/Simulator-Screen-Shot-i-Phone-13-2022-05-27-at-20-10-29.png)](https://postimg.cc/236d2fyg)

## Tech Stack

- [React-Native](https://github.com/facebook/react-native)
- [React-Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-Query](https://react-query.tanstack.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/abdur-rakib/react-native-gallery-app
```

Go to the project directory

```bash
$ cd react-native-gallery-app
```

Install dependencies

```bash
$ yarn
```

Run on ios

```bash
$ cd ios && pod install && cd ..
$ yarn ios
```

Run on android

```bash
$ yarn android
```

## Features

- Display list of photos (got from unsplash api) as a gallery
- Press single photo to view fullscreen of this photo
- User can zoom in/out images
- The user has an infinite scroll on the gallery screen
- Pull to refresh images
- Cache images
- Cache API response
- Allow saving photos in JPEG format to the local gallery
- Allow sharing the photo

## Upcoming Features

- Allow user to scroll images from left to right & right to left
- Implement progressive image loading
- Add facility to search images
- Display images category wise

## License

[MIT](https://github.com/abdur-rakib/react-native-gallery-app/blob/main/LICENSE)

## Feedback

If you have any feedback, please feel free to reach out to me at abdurrakib961@gmail.com
