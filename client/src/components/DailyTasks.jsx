import React , {useState } from "react";
import Container from "@mui/material/Container";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Box,
  Card,
  Stack,
  Button,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Icon,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,

} from "@mui/material";
import { ThemeContext } from "@emotion/react";
import AddIcon from '@mui/icons-material/Add';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { grey } from "@mui/material/colors";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const DailyTasks = () => {


  const [tasks,setTasks] = useState(["Task 1 ","Task 2 ","Task 3" , "Task 4", "Task 5"]);
  const [newTask, setNewTask] = useState('');
  const [open, setOpen] = useState(false);


  const handleAddTask = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmAddTask = () => {
    // Send an HTTP request to your server to save the task data in MongoDB
    // Update the local state with the newly added task
    setTasks([...tasks, newTask]);
    setNewTask('');
    setOpen(false);
  };

  return (

    <Card variant="outlined"
      sx={{
        margin: 3 ,
        boxShadow: 3,
        borderRadius: 3,
        maxWidth: 'sm'

        }}>
          
      <CardActionArea  disableRipple>
        <CardActions
          sx={{
            display: 'flex',
            bgcolor: 'pink',
            paddingY: 0,
          }}>
            
          <Typography sx={{
            flexGrow:2,
          }}>
            Your Daily Tasks

          </Typography>

          <IconButton>
            <AddIcon onClick={handleAddTask} />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </CardActions>


        <CardContent>
          <List 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
              {tasks.map((task,index) => (
                <Paper elevation={3} 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <ListItem>
                    <ListItemText primary={task} />
                  </ListItem>


                  <IconButton>
                    <CheckBoxOutlineBlankRoundedIcon />
                  </IconButton>

                  <IconButton>
                    <EditRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Paper>
              ))}
          </List>

        </CardContent>

      </CardActionArea>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Name"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmAddTask} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default DailyTasks;
