import React, { useState } from 'react';

import React, { useEffect, useState } from 'react';
const [watchLater, setWatchLater] = useState([]);

const handleWatchLater = (index) => {
    setWatchLater([...watchLater, videos[index]]);
};

return (
    <div className="video-list">
        {videos.map((video, index) => (
            <div key={index} className="video">
                <h3>{video.title}</h3>
                <iframe width="300" height="200" src={video.url} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button onClick={() => handleWatchLater(index)}>Watch Later</button>
            </div>
        ))}
        <h2>Watch Later</h2>
        {watchLater.map((video, index) => (
            <div key={index} className="video">
                <h3>{video.title}</h3>
                <iframe width="300" height="200" src={video.url} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        ))}
    </div>
);const [playlists, setPlaylists] = useState({ "Playlist 1": [], "Playlist 2": [] });

const handleAddToPlaylist = (playlist, index) => {
    setPlaylists({ ...playlists, [playlist]: [...playlists[playlist], videos[index]] });
};

return (
    <div className="video-list">
        {videos.map((video, index) => (
            <div key={index} className="video">
                <h3>{video.title}</h3>
                <iframe width="300" height="200" src={video.url} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div>
                    <button onClick={() => handleAddToPlaylist("Playlist 1", index)}>Add to Playlist 1</button>
                    <button onClick={() => handleAddToPlaylist("Playlist 2", index)}>Add to Playlist 2</button>
                </div>
            </div>
        ))}
        {Object.keys(playlists).map((playlist, i) => (
            <div key={i} className="playlist">
                <h2>{playlist}</h2>
                {playlists[playlist].map((video, index) => (
                    <div key={index} className="video">
                        <h3>{video.title}</h3>
                        <iframe width="300" height="200" src={video.url} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ))}
            </div>
        ))}
    </div>
);












export default VideoList;
