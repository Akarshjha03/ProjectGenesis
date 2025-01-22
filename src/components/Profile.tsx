import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Profile = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center pt-32 pb-32" // Increased top padding
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-pink-500 ring-offset-4 ring-offset-gray-900">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Your Name</h1>
        <h2 className="text-2xl font-semibold text-pink-500 mb-6">
          Software Development Engineer
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Passionate software engineer with expertise in full-stack development,
          machine learning, and UI/UX design. Currently pursuing B.Tech in Computer
          Science, I combine technical excellence with creative problem-solving to
          build innovative solutions that make a difference.
        </p>
      </div>
    </section>
  );
};

export default Profile;