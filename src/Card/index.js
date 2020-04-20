import { useTheme, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import colors from '../utils/colors';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    }
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    margin: '10px 0 20px',
  }
}))

const EditableCard = props => {
  const { onAccept, title, children, actions, hideActions = false, ...inputProps } = props;
  const theme = useTheme();
  const [editable, setEditable] = useState(false);

  const styles = useStyles();

  return (
    <Card {...inputProps} className={styles.card}>
      <div className={styles.row}>
        <Typography component="h4" className={styles.title}>
          {title}
        </Typography>

        <div style={{ flexGrow: 1 }} />

        {(actions && !hideActions) && <div style={{ marginLeft: '2em' }}>
          {actions}
        </div>}
      </div>

      <div className={styles.divider} />

      {children}
    </Card>
  );
}

EditableCard.propTypes = {
  editable: PropTypes.bool
}

export default EditableCard;
