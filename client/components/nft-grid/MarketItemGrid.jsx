import makeStyles from '@material-ui/core/styles/makeStyles';

import MarketItemGridItem from './MarketItemGridItem';

const useStyles = makeStyles(theme => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '65vw',
        gridGap: '1.5rem'
    }
}))

/*
This component only takes in one main parameter, which
is the data of the nfts that are being displayed
*/
const MarketItemGrid = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.grid} style={{
            marginTop: `${props.paddingTop}rem`
        }}>
            {props.gridItems.map(element => {
                return (
                    <MarketItemGridItem  name={element.name} img={element.img} />
                )
            })}
        </div>
    )
}

export default MarketItemGrid;