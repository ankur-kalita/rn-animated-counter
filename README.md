# Counter with Animations - React Native App

A simple counter app built with React Native and Expo that features animated number display when incrementing or decrementing.

## Features

- **Numeric Counter Display**: Shows the current count value
- **Increment Button**: Increases the counter by 1
- **Decrement Button**: Decreases the counter by 1
- **Reset Button**: Resets the counter to 0
- **Animations**: Scale and fade animations play whenever the counter value changes

## Tech Stack

- **React Native**: 0.81.5
- **Expo SDK**: 54
- **React**: 19.1.0

## Project Structure

```
/counter
  /src
    /components
      CounterDisplay.js    # Animated counter display component
    /screens
      Home.js              # Main screen with buttons and counter
  App.js                   # Entry point
  package.json
  README.md
```

## How to Run

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Expo CLI (optional, npx works too)
- Expo Go app on your mobile device (for testing on physical device)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd counter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run the app:
   - **On Physical Device**: Scan the QR code with Expo Go app
   - **Android Emulator**: Press `a` in the terminal
   - **iOS Simulator**: Press `i` in the terminal (macOS only)
   - **Web Browser**: Press `w` in the terminal

## Dependencies

No additional dependencies required beyond the default Expo blank template:

- `expo`: ~54.0.25
- `expo-status-bar`: ~3.0.8
- `react`: 19.1.0
- `react-native`: 0.81.5

## Assignment Checklist

- [x] Display numeric counter
- [x] Increment button works
- [x] Decrement button works
- [x] Animation plays on counter change (scale + fade)
- [x] Clean folder structure
- [x] Readable, small components

## Author

Built as part of React Native Assignment C - Counter with Animations
