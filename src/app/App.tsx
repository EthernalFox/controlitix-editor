import type { Stage as StageType } from 'konva/lib/Stage';
import { useEffect, useRef, useState } from 'react';
import { Layer,  Stage } from 'react-konva';
import Sidebar from '../features/Sidebar/Sidebar';
import { useShapeStore } from '../entities/shapes/shapesStore';

function App() {
  const layerRef = useRef(null);

  const { shapes } = useShapeStore();

  console.log(shapes)

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight - 100}>
        <Layer ref={layerRef}>{...shapes}</Layer>
      </Stage>
      <Sidebar />
    </>
  );
}

export default App;
