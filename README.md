# Job Board App

A comprehensive React Native mobile application built with Expo that serves as an interactive job board platform. Users can explore job opportunities, apply advanced filters, view detailed job information, and submit applications seamlessly.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [App Evolution](#app-evolution)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Deployment](#deployment)


## 🎯 Overview

This job board app is designed to provide a user-friendly interface for job seekers to discover opportunities worldwide. Built as part of the ALX ProDev Frontend Engineering program capstone project, it demonstrates modern mobile development practices including state management, responsive design, and accessibility.

The app uses simulated job data for development purposes and allows users to filter results by category, location (global cities), and experience level. Detailed job views include sharing capabilities, and users can submit applications through validated forms.

## ✨ Features

### 🔍 Job Listings
- **Simulated Data Handling**: Mock job postings with loading states and error handling for development
- **Responsive Grid Layout**: Optimized display for various screen sizes
- **Skeleton Loading**: Smooth loading experience with placeholder components

### 🎛️ Advanced Filtering
- **Category Filtering**: Browse jobs by industry sectors
- **Global City Locations**: Filter by major cities worldwide
- **Experience Level**: Entry-level, Mid-level, and Senior positions
- **Real-time Updates**: Instant filter application with Context API state management

### 📄 Job Details
- **Comprehensive Information**: Full job descriptions, requirements, and company details
- **Sharing Functionality**: Share job opportunities via native sharing (using `expo-sharing`)
- **Responsive Design**: Optimized layouts for mobile viewing

### 📝 Application Submission
- **Accessible Forms**: WCAG-compliant form components with validation
- **File Attachments**: Document picker integration for resumes/CVs
- **Real-time Validation**: Immediate feedback on form inputs
- **Success/Error Handling**: Clear user feedback for submission status

## 🏗️ App Evolution

The development of this job board app followed a structured, iterative approach aligned with mobile development best practices:

### Phase 1: Planning and Setup
- **Requirement Analysis**: Defined core features and user stories
- **Architecture Design**: Established modular structure with components, screens, hooks, and utils
- **Project Initialization**: Set up Expo project with TypeScript, navigation, and essential dependencies
- **Deliverable**: Functional project skeleton with basic navigation

### Phase 2: Core Development
- **Data Simulation**: Implemented mock data handling with error handling and loading states
- **State Management**: Utilized Context API for efficient filter state management
- **UI Components**: Built reusable components (JobCard, FilterBar, ApplicationForm) with responsive design
- **Form Implementation**: Created accessible job application forms with validation
- **Deliverable**: Fully functional app with all core features implemented

### Phase 3: Testing and Optimization
- **Unit Testing**: Jest tests for components, hooks, and utilities (targeting 80%+ coverage)
- **Integration Testing**: React Native Testing Library for component interactions
- **End-to-End Testing**: Detox for full user flow simulation
- **Performance Optimization**: Image lazy loading, bundle optimization, and accessibility audits
- **Deliverable**: Tested, optimized app ready for review

### Phase 4: Deployment and Review
- **App Store Deployment**: Built and submitted via Expo Application Services (EAS)
- **Code Review**: Final documentation updates and user acceptance testing
- **Deliverable**: Live app with demo video and presentation materials

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/alx-project-nexus.git
   cd alx-project-nexus/job-board-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   Key dependencies include:
   - `expo-sharing`: For native sharing functionality
   - `axios`: HTTP client (currently used for mock data simulation)
   - `@react-navigation/native`: Navigation framework
   - `@react-native-async-storage/async-storage`: Local storage
   - `expo-document-picker`: File selection for applications
   - `expo-location`: Location services for city filtering

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/emulator**
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`
   - **Web**: `npm run web`

### Environment Configuration

For development with mocked data, environment variables are not required. When integrating with a real backend API, create a `.env` file in the root directory:

```env
API_BASE_URL=https://api.example.com
EXPO_PUBLIC_API_KEY=your_api_key
```

## 📱 Usage

1. **Browse Jobs**: View the latest job listings on the home screen
2. **Apply Filters**: Use the filter bar to narrow down jobs by category, city, or experience
3. **View Details**: Tap on any job card to see full details and share options
4. **Apply**: Fill out the application form and submit your candidacy

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Add tests** for new functionality
5. **Commit with conventional format**
   ```bash
   git commit -m "feat: add new filtering option"
   ```
6. **Push and create a Pull Request**

## 🧪 Testing

### Running Tests

```bash
# Unit tests with coverage
npm test

# End-to-end tests
npm run detox:build
npm run detox:test
```

### Test Structure

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Full user flow simulation

## 🚢 Deployment

### Expo Application Services (EAS)

1. **Configure EAS**
   ```bash
   eas build:configure
   ```

2. **Build for production**
   ```bash
   eas build --platform android
   eas build --platform ios
   ```

3. **Submit to stores**
   ```bash
   eas submit --platform android
   eas submit --platform ios
   ```

---

**Built with ❤️ as part of ALX ProDev Frontend Engineering Program**


