
 var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'test.png'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'link1b.png'
  },
  {
  	id: 3,
    title: 'Władca pierścieni',
    desc: 'Film o pierścieniu',
    poster: 'link2b.png'
  },
  {
  	id: 4,
    title: 'Hobbit',
    desc: 'Film o Hbiciey',
    poster: 'link3b.png'
  },
];

var MovieTitle = React.createClass({
  render: function() {
    return (
      React.createElement('h2', {}, this.props.titleX)
    )
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImage = React.createClass({
  render: function() {
    return (
      React.createElement('img', {src: this.props.srcX})
    )
  }
});

var Movie = React.createClass({
  render: function() {
    return (
      React.createElement('li', {key: this.props.movieX.id},
        React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
        React.createElement(MovieDescription, {desc: this.props.movieX.desc}),
        React.createElement(MovieImage, {srcX: this.props.movieX.poster}),
      )
    )
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {movieX: movie})
});

var element =
  	React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));