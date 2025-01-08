import { create } from 'zustand';
import { shapeStore } from './types';

export const useShapeStore = create<shapeStore>(set => ({
  shapes: [],
  selectedShapes: [],
  addShape: shape => set(state => ({ shapes: [...state.shapes, shape] })),
}));
