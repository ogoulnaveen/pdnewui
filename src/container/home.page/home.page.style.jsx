import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
    btn2: {
        color: '#fff !important',
        backgroundColor: '#01BABF !important',
        borderRadius: '47px !important',
        height: '52px',
        fontWeight: 700,
        fontSize: 16,
        textTransform: 'none !important',
        '&:hover': {
            background: '#01BABF',
            color: "#fff !important",
        }
    },
}));