import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails } from './components';

import youtube from './api/youtube';


class App extends React.Component {

    handleSubmit = async (searchTerm) => {

        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'YOUR_YOUTUBE_API_KEY_HERE',
                q: searchTerm
            }
        }); //add searchTerm to axios params
    }

    render() {
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails />
                        </Grid>
                        <Grid item xs={4}>
                            {/*Video details*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;