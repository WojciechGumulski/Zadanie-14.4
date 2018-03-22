var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'lion.jpg'
  },
  {
    id: 3,
    title: 'Piąty element',
    desc: 'film science-fiction Luca Bessona',
    img: '5th-element.jpg'
  },
  {
    id: 4,
    title: 'Rok diabła',
    desc: '"Rok diabła" został wybrany Najlepszym Czeskim Filmem 2002 roku',
    img: 'rok.jpg'
  },
  {
    id: 5,
    title: 'Poranek kojota',
    desc: 'Młody niespełniony rysownik komiksów, zakochuje się w młodej i ślicznej piosenkarce Noemi',
    img: 'kojot.jpg'
  }
];


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
    )
  },
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieImage, {img: this.props.movie.img})
      )
    )
  },
});



var MoviesList = React.createClass({
	propTypes: {
    	list: React.PropTypes.object.isRequired,
  	},
  	render: function() {
  		var moviesElements = movies.map(function(movie) {
  			return React.createElement(Movie, {key: movie.id, movie: movie});
			});
    	return (React.createElement('ul', {}, moviesElements));
  	}
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {})
  );

ReactDOM.render(element, document.getElementById('app'));