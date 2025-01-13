import { Layer, Stage } from 'react-konva';
import { Stage as StageType } from 'konva/lib/Stage';
import { useRef } from 'react';
import { useShapeStore } from '../../../entities/shapes/shapesStore';
import Shape from '../../../features/Draw/Shapes/Shape';
import { KonvaEventObject } from 'konva/lib/Node';
import { useEditorStore } from '../../../entities/editor/editorStore';

const Canvas = () => {
  const { scale, setScale } = useEditorStore();
  const scaleBy = 1.1;
  const stageRef = useRef<StageType>(null);

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault(); // Отключение стандартного поведения браузера

    if (!e.evt.ctrlKey) return;

    const stage = stageRef.current;
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();

    if (!pointer) return;

    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    setScale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();
  };

  const layerRef = useRef(null);

  const { shapes } = useShapeStore();

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight - 100}
      ref={stageRef}
      scale={scale}
      onWheel={handleWheel}
    >
      <Layer ref={layerRef}>
        {shapes.map(shapeConfig => (
          <Shape key={shapeConfig.id} {...shapeConfig} />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
