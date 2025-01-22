import React from 'react';
import {
  Code2,
  Smartphone,
  Palette,
  Brain,
  GitBranch,
} from 'lucide-react';

const About = () => {
  const roles = [
    {
      title: 'Full Stack Web Developer (MERN Stack)',
      description:
        'Building scalable web applications using MongoDB, Express.js, React, and Node.js with a focus on performance and user experience.',
      icon: Code2,
      span: 'col-span-2',
    },
    {
      title: 'Android Developer (Native)',
      description:
        'Creating native Android applications using Kotlin with modern architecture patterns and Material Design principles.',
      icon: Smartphone,
      span: 'col-span-1',
    },
    {
      title: 'UI/UX Designer',
      description:
        'Designing intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
      icon: Palette,
      span: 'col-span-1',
    },
    {
      title: 'Machine Learning Engineer',
      description:
        'Developing and implementing machine learning models for real-world applications using Python and TensorFlow.',
      icon: Brain,
      span: 'col-span-1',
    },
    {
      title: 'Algorithm Optimization',
      description:
        'Optimizing complex algorithms and data structures for improved performance and efficiency.',
      icon: GitBranch,
      span: 'col-span-1',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What I Do
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`${role.span} bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-pink-500/20 hover:border-pink-500 ${
                index === 0 ? 'row-span-2' : ''
              }`}
            >
              <role.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {role.title}
              </h3>
              <p className="text-gray-300">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;