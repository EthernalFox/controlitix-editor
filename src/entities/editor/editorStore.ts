import { create } from 'zustand';
import { EditorStore } from './types';

export const useEditorStore = create<EditorStore>(set => ({
  gridSize: 1,
  scale: { x: 1, y: 1 },
  backgroundColor: '#999999',
  setScale: scale => set({ scale }),
}));
