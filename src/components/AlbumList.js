import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

//make AlbumList class based component
class AlbumList extends Component {
	state = { albums: [] }; //class-level property

	componentWillMount() {
		fetch('https://api.myjson.com/bins/qdmz5')
			.then(response => response.json())
			.then(response => this.setState({ albums: response }));
	}
	
//render all albums that was fetched from the api
renderAlbums() {
	return this.state.albums.map(album => 
		<AlbumDetail key={album.title} album={album} />
		);
}

//render component
	render()  {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

//make components to other parts of app
export default AlbumList;