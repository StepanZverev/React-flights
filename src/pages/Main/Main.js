import React from 'react'
import { connect } from 'react-redux';

import CustomSlider from '../../components/UI/Slider/Slider';
import FlightCard from '../../components/FlightCard/FlightCard';
import Header from '../../components/Header/Header';
import CustomDatePicker from '../../components/UI/DatePicker/DatePicker';

import { getFlightsCreator, toggleFlightLikeCreator } from '../../store/flightsReducer';
import classes from './Main.module.scss';
import { formatDateForInput } from '../../utils/formatDate';

const Main = (props) => {
    const [departureDate, setDepartureDate] = React.useState(new Date());

    React.useEffect(() => {
        if (!departureDate) {
            setDepartureDate(new Date())
        } else {
            props.getFlights(formatDateForInput(departureDate));
        }
    }, [departureDate])

    const onLikeClickHandler = (id) => {
        props.toggleFlightLike(id);
    }

    return (
        <section className={classes.Page}>
            <Header />
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        Вылеты
                    </div>
                    <img className={classes.arrow} src="/arrow.svg" alt=">" width={9} height={17} />
                    <div className={classes.destination}>
                        SVO - JFK
                    </div>
                    <div className={classes.date}>
                        <CustomDatePicker
                            value={departureDate}
                            onChange={setDepartureDate}
                        />
                    </div>
                </div>
                <div className={classes.slider_wrapper}>
                    <CustomSlider images={props.images} />
                </div>
                <div className={classes.flights}>
                    <div className={classes.flights__counter}>
                        Добавлено в Избранное:&nbsp;&nbsp;<span className={classes.counter_value}>{props.favoriteFlights.length}</span>&nbsp;рейсов
                    </div>
                    <div className={classes.flights__list}>
                        {props.flights ?
                            props.flights.Quotes.map((quote) => {
                                return (
                                    <FlightCard
                                        key={quote.QuoteId}
                                        id={quote.QuoteId}
                                        price={quote.MinPrice}
                                        departureDate={quote.OutboundLeg.DepartureDate}
                                        fromCityName="Moscow"
                                        fromCityCode="SVO"
                                        toCityName="New York City"
                                        toCityCode="JFK"
                                        carrier={props.flights.Carriers[0].Name}
                                        isLiked={props.favoriteFlights.indexOf(`${quote.OutboundLeg.DepartureDate}_${quote.QuoteId}`) !== -1}
                                        onLike={onLikeClickHandler}
                                    />
                                )
                            })
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        flights: state.flights.flights,
        favoriteFlights: state.flights.favoriteFlights,
        images: state.flights.sliderImages,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFlights: (date) => dispatch(getFlightsCreator(date)),
        toggleFlightLike: (id) => dispatch(toggleFlightLikeCreator(id)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Main);