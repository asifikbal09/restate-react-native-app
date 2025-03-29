# ReState Application (React Native)

## Introduction
This project is a fully functional Restate mobile application built using React Native. It enables users to explore and interact with property listings seamlessly, featuring secure Google authentication and user profiles. The application leverages modern tools like Expo SDK 52, Appwrite for backend services, Tailwind CSS for responsive design, and TypeScript for type safety, providing a smooth and scalable solution for real estate transactions on mobile platforms.

## ⚙️ Tech Stack
- Expo
- React Native
- TypeScript
- Nativewind
- Appwrite
- Tailwind CSS

## 🔋 Features
- **Google Authentication:** Users can securely sign in using their Google accounts for a smooth and reliable authentication experience.

- **Home Screen:** A dynamic overview showcasing the latest property listings, with an intuitive search and filtering system to help users find exactly what they're looking for.

- **Explore Section:** Explore a wide variety of properties, all presented in a user-friendly and easy-to-navigate layout.

- **Property Detail View:** Each property has its own detailed page, featuring images, descriptions, and important information for potential buyers or renters.

- **User Profile Management:** Users can easily manage their personal settings, preferences, and saved properties from their profile page.

- **Efficient Data Fetching:** A custom data-fetching solution, inspired by TanStack’s useQuery, ensures that API calls are made efficiently, enhancing the app’s performance.

- **Reusable Code and Scalable Architecture:** The app is designed with reusable code and a clean architecture for easy maintenance and future scalability.

## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
```sh
git clone https://github.com/asifikbal09/restate-react-native-app.git
cd restate-react-native-app
```

### Installation
```sh
npm install
```

### Set Up Environment Variables
Create a new file named `.env.local` in the root of your project and add the following content:
```sh
EXPO_PUBLIC_APPWRITE_ENDPOINT = https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID =
EXPO_PUBLIC_APPWRITE_DATABASE_ID = 
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID = 
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID = 
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID =  
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID =
```
Replace the values with your actual Appwrite credentials. You can obtain these credentials by signing up & creating a new project on the Appwrite website.

### Start the app
```sh
npx expo start
```

Once you run the app, you’ll have several options to open it:

- **Development Build:** Test and debug your app with real-time changes during development.

- **Android Emulator:** Launch the app on an Android emulator for testing.

- **iOS Simulator:** Test the app on an iOS simulator.

- **Expo Go:** Use the Expo Go app to run your project on a physical device during development.

You can start building and editing the app by modifying the files inside the `app `directory. This project utilizes file-based routing to structure the app’s pages.

## Conclusion
This project offers a modern and scalable solution for real estate browsing. With secure authentication, dynamic property listings, and a seamless user experience, it lays a solid foundation for further enhancements. Future improvements could include adding more advanced search features, integrating more third-party services, or expanding the app's capabilities.

