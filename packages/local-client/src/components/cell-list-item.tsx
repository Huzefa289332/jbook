import './cell-list-item.css';
import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
  cell: Cell | undefined;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell?.type === 'code') {
    child = (
      <>
        <div className='action-bar-wrapper'></div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = <TextEditor cell={cell} />;
  }
  return (
    <div className='cell-list-item'>
      {child}
      <ActionBar id={cell?.id || ''} />
    </div>
  );
};

export default CellListItem;
