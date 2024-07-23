import React, {useState} from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery} from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import LogoImage from '../../assets/logo.png';

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Box>
            <Stack direction="row" spacing={5}>
                <Stack direction="column" spacing={5} alignItems="flex-start" width={240}>
                    {
                        isMobile && (
                        <IconButton onClick={() => setMenuOpen(prev => !prev)}>
                            {
                                menuOpen ? <CloseIcon /> : <MenuIcon />
                            
                            }
                        </IconButton>
                    )}
                    
                    {
                        (!isMobile || (isMobile && menuOpen)) &&
                        <Box width="100%">
                            <Stack direction="column" spacing={4}>
                                <Button variant="contained" disableElevation style={{
                                    borderRadius: 0
                                }}>
                                    <Stack direction="row" spacing={2}>
                                        <img src={LogoImage} alt="" width={33.58} height={32} />
                                        <h3>New Chat</h3>
                                        <EditNoteOutlinedIcon />
                                    </Stack>
                                </Button>

                                <Button variant="contained" disableElevation style={{
                                    margin: '40px auto'
                                }}>
                                    Past Conversation
                                </Button>
                            </Stack>
                        </Box>
                    }

                </Stack>
                <Stack direction="row" justifyContent="flex-start">
                    <Typography color="primary.main" fontSize="28px" fontWeight="700">Bot AI</Typography>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Navbar;





  



