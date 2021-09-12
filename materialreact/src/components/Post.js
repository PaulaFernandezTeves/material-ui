import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5),
    },
    media: {
    height: 250, 
    [theme.breakpoints.down('sm')]:{
        height:150,
    },
  },
}));


const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image='https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg'
            title='My Post'
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>My First Post</Typography>
                <Typography variant='body'>
                   Lorem ipsum dolor sit amet nsdvndskmavksdmv
                   cnjdsmvcklmdaskvmksdmavkdsmvklmdsklvmksdmvkdsmkvmsdkvmds
                   dbsajnfcsdmvkmdskvmdskvmdskvmdsk
                   vndsmksdmkvmassmfivjwqovawvkewvkpqoeigo.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>Share</Button>
            <Button size='small' color='primary'>Learn More</Button>
        </CardActions>
    </Card>
    );
};

export default Post;