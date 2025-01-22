import React, { useState } from 'react';
import {
  Smartphone,
  Palette,
  Globe,
  Brain,
  Trophy,
  Chrome,
  Terminal,
  Cpu,
} from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const categories = [
    { id: 'android', icon: Smartphone, label: 'Android' },
    { id: 'uiux', icon: Palette, label: 'UI/UX' },
    { id: 'web', icon: Globe, label: 'Web' },
    { id: 'ai', icon: Brain, label: 'AI/ML' },
    { id: 'hackathons', icon: Trophy, label: 'Hackathons' },
    { id: 'extensions', icon: Chrome, label: 'Extensions' },
    { id: 'scripts', icon: Terminal, label: 'Scripts' },
    { id: 'iot', icon: Cpu, label: 'IoT' },
  ];

  const projects = {
    android: [
      {
        title: 'Fitness Tracker App',
        description:
          'Native Android app built with Kotlin for tracking workouts and health metrics.',
        image: 'https://images.unsplash.com/photo-1526502900236-e692fb78c0dc?w=500&h=300&fit=crop',
        github: 'https://github.com/yourusername/fitness-tracker',
        demo: 'https://play.google.com/store/apps/details?id=com.example.fitnesstracker',
      },
    ],
    web: [
      {
        title: 'E-commerce Platform',
        description:
          'Full-stack e-commerce platform built with MERN stack and Stripe integration.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
        github: 'https://github.com/yourusername/ecommerce-platform',
        demo: 'https://example-ecommerce.netlify.app',
      },
    ],
    // Add more projects for other categories...
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeCategory === id
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:text-pink-400'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects[activeCategory as keyof typeof projects] || []).map(
            (project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-500"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-500"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;