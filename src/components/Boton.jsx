import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({contenido, funcion}) {
  return (
    <Button sx= {{m:1}} variant="outlined" onClick = {funcion}>{contenido}</Button>
  );
}