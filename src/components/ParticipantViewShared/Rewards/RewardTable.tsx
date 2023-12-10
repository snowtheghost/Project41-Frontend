import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { styled } from 'styled-components';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

type NotificationProps = {
  message: string;
  x: number;
  y: number;
};

const Notification: React.FC<NotificationProps> = ({ message, x, y }) => {
  if (!message) return null;

  const style: React.CSSProperties = {
    position: 'fixed',
    left: `${x}px`,
    top: `${y}px`,
    padding: '10px',
    backgroundColor: 'black',
    opacity: 0.8,
    color: 'white',
    borderRadius: '5px',
    width: '200px',
    zIndex: 1000,
    transform: 'translate(-50%, -50%)',
  };

  return <div style={style}>{message}</div>;
};

type RowData = {
  number: number;
  gameName: string;
  type: string;
  credit: string;
  collectDate: string;
  depositDate: string;
  code: string;
};

const RewardsTable: React.FC = () => {
  const [columnDefs] = useState<ColDef<RowData>[]>([
    {
      headerName: 'No.',
      field: 'number',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Game's Name",
      field: 'gameName',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Type',
      field: 'type',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Cash / Gift Card',
      field: 'credit',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Collect Date',
      field: 'collectDate',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Deposit Date',
      field: 'depositDate',
      sortable: true,
      filter: true,
      flex: 2,
    },
    {
      headerName: 'Code',
      field: 'code',
      sortable: true,
      filter: true,
      flex: 2,
    },
  ]);

  const [rowData] = useState<RowData[]>([
    // TODO: replace the placeholders with data from actual rewards system
    {
      number: 1,
      gameName: 'Tic-Tac-Toe',
      type: 'Cash',
      credit: '15.00',
      collectDate: '2023-09-21',
      depositDate: 'None',
      code: '',
    },
    {
      number: 2,
      gameName: 'Trust',
      type: 'Cash',
      credit: '15.00',
      collectDate: '2023-09-22',
      depositDate: 'None',
      code: '',
    },
    // ... other cash type rows
    {
      number: 3,
      gameName: 'Ultimatum',
      type: 'Gift Card',
      credit: 'Amazon $5',
      collectDate: '2023-09-23',
      depositDate: '',
      code: 'SUxcouI1GIs',
    },
    {
      number: 4,
      gameName: 'Prisoners Dilemma',
      type: 'Gift Card',
      credit: 'Walmart $15',
      collectDate: '2023-09-24',
      depositDate: '',
      code: '7SX2hs8',
    },
    // ... other gift card type rows
  ]);

  const [notification, setNotification] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const onCellClicked = (event: any) => {
    const x = event.event.clientX;
    const y = event.event.clientY;

    setCoords({ x, y }); // Update state with the new coordinates

    if (event.colDef.field === 'code') {
      navigator.clipboard
        .writeText(event.value)
        .then(() => {
          setNotification('Code copied to clipboard');
          setTimeout(() => setNotification(''), 1000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
          setNotification('Failed to copy code');
          setTimeout(() => setNotification(''), 1000);
        });
    }
  };

  return (
    <Container>
      <h2>My Rewards</h2>
      <GridContainer>
        {notification && (
          <Notification message={notification} x={coords.x} y={coords.y} />
        )}
        <div
          className='ag-theme-alpine'
          style={{ height: 'auto', width: '95%' }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout='autoHeight'
            onCellClicked={onCellClicked}
          />
        </div>
      </GridContainer>
    </Container>
  );
};

export default RewardsTable;
