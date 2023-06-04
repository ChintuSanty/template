import React, { useState } from 'react';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';

const JumbotronCode = (props) => {
    const [showCode, setShowCode] = useState(false);
    
    const codeString = `
    //Note: install reactstrap before using the below code
    import React from 'react';
    import { Card, CardText, CardBody, CardTitle, Container } from 'reactstrap';

    const JumbotronCode = (props) => {
      return (
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h1">Hello, world!</CardTitle>
              <CardText>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</CardText>
            </CardBody>
          </Card>
        </div>
      );
    };

    export default JumbotronCode;
    `;

    return (
        <div>
            <br/><Card>
                <CardBody>
                    <CardTitle tag="h1">Hello, world!</CardTitle>
                    <CardText>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</CardText>
                </CardBody>
            </Card><br/>
            <Button onClick={() => setShowCode(!showCode)}>Show/Hide Code</Button><br/>
            {showCode && <pre>{codeString}</pre>}
        </div>
    );
};

export default JumbotronCode;
