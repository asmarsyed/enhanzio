import React from 'react';
import { motion } from 'framer-motion';

interface Cause {
  id: string;
  text: string;
}

interface Category {
  name: string;
  causes: Cause[];
  color: string;
}

interface FishboneDiagramProps {
  problem: string;
  categories: Category[];
}

const defaultColors: Record<string, string> = {
  'Methods': 'bg-[#FDB347]',
  'Machines': 'bg-[#FF6B6B]',
  'Manpower': 'bg-[#E74C3C]',
  'Materials': 'bg-[#9B59B6]',
  'Measurement': 'bg-[#3498DB]',
  'Environment': 'bg-[#2ECC71]'
};

const getColorForCategory = (name: string): string => {
  return defaultColors[name] || 'bg-gray-500'; // Fallback color
};

const FishboneDiagram: React.FC<FishboneDiagramProps> = ({ problem, categories }) => {
  return (
    <div className="relative w-full h-[600px] bg-white p-8">
      {/* Fish head (problem) */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          {/* Fish head shape */}
          <svg width="120" height="120" viewBox="0 0 120 120" className="transform -translate-y-[60px]">
            <path
              d="M0,60 Q30,0 120,30 L120,90 Q30,120 0,60 Z"
              className="fill-gray-700"
            />
            {/* White dot for eye */}
            <circle cx="90" cy="60" r="8" fill="white" />
          </svg>
          {/* Problem text */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-medium px-8 text-center">
            {problem || 'Problem'}
          </div>
        </div>
      </div>

      {/* Main spine */}
      <div className="absolute left-8 right-[120px] top-1/2 h-2 bg-gray-700 transform -translate-y-1/2" />

      {/* Categories and causes */}
      <div className="absolute inset-0 p-8">
        {/* Top categories */}
        <div className="relative h-[45%]">
          {categories.slice(0, 3).map((category, index) => (
            <div
              key={category.name}
              className="absolute left-0 right-[120px]"
              style={{
                top: `${(index + 1) * 25}%`,
              }}
            >
              {/* Category bone */}
              <div 
                className="absolute left-0 right-0 h-[3px] bg-gray-400 origin-right"
                style={{
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'right center',
                }}
              />
              
              {/* Category label */}
              <div 
                className={`absolute left-4 -translate-y-8 bg-${category.color} text-white px-3 py-1 rounded-md shadow-sm transform -rotate-45`}
              >
                {category.name}
              </div>

              {/* Causes */}
              {category.causes.map((cause, causeIndex) => {
                const spacing = 100 / (category.causes.length + 1);
                return (
                  <div
                    key={cause.id}
                    className="absolute"
                    style={{
                      left: `${(causeIndex + 1) * spacing}%`,
                      top: '-1px',
                      transform: 'translate(-50%, -50%) rotate(-45deg)',
                    }}
                  >
                    {/* Cause line */}
                    <div className="h-16 w-[2px] bg-gray-400" />
                    
                    {/* Cause text */}
                    <div 
                      className="absolute left-1/2 top-16 transform -translate-x-1/2 rotate-45 whitespace-nowrap text-sm text-gray-600 mt-1"
                      style={{ width: 'max-content' }}
                    >
                      {cause.text || 'Cause'}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom categories */}
        <div className="relative h-[45%] top-[55%]">
          {categories.slice(3).map((category, index) => (
            <div
              key={category.name}
              className="absolute left-0 right-[120px]"
              style={{
                top: `${(index + 1) * 25}%`,
              }}
            >
              {/* Category bone */}
              <div 
                className="absolute left-0 right-0 h-[3px] bg-gray-400 origin-right"
                style={{
                  transform: 'rotate(45deg)',
                  transformOrigin: 'right center',
                }}
              />
              
              {/* Category label */}
              <div 
                className={`absolute left-4 translate-y-6 bg-${category.color} text-white px-3 py-1 rounded-md shadow-sm transform rotate-45`}
              >
                {category.name}
              </div>

              {/* Causes */}
              {category.causes.map((cause, causeIndex) => {
                const spacing = 100 / (category.causes.length + 1);
                return (
                  <div
                    key={cause.id}
                    className="absolute"
                    style={{
                      left: `${(causeIndex + 1) * spacing}%`,
                      bottom: '-1px',
                      transform: 'translate(-50%, 50%) rotate(45deg)',
                    }}
                  >
                    {/* Cause line */}
                    <div className="h-16 w-[2px] bg-gray-400" />
                    
                    {/* Cause text */}
                    <div 
                      className="absolute left-1/2 bottom-16 transform -translate-x-1/2 -rotate-45 whitespace-nowrap text-sm text-gray-600 mb-1"
                      style={{ width: 'max-content' }}
                    >
                      {cause.text || 'Cause'}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishboneDiagram; 