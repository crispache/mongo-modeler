import React from 'react';
import { GenerateGUID } from '@/core/model';
import classes from './database-table.module.css';

interface Props {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  textClass?: string;
}

export const TruncatedText: React.FC<Props> = props => {
  const id = React.useMemo(() => GenerateGUID(), []);
  const { text, x, y, width, height, textClass } = props;

  return (
    <>
      <clipPath id={`clip_${id}`}>
        <rect x={x} y={y} width={width} height={height + 10}></rect>
      </clipPath>

      <text
        x={x}
        y={y + height}
        clip-path={`url(#clip_${id})`}
        className={!textClass ? classes.tableTextRow : textClass}
      >
        {text}
      </text>
    </>
  );
};
