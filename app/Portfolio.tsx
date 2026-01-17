'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';
import ComingSoon from "@/app/Features/ComingSoon";
import ContactMe from "@/app/Features/ContactMe";

interface FolderItem {
  id: string;
  name: string;
  type: 'link' | 'folder';
  color: string;
  content: React.ReactNode | string;
  image?: string;
}

interface SidebarItem {
  id: string;
  label: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('lab');
  const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);

  // 3. 사이드바 메뉴 목록 정의
  const sidebarItems: SidebarItem[] = [
    { id: 'lab', label: "nhchoi's lab" },
    { id: 'playground', label: "playground" },
  ];

  const fileSystem: Record<string, FolderItem[]> = {
    'lab': [
      {
        id: 'quiz',
        name: '나현이를 맞춰라 (2025ver)',
        type: 'link',
        color: '#5EC9F8',
        content: 'https://2025-nhchoi-quiz.vercel.app/',
        image: '/nhchoi-quiz.png',
      },
      {
        id: 'make-an-excuse',
        name: 'AI 변명자판기',
        type: 'link',
        color: '#5EC9F8',
        content: 'https://make-an-excuse.vercel.app/',
        image: '/make-an-excuse.png',
      },
      {
        id: 'coming',
        name: 'Coming',
        type: 'folder',
        color: '#5EC9F8',
        content: <ComingSoon />
      },
      {
        id: 'soon',
        name: 'Soon ..',
        type: 'folder',
        color: '#5EC9F8',
        content: <ContactMe />
      },
      {
        id: 'etc',
        name: 'etc',
        type: 'folder',
        color: '#5EC9F8',
        content: '❤️‍🔥👩🏻‍💻❤️‍🔥👩🏻‍💻❤️‍🔥👩🏻‍💻'
      }
    ],
    'playground': [

    ],
    'info': [

    ]
  };


  const currentFiles = fileSystem[activeCategory] || [];


  const handleFolderClick = (folder: FolderItem): void => {
    if (folder.type === 'link' && typeof folder.content === 'string') {
      window.open(folder.content, '_blank');
      return;
    }
    setSelectedFolder(folder);
  };

  const handleClose = (): void => {
    setSelectedFolder(null);
  };

  return (
    <div className="portfolio-container">
      <div className="finder-window">
        <div className="window-controls">
          <div className="control-dot red"></div>
          <div className="control-dot yellow"></div>
          <div className="control-dot green"></div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className="sidebar">
            <div style={{ fontSize: '10px', color: '#888', padding: '0 10px 4px', fontWeight: 600 }}>Favorites</div>
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`sidebar-item ${activeCategory === item.id ? 'active' : ''}`}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="content-area">
            <div className="title">
              {sidebarItems.find(item => item.id === activeCategory)?.label}
            </div>
            <div className="subtitle">
              {currentFiles.length} item{currentFiles.length !== 1 ? 's' : ''}
            </div>

            <div className="folder-grid">
              {currentFiles.map((folder, index) => (
                <div
                  key={folder.id}
                  className="folder-item"
                  onClick={() => handleFolderClick(folder)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="icon-wrapper">
                    {folder.type === 'link' && folder.image ? (
                      <div className="app-icon">
                        <img src={folder.image} alt={folder.name} />
                      </div>
                    ) : (
                      <div className="folder-icon">
                        <div className="folder-tab"></div>
                        <div className="folder-body">
                          <div className="folder-shine"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="folder-name">{folder.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedFolder && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title">{selectedFolder.name}</div>
              <button
                className="close-button"
                onClick={handleClose}
                aria-label="Close"
              >
                <X size={14} color="rgba(0, 0, 0, 0.6)" />
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-text">{selectedFolder.content}</div>
            </div>
          </div>
        </div>
      )}
      <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
        <p className="text-white/60 text-sm font-medium">
          Created by Nahyeon Choi.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;