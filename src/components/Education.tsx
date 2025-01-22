import React from 'react';
import {
  GraduationCap,
  Code2,
  Award,
  Github,
  BookOpen,
  Coffee,
  Terminal,
  MessageSquare,
  FileCode,
  Database,
  Laptop,
  Figma,
  Bot,
  Globe,
  Server,
  Cpu,
} from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      name: 'CS50x',
      provider: 'Harvard Online',
      icon: Laptop,
    },
    {
      name: 'GitHub Foundations',
      provider: 'GitHub',
      icon: Github,
    },
    {
      name: 'UI/UX Designer',
      provider: 'Meta',
      icon: Figma,
    },
    {
      name: 'Prompt Engineer',
      provider: 'ChatGPT',
      icon: Bot,
    },
    {
      name: 'API Fundamentals',
      provider: 'Postman',
      icon: Globe,
    },
    {
      name: 'Figma Essentials',
      provider: 'LetsUpgrade',
      icon: Figma,
    },
    {
      name: 'Python and AI',
      provider: 'Microsoft',
      icon: Terminal,
    },
    {
      name: 'Frontend Development',
      provider: 'Google DSC',
      icon: FileCode,
    },
    {
      name: 'Computer Networks',
      provider: 'IIT Kharagpur',
      icon: Server,
    },
    {
      name: 'Database and SQL',
      provider: 'Infosys',
      icon: Database,
    },
  ];

  const profiles = [
    { 
      name: 'LeetCode',
      url: 'https://leetcode.com/yourusername',
      icon: Code2,
    },
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/yourusername',
      icon: Terminal,
    },
    {
      name: 'CodeChef',
      url: 'https://codechef.com/users/yourusername',
      icon: Coffee,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: Github,
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/yourid',
      icon: MessageSquare,
    },
    {
      name: 'Dev.to',
      url: 'https://dev.to/yourusername',
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-pink-500/20 mb-12">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-pink-500 mr-4" />
              <h3 className="text-2xl font-semibold text-white">
                Bachelor of Technology (B.Tech)
              </h3>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Pursuing Computer Science at Parul University (2022-2026), focusing on
              Machine Learning, Android Development (Kotlin), and Frontend
              Development (React).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Online Profiles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="w-12 h-12 mb-3 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <profile.icon className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-gray-300 group-hover:text-pink-400 text-sm font-medium transition-colors">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Certifications
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg group"
                  >
                    <div className="w-12 h-12 mb-3 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <cert.icon className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm mb-1">
                      {cert.name}
                    </span>
                    <span className="text-pink-400 text-xs">
                      {cert.provider}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;