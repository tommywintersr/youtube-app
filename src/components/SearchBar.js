import React from 'react';

import { Paper, TextField } from '@material-ui/core'

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value });

    handleSubmit = (event) => {
        if (event.keyCode == 13) {
            const { searchTerm } = this.state;
            const { onFormSubmit } = this.props;

            onFormSubmit(searchTerm);

            console.log("searchTerm: " + event.target.value);

            event.preventDefault(); //prevent browser refresh
        }
    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <TextField fullWidth label="Search" onKeyDown={this.handleSubmit} onChange={this.handleChange} />
            </Paper>
        )
    }
}

export default SearchBar;