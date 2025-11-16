import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from './components/ProfileSection';
import ChatSection from './components/ChatSection';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      <BackgroundElements />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 h-screen">
          {/* 标题头部 */}
          <motion.header 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
              Know Me? Ask AI
            </h1>
            <p className="text-gray-400 text-lg">Chat with my AI assistant to learn about Zhiyao Luo, an AI enthusiast ✨</p>
          </motion.header>

          {/* 主要内容区域 - 调整为4:3比例 */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 h-[calc(100vh-12rem)]">
            {/* 左侧：个人信息 - 占4份 */}
            <motion.div 
              className="lg:col-span-4 bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProfileSection />
            </motion.div>

            {/* 右侧：AI对话 - 占3份 */}
            <motion.div 
              className="lg:col-span-3 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ChatSection />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;