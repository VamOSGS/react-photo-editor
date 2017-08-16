import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const tilesData = [
    {
        img: 'https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=270&h=180&fit=crop&s=6c91c944dad9e83ee89f6499d3a5aa72',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: 'https://images.unsplash.com/photo-1480434530519-525d3a430bc7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=270&h=180&fit=crop&s=ca7139a0d73f216165409d886b3190d6',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'https://images.unsplash.com/photo-1474500257816-6f941168c7e7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=270&h=180&fit=crop&s=e66a4fa45d363ba6b25fb89d0c815bb9',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'https://images.unsplash.com/photo-1488007436975-42c99972ff0a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=270&h=180&fit=crop&s=4c18ea96d0a317e2fd662044163f5a87',
        title: 'Morning',
        author: 'fancycrave1',
    },

];
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const Filterlist = () => (
    <div className="list" style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                    titleStyle={styles.titleStyle}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default Filterlist;