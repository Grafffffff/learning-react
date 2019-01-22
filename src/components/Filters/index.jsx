import React from 'react';
import Select from 'react-select'
import DatePicker from './DatePicker'
import { connect } from 'react-redux'
import { addTitleFilters } from "../../AC";

class Filters extends React.Component {
    render() {
        const { articles, addTitleFilters, selected } = this.props;
        const options = articles.map(article => {
            return {
                value: article.id,
                label: article.title
            }
        });
        return (
            <div>
                <Select
                    options={options}
                    isMulti
                    closeMenuOnSelect={false}
                    onChange={(options) => addTitleFilters(options)}
                    value={selected}
                />
                <DatePicker />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.titles
}), { addTitleFilters })(Filters)