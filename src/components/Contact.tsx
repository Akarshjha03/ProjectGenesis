import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  BookOpen,
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">
                Resources
              </h3>
              <div className="space-y-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-3" />
                  Download Resume
                </a>
                <a
                  href="https://dev.to/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-500 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  Read My Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;