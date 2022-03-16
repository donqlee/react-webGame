import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import TableHooks from './TableHooks';

const TicTacToeHooks = () => {
   

    return (
        <>
            <TableHooks></TableHooks>
            {winner && <div>{winner}님의 승리</div>}
        </>
    )
}


export default TicTacToeHooks; 