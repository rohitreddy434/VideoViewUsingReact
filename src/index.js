import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAAz2Fipx-HieLKftRLAFae9gNpv8UhGZg';


// create a component that produces html content
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: [], selectedVideo: null};
		this.videoSearch('surfboards');
	}

	render() {

		const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				{/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
	videoSearch(searchTerm){
		YTSearch({key: API_KEY, term: searchTerm}, videos => {
			this.setState({videos: videos, selectedVideo: videos[0]});//this.setState({videos:videos}) can be written as this.setState({videos});
		});
	}
}

//put the html from component on the dom.
ReactDOM.render(<App />, document.querySelector('.container'));

