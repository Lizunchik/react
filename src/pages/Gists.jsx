import React, { useCallback, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGists } from '../redux/actionTypes';

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";
export const selectGists = (state) => {
    console.log(state);
    return state.gists.gists;
};
export const selectGistsError = (state) => state.gists.error;
export const selectGistsLoading = (state) => state.gists.loading;

export const GistsList = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
    const requestGists = () => {
        dispatch(getAllGists());
    };
    useEffect(() => {
        requestGists();
    }, []);
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );
    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }
    console.log(gists);
    return <ul>{gists.map(renderGist)}</ul>;
};
