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





var Movie = React.createClass({
    propTypes: {
    movie: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesElements = movies.map(function(movie) {
      return (
        React.createElement('Movie', {key: this.props.movie.id})
      )
    }
  },
});



var element = React.createElement(Movie, {movie: movies});
ReactDOM.render(element, document.getElementById('app'));
