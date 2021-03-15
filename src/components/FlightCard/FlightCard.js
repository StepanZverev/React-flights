import classes from './FlightCard.module.scss';
import React from 'react';
import { getDateForCard, getTimeForCard } from '../../utils/formatDate';


const FlightCard = (props) => {
    return (
        <div className={classes.FlightCard}>
            <div className={classes.plane}>
                <div className={classes.plane_wrapper}>
                    <img src="/plane.svg" alt="plane" />
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.destination}>
                    <div className={classes.from}>
                        {`${props.fromCityName} (${props.fromCityCode})`}
                    </div>
                    <img className={classes.destination_arrow} src="arrow-right.svg" alt="arrow" />
                    <div className={classes.to}>
                        {`${props.toCityName} (${props.toCityCode})`}
                    </div>
                </div>
                <div className={classes.departureDate}>
                    <div className={classes.date}>
                        {getDateForCard(new Date(props.departureDate))}
                    </div>
                    <img className={classes.dash} src="dash.svg" alt="dash" />
                    <div className={classes.time}>
                        {getTimeForCard(new Date(props.departureDate))}
                    </div>
                </div>
                <div className={classes.carrier}>{props.carrier}</div>
            </div>
            <div className={classes.price}>
                <div>
                    <img
                        className={classes.like}
                        src={props.isLiked ? "/like.svg" : "/unlike.svg"}
                        alt="like"
                        onClick={() => props.onLike(`${props.departureDate}_${props.id}`)}
                        width={21}
                        height={18}
                    />
                </div>
                <div className={classes.cost}>
                    Price:&nbsp;
                    <span className={classes.value}>{`${props.price.toLocaleString('ru-RU')} ₽`}</span>
                </div>
            </div>
        </div>
    )
}

export default FlightCard