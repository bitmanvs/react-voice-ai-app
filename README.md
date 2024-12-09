# React-Voice-AI-App

React-Voice-AI-APP is a modern voice transcription app that transforms your voice into text using advanced machine learning, right in your browser. Built with React and powered by Whisper, T5 and Transformers.js, it offers a seamless experience for recording, transcribing, and managing your spoken notes.

## ✨ Features

- 🎙️ **Browser-based Recording**: Record audio directly in your browser with a clean, intuitive interface
- 🤖 **ML-Powered Transcription**: Convert speech to text using state-of-the-art machine learning, running entirely in your browser
- 📝 **Rich Text Editing**: Edit and format your transcribed text using a powerful rich text editor
- 📊 **Audio Visualization**: See your audio waveforms in real-time while recording
- 💾 **Local Storage**: All your notes are saved locally in your browser
- 🎨 **Modern UI**: Clean, responsive interface built with Tailwind CSS
- 🏃‍♂️ **Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🛠️ Tech Stack

- React 18 with TypeScript
- Transformers.js for ML-powered speech recognition
- TinyMCE for rich text editing
- Tailwind CSS for styling
- React Audio Visualize for waveform display
- Vite for build tooling

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/bitmanvs/react-voice-ai-app.git
cd react-voice-ai-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 🔧 System Requirements

- Node.js 16 or higher
- Modern browser with WebAssembly support
- Microphone access for recording features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. Say builds on top of earlier demos of how to use Whisper with Transformers.js.
