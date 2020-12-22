import qs from 'query-string';
import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import { withCookies, useCookies } from 'react-cookie';
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


const PureHtml = (props) => {
  const history = useHistory();

  const [text, setText] = useState('')
  const [token, setToken] = useCookies(['token']);
  
  const classes = useStyles();
  const [params, setParams] = useState(
    qs.parse(history.location.search, { parseNumbers: true })
  );

  useEffect(() => {
    setToken('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjEyMC1hZDEzMWYxOC1mYjJkLTQzODYtYWZhZS0yZjQxMjAzMWE4YzEiLCJ1c2VyIjp7ImlkIjoxMjAsInVzZXJuYW1lIjoicml6YSIsInBlcm1pc3Npb24iOiIxLDIsMyw0LDUsNiw4LDksMTAsMTEsMTIsMTMsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzYsNzcsNzgsNzksODAsODEsODIsODMsODQsODUsODYsODcsODgsNzUsMjYsMTQsMTIzLDEwOSwxMTAsMTIyLDEzMiwxMzcsMTQ2LDE1MiwxNjgsMTcxLDE3MiwxNzMsMTc1LDE5Miw5Myw5NCw4OSw5NSw5NiwxMDcsMTIwLDEwOCwxMjQsMTI2LDEyNSwxNTAsMTc2LDE4OSwyMTIsMTkzLDE5NCwxOTksMTQzLDE0MiwxNDEsMTUzLDE1NSwxNTQsMTU2LDE1NywxNTgsMTU5LDE2MCwxNjEsMTYyLDE2MywxNjcsMTAwLDEwMSwxMDIsMTAzLDEwNiwxMDQsMTA1LDEzMSwxMzYsMTM4LDE0NSwxNDAsMTQ3LDE0OCwxNzcsMTc4LDE0OSwxODAsMTgxLDE4MywxODQsMTg3LDE5MSwxOTUsMTg4LDE5NiwyMDQsMTcwLDE2OSwxMTgsMTY0LDE2NSwxNjYsOTAsOTEsOTIsOTcsOTgsOTksMTIxLDEzMywxNDQsMTM5LDEzNCwxMzUsMTc0LDE1MSwxNzksMTgyLDE4NSwxODYsMjAxLDIwMiwyMDMsMjA1LDIwNiwyMDcsMjA4LDIwOSwyMTEsMjEwLDIwMCwxOTcsMTI3LDEyOCwxMzAsMTI5IiwiZXhwaXJlX2RhdGUiOiIyMDIwLTEyLTIyIDIwOjU1OjQ4In0sImlhdCI6MTYwODYxMjk0OH0.TOKhJFCTjvyTWzRNyEUrhfMX0HXIKPhhGsxl9c2TUQc')
    setText(params.query ? params.query : '')
  }, [])

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
              Rendered HTML
            </Typography>
        <Divider className={classes.divider} />
        <div style={{ fontSize: 28 }} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default withCookies(PureHtml);
