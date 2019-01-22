import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';

import { connect } from 'react-redux'
import { addDateFilters } from "../../AC";

import './styles.scss'

class DatePicker extends React.Component {
    static defaultProps = {
        numberOfMonths: 4,
    };

    handleDayClick = (day) => {
        const { addDateFilters, from, to } = this.props;
        const range = DateUtils.addDayToRange(day, { from: from, to: to });
        addDateFilters(range);
    };
    render() {
        const { addDateFilters, from, to } = this.props;
        const modifiers = { start: from, end: to };
        return (
            <div className="calendar">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={() => addDateFilters({from: undefined, to: undefined})}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default connect(state => ({
    from: state.filters.dates.from,
    to: state.filters.dates.to
}), { addDateFilters })(DatePicker);