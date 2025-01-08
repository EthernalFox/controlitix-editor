import { FC } from 'react';
import { ShapeProps } from './types';
import {
  Circle,
  Ellipse,
  Line,
  Path,
  Rect,
  Ring,
  Tag,
  Text,
  Wedge,
} from 'react-konva';
import { EllipseConfig } from 'konva/lib/shapes/Ellipse';
import { WedgeConfig } from 'konva/lib/shapes/Wedge';
import { RingConfig } from 'konva/lib/shapes/Ring';

const Shape: FC<ShapeProps> = ({ type, ...config }) => {
  switch (type) {
    case 'rect':
      return <Rect {...config} />;
    case 'circle':
      return <Circle {...config} />;
    case 'ellipse':
      return <Ellipse {...(config as EllipseConfig)} />;
    case 'wedge':
      return <Wedge {...(config as WedgeConfig)} />;
    case 'line':
      return <Line {...config} />;
    case 'image':
    case 'text':
      return <Text {...config} />;
    case 'ring':
      return <Ring {...(config as RingConfig)} />;
    // case 'arc':
    case 'tag':
      return <Tag {...config} />;
    case 'path':
      return <Path {...config} />;
    default: {
      return null;
    }
  }
};

export default Shape;
