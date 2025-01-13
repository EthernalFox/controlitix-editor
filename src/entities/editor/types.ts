import { Vector2d } from 'konva/lib/types';

export interface EditorStore {
  gridSize: number;
  scale: Vector2d;
  backgroundColor: `#${string}`;
  setScale: (scale: Vector2d) => void;
}
