import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Code, GraduationCap, Target, Globe, Database, Palette, Users } from 'lucide-react';
import PixelAvatar from './PixelAvatar';


const ProfileSection: React.FC = () => {
  const academicPractice = [
    {
      period: '12/2024',
      title: 'An Empirical Analysis: Childcare, Gender, and Earnings',
      details: [
        'Quantitative Analysis & Modelling: Used Stata to gather, clean, and screen data from UKHLS and developed core variables, performed stepwise OLS regression to quantify the impact of key factors, and extended research by introducing parents\' education level as a moderator to refine outcomes.',
        'Strategy Formation: Validated the assumptions of fatherhood premium and motherhood penalty moderated by educational status, and proposed suggestions for policymakers to foster a more equitable social environment.'
      ]
    },
    {
      period: '06/2024',
      title: 'Correlation Analysis of the Balance of Payments (2006-2022) and Economic Factors in Japan',
      details: [
        'Data Analysis: Gathered and processed data from global sources, and constructed a structured time-series database.',
        'Econometric Modelling: Built a time series model, ran regression, performed stationarity test and cointegration test, and employed the ECM method to analyze short-term adjustments to long-run equilibrium.'
      ]
    },
    {
      period: '12/2023',
      title: 'Analysis of Local Fiscal Sustainability',
      details: [
        'Data Analysis: Collected and cross-validated data of Chongqing Wansheng Eco-Tech Development Zone from Statistical Yearbooks, Fiscal Final Accounts, and government disclosures to ensure continuity for time-series analysis.',
        'Metric & Risk Analysis: Calculated key fiscal metrics and conducted diagnostic trend analysis on revenue composition and expenditure allocations to evaluate stability, revenue structure quality, and solvency risk exposure.'
      ]
    },
    {
      period: '12/2023',
      title: 'Investigation on the Business Environment of Restaurants in Tibet',
      details: [
        'Survey & Field Research: Designed a questionnaire and distributed it both online and offline to assess four key dimensions of the business environment; conducted interviews with restaurant owners to gather qualitative insights.',
        'Data Analysis & Modelling: Utilized SPSS to perform statistical testing and regression analysis to identify core factors affecting business performance; proposed data-driven, fact-based policy recommendations.'
      ]
    }
  ];

  const internships = [
    {
      period: '07/2025-10/2025',
      company: 'ByteDance',
      position: 'AI Product Operation (Finance) Intern',
      projects: [
        {
          name: 'AI Model Optimization',
          description: 'Utilized SQL and Python to extract users\' questions, quantified feedback based on scoring cards, performed root-cause analysis on inaccurate and incomplete content, and assisted NLP teams in optimizing.'
        },
        {
          name: 'Financial Risk Modelling',
          description: 'Applied Flink framework and Kafka methods to process large scale transaction data and seek risk features from user behaviour to support constructing a LLM transaction anomaly detecting system.'
        }
      ]
    },
    {
      period: '02/2024-03/2024',
      company: 'KPMG',
      position: 'Audit Intern',
      description: 'Compiled working papers for monetary funds, verified financial documents, and examined fixed asset inventory to ensure accuracy and consistency for two companies.'
    },
    {
      period: '07/2023-10/2023',
      company: 'Zheshang Securities',
      position: 'Intern of Investment Bank Department',
      description: 'Used SQL to clean and aggregate 200,000+ payment transactions, built a payment frequency and amount distribution model based on customer ID, supporting automatic identification of large/high-frequency abnormal transactions. Assisted product managers in outputting field definitions, input requirements, and early warning trigger rules, compiling them into a "Product User Manual" for development docking and business training.'
    }
  ];

  const projects = [
    {
      name: 'AI Agent Personal Resume Website Development and Launch',
      description: 'Independently developed and launched an "AI Smart Dialogue" resume display website based on Vercel from 0 to 1, covering AI Chatbot design, Deepseek API calls, front-end visualization, automated deployment, and domain configuration.',
      details: [
        'Built the front-end (Vite + React) using Boltnew low-code platform',
        'Used Midjourney to generate UI main visuals and illustrations',
        'Automated deployment using GitHub + Vercel, bound custom domain, and configured HTTPS'
      ]
    }
  ];

  const competition = [
    {
      period: '03/2024-08/2024',
      name: '"Internet+" University Students Innovation and Entrepreneurship Competition',
      details: [
        '"TaoYaoBao" - an E-commerce Platform to Revitalize Chinese Herbal Medicine Trade in Rural Areas, CFO.',
        'Business Environment Analysis: Conducted PEST and SWOT analysis to assess drivers and business opportunities.',
        'Financial Modelling & Planning: Designed the profit model, performed cost-profit analysis, built a 3-year financial forecast with risk control strategies.'
      ]
    },
    {
      period: '04/2023-05/2003',
      name: 'National University Students\' Business Analysis Challenge',
      details: [
        'Investment Analysis of “MAOGEPING” (a leading cosmetics brand), awarded National Fifth Prize.',
        'Financial Analysis & Valuation: Collected data from Wind and Bloomberg, compared metrics in profitability, solvency, and operational efficiency with industry averages, valuated based on DCF and relative valuation methods, performed sensitivity and scenario tests using Monte Carlo simulation, and made investment recommendations.'
      ]
    }
  ];

  const skills = [
    { category: 'Data Skills', items: ['SQL', 'Excel', 'SPSS'] },
    { category: 'Programming Skills', items: ['Python', 'C++'] },
    { category: 'Tool Proficiency', items: ['Axure', 'Boltnew', 'MidJourney', 'Ps', 'Xmind', 'Office', 'Kehua', 'ChatGPT'] }
  ];

  return (
    <div className="h-full overflow-y-auto custom-scrollbar relative">
      {/* 个人信息头部 */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 干净的圆形头像 */}
        <PixelAvatar />
        
        {/* 增加1厘米垂直间距 (约38px) */}
        <div className="h-10"></div>
        
        <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">Zhiyao Luo</h1>
        <h1 className="text-xl font-semibold text-blue-300 mb-3">
          AI & Data-Driven Finance Student
        </h1>
        <div className="text-gray-300 mb-6 leading-snug">
          <p className="font-semibold">University of Birmingham, UK</p>
          <p className="text-sm">B.Sc. Mathematical Economics and Statistics</p>
          <p className="text-xs text-neon-purple font-mono">WAM: 76.67/100 (Top 5%)</p>
        </div>
        
        {/* 联系方式 */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-neon-blue" />
            <span>(+86) 131-0130-2538</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} className="text-neon-purple" />
            <span>luozhiyao10@qq.com</span>
          </div>
        </div>
      </motion.div>

      {/* Academic Practice */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <GraduationCap className="text-neon-blue" size={20} />
          Academic Practice
        </h2>
        <div className="space-y-6">
          {academicPractice.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="font-semibold text-white text-lg">{exp.title}</h3>
                </div>
                <span className="text-xs text-neon-purple font-mono mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <div className="space-y-2">
                {exp.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Internship Experience */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Briefcase className="text-neon-blue" size={20} />
          Internship Experience
        </h2>
        <div className="space-y-6">
          {internships.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="font-semibold text-white text-lg">{exp.company}</h3>
                  <p className="text-neon-blue text-sm font-medium">{exp.position}</p>
                </div>
                <span className="text-xs text-neon-purple font-mono mt-1 sm:mt-0">{exp.period}</span>
              </div>
              
              {exp.projects ? (
                <div className="space-y-4">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="border-l-2 border-neon-purple/30 pl-4">
                      <h4 className="font-medium text-gray-200 mb-2">{project.name}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Project Experience */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code className="text-neon-purple" size={20} />
          Project Experience
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-purple/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-white mb-3">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="space-y-2">
                {project.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Competition */}
      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="text-neon-pink" size={20} />
          Competition
        </h2>
        <div className="space-y-4">
          {competition.map((comp, index) => (
            <motion.div
              key={index}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-pink/50 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-semibold text-white">{comp.name}</h3>
                </div>
                <span className="text-xs text-neon-blue font-mono mt-1 sm:mt-0">{comp.period}</span>
              </div>
              <div className="space-y-2">
                {comp.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-400 text-xs">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="text-neon-blue" size={20} />
          Skills Summary
        </h2>
        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-neon-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <h3 className="font-semibold text-white mb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-neon-blue/50 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ProfileSection;
