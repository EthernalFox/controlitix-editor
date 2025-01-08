import Panel from '../../shared/ui/Common/Panel/Panel';
import Button from '../../shared/ui/Common/Button/Button';
import { useShapeStore } from '../../entities/shapes/shapesStore';

const Sidebar = () => {
  const { addShape } = useShapeStore();

  const onClick = () => {
    addShape({
      type: 'rect',
      id: '',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
  };

  return (
    <Panel>
      <Button onClick={onClick} />
    </Panel>
  );
};

export default Sidebar;
