import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const tilesData = [
    {
        title: 'Breakfast',
        filter: 'filter: sepia(0%) brightness(100%) contrast(100%) saturate(100%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(0px)',
        author: 'jill111',
    },
    {
        title: 'Tasty burger',
        filter: 'filter: sepia(0%) brightness(1200%) contrast(90%) saturate(110%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(0px)',
        author: 'pashminu',
    },
    {
        title: 'Camera',
        filter: 'filter: sepia(0%) brightness(100%) contrast(100%) saturate(100%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(0px)',
        author: 'Danson67',
    },
    {
        title: 'Morning',
        filter: 'filter: sepia(0%) brightness(100%) contrast(100%) saturate(100%) grayscale(0%) invert(0%) hue-rotate(0deg) blur(0px)',

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
                    <img style={tile.filter} src='https://images.unsplash.com/photo-1437996533264-7a6b3f2f7dfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=700&h=700&fit=crop&s=da2576a77e482e3108a82646039b434a' />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default Filterlist;