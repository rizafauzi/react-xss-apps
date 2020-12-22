import qs from 'query-string';
import DOMPurify from 'dompurify';
import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    color: "#546E7A"
  },
}));

const Dompurify = (props) => {
  const history = useHistory();

  const [text, setText] = useState('')
  const classes = useStyles();
  const [params, setParams] = useState(
    qs.parse(history.location.search, { parseNumbers: true })
  );

  useEffect(() => {
    setText(params.query ? params.query : '')
  }, [])

  
  const sanitizer = DOMPurify.sanitize;
  return (
    <div className={classes.root}>
      <div style={{ width: '70%', marginLeft: '15%' }}>
        <textarea style={{ fontSize: 24, width: '100%' }} value={text} onChange={e => setText(e.target.value)} />
        <Typography
              className={classes.title}
              style={{ marginTop: 50 }} 
              gutterBottom
              variant="body2"
            >
              Sanitized HTML (with DOMPurify)
            </Typography>
        <Divider className={classes.divider} />
        <div style={{ fontSize: 28 }} >{sanitizer(text)}</div>
        <Typography
              className={classes.title}
              style={{ marginTop: 50 }} 
              gutterBottom
              variant="body2"
            >
              Rendered HTML (with DOMPurify)
            </Typography>
        <Divider className={classes.divider} />
        <div style={{ fontSize: 28 }} dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />
      </div>
    </div>
  );
};

export default withCookies(Dompurify);




{/* <html>
          <body>
          
          <h2>JavaScript Confirm Box</h2>
          
          
          <button target="_blank" href="http://si-ruangan-groupb.herokuapp.com/" >Try it</button>
          <a href="https://www.w3schools.com">Visit W3Schools</a>
          
          <input id="demo" />
          
          <script>
          function myFunction() {
            window.reload()
              var txt;
              if (confirm("Press a button!")) {
                  txt = "You pressed OK!";
              } else {
                  txt = "You pressed Cancel!";
              }
              document.getElementById("demo").innerHTML = txt;
              console.log(txt);
          }
          </script>
          
          </body>
          </html> */}