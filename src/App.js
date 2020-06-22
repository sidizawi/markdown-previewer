import React from 'react';
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const initialState = `# Heading
## Heading

[visit my github](https://github.com/sidizawi)

This is a inline \`<div></div>\`

\`\`\`
  const PI = 3.14;
  let x = 2;
\`\`\`

- list item 1
- list item 2
- list item 3

> Block quote

![React image](https://goo.gl/Umyytc)

**This is a block of code**

Hello <br /> new line

`

class App extends React.Component {
  state = {
    text : initialState
  }
  handleChange = (e) => {
    this.setState({
      text : e.target.value
    })
  }
  render() {
    const { text } = this.state;
    
    const markdown = marked(text, {breaks: true});
    
    return(
      <div>
        
        <h2 
          className="text-center mt-4">
          Convert your Markdown
        </h2>
        
        <div className="row">
          
          <div className="col-6">
            
            <h6 className="text-center">
              Enter your markdown:
            </h6>
          
            <textarea id="editor"
              className="form-control p-2"
              value={text}
              onChange={this.handleChange.bind(this)}/>
          
          </div>
          
          <div className="col-6">
            
            <h6 
              className="text-center">
              See the result:
            </h6>
            
            <div 
              className="preview rounded p-3"
              id="preview"
              dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

