import Panel from '../../shared/ui/Common/Panel/Panel';
import Button from '../../shared/ui/Common/Button/Button';
import { useShapeStore } from '../../entities/shapes/shapesStore';
import { useEditorStore } from '../../entities/editor/editorStore';

const Sidebar = () => {
  const { addShape } = useShapeStore();
  const { setScale } = useEditorStore();

  const onClick = () => {
    addShape({
      id: `${Math.random()}`,
      type: 'rect',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      draggable: true,
      fill: 'red',
    });
  };

  return (
    <Panel>
      <Button onClick={onClick} />
      <Button onClick={() => setScale({x: 1, y: 1})} />
    </Panel>
  );
};

export default Sidebar;
