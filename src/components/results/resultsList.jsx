import React from 'react';
import { connect } from 'react-redux';
import './resultsList.css';

//=========================
const mapStateToProps = (state) => ({
  results: state.results,
  cache: state.cache,
});

//=========================
class ResultsList extends React.Component {

  createResultsList() {
    let { results } = this.props;
    let resultIds = Object.keys(results);

    if (resultIds.length === 0) {
      return (
        <li key={ "-99" }>No results found.</li>
      );
    }

    return resultIds.map( (result) => {
        return(
          <li key={result}>
            <img  src={results[result].avatar_url }
                  alt={`avatar_img_${result}`}
            />
            <p>{ results[result].login }</p>
          </li>
        );
    });
  }

  render() {

    return(
      <ul>
        { this.createResultsList() }
      </ul>
    );
  }
}

export default connect(mapStateToProps)(ResultsList);
