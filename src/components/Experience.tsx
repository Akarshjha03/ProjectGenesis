import React, { useState } from 'react';
import { Briefcase, Users, Heart } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experiences = {
    work: [
      {
        title: 'Software Engineer',
        company: 'Company Name',
        period: '2023 - Present',
        description:
          'Led development of key features using React and Node.js. Improved application performance by 40%.',
      },
    ],
    internships: [
      {
        title: 'Frontend Developer Intern',
        company: 'Company Name',
        period: 'Summer 2023',
        description:
          'Developed responsive web applications using React and TypeScript.',
      },
    ],
    volunteer: [
      {
        title: 'Open Source Contributor',
        organization: 'Various Projects',
        period: '2022 - Present',
        description:
          'Active contributor to multiple open source projects, focusing on React and TypeScript ecosystems.',
      },
    ],
  };

  const recommendations = [
    {
      name: 'John Doe',
      role: 'Senior Software Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      testimonial:
        'An exceptional developer with strong problem-solving skills and attention to detail.',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
      name: 'Jane Smith',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      testimonial:
        'Demonstrates excellent technical skills and a great team player attitude.',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      name: 'Mike Johnson',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      testimonial:
        'Consistently delivers high-quality work and brings innovative solutions to the table.',
      linkedin: 'https://linkedin.com/in/mikejohnson',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Experience
        </h2>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-gray-800 p-1 rounded-lg">
            {[
              { id: 'work', icon: Briefcase, label: 'Work' },
              { id: 'internships', icon: Users, label: 'Internships' },
              { id: 'volunteer', icon: Heart, label: 'Volunteer' },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  activeTab === id
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {experiences[activeTab as keyof typeof experiences].map(
            (exp, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-pink-500 mb-2">
                  {exp.company || exp.organization} | {exp.period}
                </p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            )
          )}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{rec.name}</h4>
                    <p className="text-pink-500 text-sm">{rec.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{rec.testimonial}</p>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-500 text-sm"
                >
                  View LinkedIn Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;