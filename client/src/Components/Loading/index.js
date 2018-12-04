import React from 'react'
import green from '@material-ui/core/colors/green';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return <div style={{display:'flex', height:'100%', justifyContent:'center', alignItems:'center'}}><CircularProgress  style={{ color: green[500] }} /></div>
}

export default Loading;