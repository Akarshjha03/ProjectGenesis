import React from 'react';
import { GitFork, Star, GitPullRequest } from 'lucide-react';

const OpenSource = () => {
  const contributions = [
    {
      repo: 'facebook/react',
      description: 'Contributed to React core documentation and bug fixes.',
      stats: {
        commits: 15,
        prs: 5,
        issues: 8,
      },
    },
    {
      repo: 'tailwindlabs/tailwindcss',
      description: 'Added new utility classes and improved documentation.',
      stats: {
        commits: 10,
        prs: 3,
        issues: 5,
      },
    },
    // Add more contributions...
  ];

  return (
    <section id="opensource" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Open Source Contributions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {contribution.repo}
              </h3>
              <p className="text-gray-300 mb-4">{contribution.description}</p>
              <div className="flex space-x-6">
                <div className="flex items-center text-gray-300">
                  <GitFork className="w-4 h-4 text-pink-500 mr-2" />
                  {contribution.stats.commits} commits
                </div>
                <div className="flex items-center text-gray-300">
                  <GitPullRequest className="w-4 h-4 text-pink-500 mr-2" />
                  {contribution.stats.prs} PRs
                </div>
                <div className="flex items-center text-gray-300">
                  <Star className="w-4 h-4 text-pink-500 mr-2" />
                  {contribution.stats.issues} issues
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;