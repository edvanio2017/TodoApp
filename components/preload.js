import {CircularProgress,Backdrop} from '@mui/material';

export default function Preload({activo}) {
	return(
      <div>
        {/* Preload de carregamento */}
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={activo}>
          <CircularProgress color="inherit" />
        </Backdrop>	
      </div>
	)
}