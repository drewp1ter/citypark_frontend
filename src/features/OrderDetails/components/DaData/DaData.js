import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'

import { QUERY_PREFIX } from './constants'

class DaData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      inputQuery: '',
      inputFocused: false,
      suggestions: [],
      suggestionIndex: -1,
      suggestionsVisible: true,
      fetching: false
    }
  }

  onInputFocus = () => {
    this.setState({ inputFocused: true })
    //if (this.state.suggestions.length == 0) {
    //  this.fetchSuggestions()
    //}
  }

  onInputBlur = () => {
    this.setState({ inputFocused: false })
    if (this.state.suggestions.length === 0) {
      this.fetchSuggestions()
    }
  }

  onInputChange = event => {
    const { value } = event.target
    this.setState({
      query: value,
      inputQuery: value,
      suggestionsVisible: true
    }, () => this.fetchSuggestions())
  }

  onKeyPress = event => {
    const { suggestionIndex, suggestions, inputQuery } = this.state
    switch (event.which) {
      case 40: {
        // Arrow down
        event.preventDefault()
        if (suggestionIndex < suggestions.length) {
          let newSuggestionIndex = suggestionIndex + 1
          let newInputQuery = suggestions[newSuggestionIndex].unrestricted_value
          this.setState({ 
            suggestionIndex: newSuggestionIndex, 
            query: newInputQuery 
          })
        }
        break
      }
      case 38: {
        // Arrow up
        event.preventDefault()
        if (suggestionIndex >= 0) {
          let newSuggestionIndex = suggestionIndex - 1
          let newInputQuery = newSuggestionIndex === -1 ? inputQuery : suggestions[newSuggestionIndex].unrestricted_value
          this.setState({ 
            suggestionIndex: newSuggestionIndex, 
            query: newInputQuery 
          })
        }
        break
      }
      case 13: {
        // Enter
        event.preventDefault()
        suggestionIndex >= 0 && this.selectSuggestion(suggestionIndex)
        break
      }
      default:
    }  
  }

  fetchSuggestions = () => {
      const { fetching, query } = this.state
      const { settlement } = this.props
      const fullQueryPrefix = QUERY_PREFIX + settlement + ', '
      const { REACT_APP_DADATA_API_KEY } = process.env
      const checkResponse = response =>
        new Promise((resolve, reject) => {
          response.ok ? response.json().then(json => resolve(json)) : reject()
        })
      const options = {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Token ' + REACT_APP_DADATA_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: fullQueryPrefix + query,
            count: 3
          })
      }
      if (!fetching) {
        this.setState({ fetching: true })
        fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", options)
          .then(response => checkResponse(response)
            .then(payload => {
              this.setState({ 
                fetching: false,
                suggestions: payload.suggestions.map(suggestion => ({
                  ...suggestion,
                  unrestricted_value: suggestion.unrestricted_value.replace(fullQueryPrefix, '') 
                })), 
                suggestionIndex: -1 
              })
            })
          ).catch(() => { this.setState({ fetching: false }) })
      }    
    }

  onSuggestionClick = (index, event) => {
    event.stopPropagation()
    this.selectSuggestion(index)
  }

  selectSuggestion = index => {
    const { suggestions } = this.state
    const { onChange } = this.props
    if (suggestions.length >= index - 1) {
      this.setState({ 
        query: suggestions[index].unrestricted_value, 
        suggestionsVisible: false, 
        inputQuery: suggestions[index].unrestricted_value 
      },  
      () => {
        this.fetchSuggestions()
        setTimeout(() => this.setCursorToEnd(this.textInput), 100)
      })
      if (onChange) {
        onChange(suggestions[index].unrestricted_value)
      }
    }
  }

  setCursorToEnd = element => {
    let valueLength = element.value.length
    if (element.selectionStart || element.selectionStart === '0') {
      // Firefox/Chrome
      element.selectionStart = valueLength
      element.selectionEnd = valueLength
      element.focus()
    }
  }

  getHighlightWords = () => {
    const { inputQuery } = this.state
    const wordsToPass = ['г', 'респ', 'ул', 'р-н', 'село', 'деревня', 'поселок', 'пр-д', 'пл', 'к', 'кв', 'обл', 'д']
    return inputQuery.replace(',', '').split(' ').filter(word => wordsToPass.indexOf(word) < 0)
  }

  suggestionsList = () =>
    this.state.suggestions.map((suggestion, index) => {
      let suggestionClass = 'react-dadata__suggestion'
      if (index === this.state.suggestionIndex) {
        suggestionClass += ' react-dadata__suggestion--current'
      }
      return (
        <div className={suggestionClass} key={suggestion.value} onMouseDown={() => this.onSuggestionClick(index)}>
          <Highlighter
            highlightClassName="react-dadata--highlighted"
            searchWords={this.getHighlightWords()}
            textToHighlight={suggestion.unrestricted_value}
          />
        </div>
      )
    })

  render = () => {
    const { query, inputFocused, suggestionsVisible, suggestions } = this.state
    const { className } = this.props
    return (
      <div className="react-dadata react-dadata__container">
        <div>
          <input
            className={className}
            value={query}
            ref={input => { this.textInput = input }}
            onChange={this.onInputChange}
            onKeyPress={this.onKeyPress}
            onKeyDown={this.onKeyPress}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            autoComplete="off"
          />
        </div>
        {
          inputFocused && suggestionsVisible && suggestions && suggestions.length > 0 ?
            <div className="react-dadata__suggestions">
              <div className="react-dadata__suggestion-note">
                Выберите вариант или продолжите ввод
              </div>
              { this.suggestionsList() }
            </div>
            : null
        }
      </div>
    )
  }
}

DaData.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  settlement: PropTypes.string.isRequired
}

export default DaData