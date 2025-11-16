import React from 'react';

const PixelAvatar: React.FC = () => {
  return (
    <div className="relative">
      {/* 头像容器 - 完美圆形裁切 */}
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gradient-to-r from-neon-blue to-neon-purple relative bg-white">
        <img 
          src="/src/assets/picture3.png" 
          alt="罗之尧" 
          className="w-full h-full object-cover object-center"
          style={{ 
            imageRendering: 'auto',
            filter: 'contrast(1.02) brightness(1.01)',
            transform: 'scale(1.05)'
          }}
        />
      </div>
    </div>
  );
};

export default PixelAvatar;