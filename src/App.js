import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-bootstrap/dist/react-bootstrap';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';
import { Card, Button, CardHeader, CardFooter, CardBody, Collapse, CardTitle, CardText } from 'reactstrap';

const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
class App extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };



  state = { editorState: EditorState.createEmpty() }
  onChange = (editorState) => this.setState({ editorState });
  render() {
    const { contentState } = this.state;
    return (
      <div className="container-fluid">

        {/* Application Top Bar */}
        <Header />

        {/* End of Application top bar */}
        <br/>
        <div className="row">
        
          <div className="col-md-3">


            {/*  The application Sidebar*/}
            <Sidebar />

            {/* End Of Sidebar */}

          </div>
          <div className="col-md-9">
            <div>
             
              <Card bsStyle="primary">
                <CardBody>
                  <Editor

                    editorState={this.state.editorState}
                    wrapperClassName="rdw-editor-wrapper"
                    editorClassName="rdw-editor-main"
                    toolbarClassName="rdw-editor-toolbar"
                    onEditorStateChange={this.onChange}
                    // wrapperClassName="demo-wrapper"
                    //editorClassName="demo-editor"
                    onContentStateChange={this.onContentStateChange}

                  />
                </CardBody>
                <textarea className="form-control"
                  disabled
                  value={JSON.stringify(contentState, null, 4)}
                />
  <CardFooter>Standard Report Customizer</CardFooter>
              </Card>

            </div>
          </div>
        </div>

      </ div>

    );
  }
}

export default App;
